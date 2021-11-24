import { ref } from 'vue';
import { useFetch } from '@vueuse/core';
import { Service } from './interface';
import { createAuthorization } from './auth';

type ModuleName = keyof Service;

/**
 * 暫時跳過 eslint 與 ts 檢查
 * https://github.com/microsoft/TypeScript/issues/21760
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type ModuleParams<M extends ModuleName, P extends keyof Service[M]> = Service[M][P]['params'];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
type ModuleResult<M extends ModuleName, P extends keyof Service[M]> = Service[M][P]['entity'][];

const createUrl = (base: string, params: Record<string, any>) => {
  let url = base;
  const query: string[] = ['$format=JSON'];

  Object.keys(params).forEach((key) => {
    if (/\$.*/.test(key) && params[key]) {
      query.push(`${key}=${params[key]}`);
    } else {
      url = url.replace(`{${key}}`, params[key]);
    }
  });
  return `${url}?${query.join('&')}`;
};

export function useService<M extends ModuleName>(module: M) {
  const env = {
    base: import.meta.env.VITE_API_BASE,
    key: import.meta.env.VITE_API_KEY,
    id: import.meta.env.VITE_API_ID
  };

  return {
    /**
     * 查詢
     * @param path
     * @param defaultParams
     */
    request: <P extends keyof Service[M]>(path: P, defaultParams: ModuleParams<M, P>) => {
      const fullPath = `${env.base}/${module}/${path}`;
      const url = ref(createUrl(fullPath, defaultParams));
      const { data, execute, isFetching, onFetchError, onFetchFinally } = useFetch(url, {
        immediate: false,
        beforeFetch: ({ options }) => {
          options.headers = {
            ...options.headers,
            ...createAuthorization({ key: env.key, id: env.id })
          };
          return {
            options
          };
        }
      }).json<ModuleResult<M, P>>();
      return {
        data,
        execute,
        isFetching,
        onFetchError,
        onFetchFinally,
        reload: (params: ModuleParams<M, P>) => {
          if (!isFetching.value) {
            url.value = createUrl(fullPath, { ...defaultParams, ...params });
            execute();
          }
        }
      };
    }
  };
}

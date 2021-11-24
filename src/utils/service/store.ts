import { Ref, ref, watchEffect } from 'vue';
import { MaybeRef } from '@vueuse/core';
import { useService } from './index';
import { BaseRequestParams } from './interface';

export interface GlobalQuery {
  keyword: string;
  city: string;
}

interface State<T = any> {
  immediate: boolean;
  loading: boolean;
  page: number;
  size: number;
  total: number;
  data: MaybeRef<T[] | null>;
}

type StateOptions<T> = Partial<Omit<State<T>, 'data'>> & Pick<State<T>, 'data'>;

const defineState = <T>(options: StateOptions<T>) => {
  const state: State<T> = { immediate: true, loading: false, page: 1, size: 20, total: 0, ...options };
  return state;
};

interface QueryOptions {
  keyword?: string;
  city?: string;
  page?: number;
  size?: number;
}

interface StoreModule<T> {
  readonly state: Ref<State<T>>;
  query: (conditions: string[], queryOptions?: QueryOptions) => void;
}

const createModule = <T>(handler: () => StoreModule<T>) => handler();

interface RequestOptions {
  state: Ref<State>;
  searchRequest: (params: BaseRequestParams) => void;
  summaryRequest: (params: BaseRequestParams) => void;
  conditions: string[];
  queryOptions?: QueryOptions;
  overwrite?: BaseRequestParams;
}

const createStore = () => {
  const global = ref<GlobalQuery>({
    keyword: '',
    city: ''
  });

  const save = (state: Ref<State>, options: Required<QueryOptions>) => {
    state.value.immediate = false;
    state.value.page = options.page;
    state.value.size = options.size;
    global.value.keyword = options.keyword;
    global.value.city = options.city;
  };

  const repack = (conditions: string[], queryOptions: QueryOptions = {}, overwrite: BaseRequestParams = {}) => {
    const options = {
      page: 1,
      size: 20,
      ...global.value,
      ...queryOptions
    };
    const $filter = conditions.join(' and ');
    const searchParams: BaseRequestParams = {
      $top: options.size,
      $skip: (options.page - 1) * options.size,
      $filter,
      ...overwrite
    };
    const summaryParams: BaseRequestParams = {
      $filter
    };

    return { searchParams, summaryParams, options };
  };

  const request = (requestOptions: RequestOptions) => {
    const { state, searchRequest, summaryRequest, conditions, queryOptions, overwrite } = requestOptions;
    const { searchParams, summaryParams, options } = repack(conditions, queryOptions, overwrite);
    searchRequest(searchParams);

    if (options.page === 1) {
      summaryRequest(summaryParams);
    }

    save(state, options);
  };

  // 旅遊景點
  const scenicSpot = createModule(() => {
    const service = useService('Tourism');
    const summary = service.request('/ScenicSpot', { $select: 'ID' });
    const search = service.request('/ScenicSpot', {});
    const state = ref(defineState({ data: search.data }));

    watchEffect(() => {
      state.value.loading = search.isFetching.value;
      state.value.total = summary.data.value?.length ?? state.value.total;
    });

    return {
      state,
      query: (conditions, queryOptions = {}) =>
        request({
          state,
          conditions,
          queryOptions,
          searchRequest: search.reload,
          summaryRequest: summary.reload,
          overwrite: {
            $orderby: 'UpdateTime desc'
          }
        })
    };
  });

  return {
    global,
    scenicSpot
  };
};

export default createStore();

import { Ref, ComputedRef, ref, computed, watch } from 'vue';
import { useService } from './index';
import { BaseRequestParams } from './interface';
import { defineInjection } from '/src/utils/shorthands';

export interface GlobalQuery {
  keyword: string;
  city: string;
}

interface State {
  immediate: boolean;
  page: number;
  size: number;
}

interface QueryOptions {
  keyword?: string;
  city?: string;
  page?: number;
  size?: number;
}

interface StoreModule<T> {
  state: Ref<State>;
  isLoading: ComputedRef<boolean>;
  total: ComputedRef<number>;
  data: Ref<T[] | null>;
  query: (conditions: string[], queryOptions?: QueryOptions) => void;
}

interface RequestOptions {
  state: Ref<State>;
  searchRequest: (params: BaseRequestParams) => void;
  summaryRequest: (params: BaseRequestParams) => void;
  conditions: string[];
  queryOptions?: QueryOptions;
  overwrite?: BaseRequestParams;
}

export const createStore = () => {
  const moduleKey = ref('');
  const modules: Record<string, Ref<State>> = {};
  const global = ref<GlobalQuery>({
    keyword: '',
    city: ''
  });

  const register = <T>(key: string, generator: () => StoreModule<T>) => {
    const module = generator();

    modules[key] = module.state;

    watch(module.data, () => {
      moduleKey.value = key;
    });

    watch(global, (value, oldValue) => {
      const v1 = JSON.stringify(value);
      const v2 = JSON.stringify(oldValue);
      if (v1 !== v2 && key !== moduleKey.value) {
        module.state.value.immediate = true;
      }
    });

    return module;
  };

  const save = (state: Ref<State>, options: Required<QueryOptions>) => {
    state.value.immediate = false;
    state.value.page = options.page;
    state.value.size = options.size;
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

  // 觀光景點
  const scenicSpot = register('scenicSpot', () => {
    const service = useService('Tourism');
    const summary = service.request('/ScenicSpot', { $select: 'ID' });
    const search = service.request('/ScenicSpot', {});
    const state = ref({ immediate: true, page: 1, size: 20 });

    return {
      state,
      isLoading: computed(() => search.isFetching.value || summary.isFetching.value || false),
      total: computed(() => summary.data.value?.length || 0),
      data: search.data,
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

  // 觀光餐飲
  const restaurant = register('restaurant', () => {
    const service = useService('Tourism');
    const summary = service.request('/Restaurant', { $select: 'ID' });
    const search = service.request('/Restaurant', {});
    const state = ref({ immediate: true, page: 1, size: 20 });

    return {
      state,
      isLoading: computed(() => search.isFetching.value || summary.isFetching.value || false),
      total: computed(() => summary.data.value?.length || 0),
      data: search.data,
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

  // 觀光旅宿
  const hotel = register('hotel', () => {
    const service = useService('Tourism');
    const summary = service.request('/Hotel', { $select: 'ID' });
    const search = service.request('/Hotel', {});
    const state = ref({ immediate: true, page: 1, size: 20 });

    return {
      state,
      isLoading: computed(() => search.isFetching.value || summary.isFetching.value || false),
      total: computed(() => summary.data.value?.length || 0),
      data: search.data,
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

  // 觀光活動
  const activity = register('activity', () => {
    const service = useService('Tourism');
    const summary = service.request('/Activity', { $select: 'ID' });
    const search = service.request('/Activity', {});
    const state = ref({ immediate: true, page: 1, size: 20 });

    return {
      state,
      isLoading: computed(() => search.isFetching.value || summary.isFetching.value || false),
      total: computed(() => summary.data.value?.length || 0),
      data: search.data,
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
    scenicSpot,
    restaurant,
    hotel,
    activity
  };
};

type Store = ReturnType<typeof createStore>;

export const { inject: injectStore, provide: provideStore } = defineInjection<Store>();

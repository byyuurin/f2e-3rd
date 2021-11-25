import { Ref, ref, computed, watch, watchEffect } from 'vue';
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

type StateOptions<T> = Partial<Omit<State<T>, 'data'>> & { data: Ref<T[] | null> };

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

interface RequestOptions {
  state: Ref<State>;
  searchRequest: (params: BaseRequestParams) => void;
  summaryRequest: (params: BaseRequestParams) => void;
  conditions: string[];
  queryOptions?: QueryOptions;
  overwrite?: BaseRequestParams;
}

const createStore = () => {
  const moduleKey = ref('');
  const modules: Record<string, Ref<State>> = {};
  const global = ref<GlobalQuery>({
    keyword: '',
    city: ''
  });

  const register = <T>(key: string, generator: () => StoreModule<T>) => {
    const module = generator();
    const data = computed(() => module.state.value.data);

    modules[key] = module.state;

    watch(data, () => {
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

  // 觀光餐飲
  const restaurant = register('restaurant', () => {
    const service = useService('Tourism');
    const summary = service.request('/Restaurant', { $select: 'ID' });
    const search = service.request('/Restaurant', {});
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

  // 觀光旅宿
  const hotel = register('hotel', () => {
    const service = useService('Tourism');
    const summary = service.request('/Hotel', { $select: 'ID' });
    const search = service.request('/Hotel', {});
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

  // 觀光活動
  const activity = register('activity', () => {
    const service = useService('Tourism');
    const summary = service.request('/Activity', { $select: 'ID' });
    const search = service.request('/Activity', {});
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
    scenicSpot,
    restaurant,
    hotel,
    activity
  };
};

export default createStore();

import { Ref, ref, watch } from 'vue';
import { MaybeRef } from '@vueuse/core';
import { useService } from './index';

export interface GlobalQuery {
  keyword: string;
  city: string;
}

interface State<T> {
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

const createStore = () => {
  const global = ref<GlobalQuery>({
    keyword: '',
    city: ''
  });
  // 旅遊景點
  const scenicSpot = createModule(() => {
    const service = useService('Tourism');
    const summary = service.request('/ScenicSpot', { $select: 'ID' });
    const search = service.request('/ScenicSpot', {});
    const state = ref(defineState({ data: search.data }));

    const save = (options: Required<QueryOptions>) => {
      state.value.immediate = false;
      state.value.page = options.page;
      state.value.size = options.size;
      global.value.keyword = options.keyword;
      global.value.city = options.city;
    };

    watch(search.isFetching, (value) => {
      state.value.loading = value;
    });

    watch(summary.data, (value) => {
      state.value.total = value?.length ?? state.value.total;
    });

    return {
      state,
      query: (conditions, queryOptions = {}) => {
        const options = {
          page: 1,
          size: 20,
          ...global.value,
          ...queryOptions
        };
        const $filter = conditions.join(' and ');

        search.reload({
          $top: options.size,
          $skip: (options.page - 1) * options.size,
          $filter,
          $orderby: 'UpdateTime desc'
        });

        if (options.page === 1) {
          summary.reload({ $filter });
        }

        save(options);
      }
    };
  });

  return {
    global,
    scenicSpot
  };
};

export default createStore();

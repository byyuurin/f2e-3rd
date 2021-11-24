<script lang="ts" setup>
import { cityOptions } from '/src/utils/service/config';
import store, { GlobalQuery } from '/src/utils/service/store';

const options = cityOptions.map((option) => {
  if (!option.value) {
    return option;
  }
  return {
    label: option.label,
    value: option.label
  };
});

interface Props {
  loading?: boolean;
  total?: number;
  pagination?: {
    page: number;
    size: number;
  };
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  total: 0,
  pagination: () => ({ page: 1, size: 10 })
});

const emit = defineEmits<{
  (event: 'search', payload: GlobalQuery): void;
  (event: 'page-change', page: number): void;
}>();

const route = useRoute();

const search = ref({
  module: route.path.replace(/\/tourism\//, ''),
  ...unref(store.global)
});

const isOverlayVisible = ref(false);

watchEffect(() => {
  if (props.loading) {
    isOverlayVisible.value = true;
  } else {
    setTimeout(() => {
      isOverlayVisible.value = false;
    }, 250);
  }
});

const maxPage = computed(() => Math.ceil(props.total / props.pagination.size));
const canPrev = computed(() => props.pagination.page > 1);
const canNext = computed(() => props.pagination.page < maxPage.value);

const handleSearch = () => {
  const { keyword, city } = search.value;
  store.global.value = { keyword, city };
  emit('search', { keyword, city });
};

const handlePageChange = (type: 'prev' | 'next' | Event) => {
  if (type === 'prev' && canPrev.value) {
    emit('page-change', props.pagination.page - 1);
  }
  if (type === 'next' && canNext.value) {
    emit('page-change', props.pagination.page + 1);
  }
  if (typeof type !== 'string') {
    emit('page-change', +(type.target as HTMLSelectElement).value);
  }
};
</script>

<template>
  <div class="with-overlay" :class="{ 'is-active': isOverlayVisible }">
    <div
      class="
        m-2
        mx-5
        p-4
        py-18
        text-center
        rounded-md
        select-none
        bg-gradient-to-br
        from-yellow-200
        to-light-100
        dark:from-indigo-700 dark:to-violet-500
      "
    >
      <div class="py-4 text-4xl">
        <span class="text-violet-700 dark:text-yellow-300">探索</span>
        <span class="px-2 text-dark-500 dark:text-light-50">您想去的地方</span>
      </div>

      <div
        class="mx-auto max-w-screen-sm flex flex-col sm:flex-row items-center text-dark-700"
        @keyup.enter="handleSearch"
      >
        <div class="m-2 w-full sm:w-auto flex-grow">
          <ui-input v-model:value="search.keyword" class="w-full" placeholder="搜尋關鍵字">
            <template #suffix>
              <div
                class="
                  inline-flex
                  justify-center
                  items-center
                  h-8
                  w-8
                  rounded-md
                  text-light-50
                  bg-gradient-to-br
                  from-yellow-400
                  to-yellow-500
                  cursor-pointer
                "
                @click="handleSearch"
              >
                <svg-jam-search />
              </div>
            </template>
          </ui-input>
        </div>
        <div class="m-2 w-full sm:w-auto">
          <ui-select v-model:value="search.city" :options="options" class="w-full" @update:value="handleSearch" />
        </div>
      </div>
    </div>
    <div class="p-5 px-7 m-auto max-w-screen-2xl text-dark-700 dark:text-light-900">
      <div class="flex items-center p-2 select-none text-2xl">
        <span class="pr-2">
          <svg-fa-solid-hiking />
        </span>
        共有<span class="px-2 text-yellow-300" v-text="props.total" />筆搜尋結果
      </div>
      <slot />
      <div
        v-show="maxPage > 1"
        class="
          sticky
          z-5
          bottom-0
          flex
          justify-center
          items-center
          p-2
          py-4
          text-center
          children:mx-1
          whitespace-nowrap
          bg-light-50
          dark:bg-dark-300
        "
      >
        <ui-button class="text-small" :disabled="!canPrev" @click="handlePageChange('prev')">
          <template #content>
            <svg-il-arrow-left />
          </template>
        </ui-button>

        <div
          class="
            relative
            px-2
            flex-shrink-0 flex
            items-center
            rounded-md
            overflow-hidden
            select-none
            bg-true-gray-200 bg-opacity-50
            dark:bg-dark-100
            shadow-sm
            dark:shadow-light-900
          "
        >
          <select
            :value="pagination.page"
            class="
              h-9
              m-1
              px-4
              text-current text-center
              outline-none
              rounded-md
              appearance-none
              bg-light-50
              dark:bg-dark-400
            "
            @change="handlePageChange($event)"
          >
            <option
              v-for="page in maxPage"
              :key="page"
              class="bg-light-50 text-dark-900 dark:bg-dark-400 dark:text-true-gray-400"
              :value="page"
            >
              {{ page }}
            </option>
          </select>
          <svg-mdi-slash-forward />
          <div class="px-2">
            {{ maxPage }}
          </div>
        </div>

        <ui-button class="text-small" :disabled="!canNext" @click="handlePageChange('next')">
          <template #content>
            <svg-il-arrow-right />
          </template>
        </ui-button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.with-overlay {
  @apply relative;

  &:before {
    content: '';
    transition: z-index 0s 0.5s, background-color 0.5s 0s;

    @apply absolute
      -z-1
      top-0
      left-0
      w-full
      h-full
      text-transparent
      bg-transparent
      cursor-wait;
  }

  &.is-active {
    &:before {
      transition: z-index 0s 0s, background-color 0.5s 0s;

      @apply z-5 bg-opacity-90 bg-light-50 dark:(bg-opacity-90 bg-dark-900);
    }
  }
}
</style>

<script lang="ts" setup>
import { cityOptions } from '/src/utils/service/config'
import { GlobalQuery, injectStore } from '/src/utils/service/store'

interface Props {
  loading?: boolean
  total?: number
  pagination?: {
    page: number
    size: number
  }
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  total: 0,
  pagination: () => ({ page: 1, size: 10 })
})

const emit = defineEmits<{
  (event: 'search', payload: GlobalQuery): void
  (event: 'page-change', page: number): void
}>()

const store = injectStore()!
const route = useRoute()

// 因為自動切換 api 還沒想到解法, 先作為關鍵字查詢
const options = cityOptions.map((option) => {
  if (!option.value) {
    return option
  }
  return {
    label: option.label,
    value: option.label
  }
})

const search = ref({
  module: route.path.replace(/\/tourism\//, ''),
  ...unref(store.global)
})

const isOverlayVisible = ref(false)

watchEffect(() => {
  if (props.loading) {
    isOverlayVisible.value = true
  } else {
    setTimeout(() => {
      isOverlayVisible.value = false
    }, 250)
  }
})

const handleSearch = () => {
  const { keyword, city } = search.value
  store.global.value = { keyword, city }
  emit('search', { keyword, city })
}

const handlePageChange = (page: number) => emit('page-change', page)
</script>

<template>
  <div class="with-overlay" :class="{ 'is-active': isOverlayVisible }">
    <div
      class="m-2 mx-5 p-4 py-18 text-center rounded-md select-none bg-gradient-to-br from-yellow-200 to-light-100 dark:from-indigo-700 dark:to-violet-500"
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
                class="inline-flex justify-center items-center h-8 w-8 rounded-md text-light-50 bg-gradient-to-br from-yellow-400 to-yellow-500 cursor-pointer"
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
      <ui-pagination
        auto-hide
        class="sticky z-2 bottom-0"
        :page="props.pagination.page"
        :size="props.pagination.size"
        :total="props.total"
        @change-page="handlePageChange"
      />
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

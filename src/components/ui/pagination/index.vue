<script lang="ts">
export default { name: 'UiPagination' }
</script>

<script lang="ts" setup>
interface Props {
  autoHide?: boolean
  page: number
  size: number
  total: number
}

const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits<{
  (event: 'change-page', value: number): void
}>()

const info = computed(() => {
  const { autoHide, page, size, total } = props
  const maxPage = Math.ceil(total / size)
  return {
    page,
    maxPage,
    prevEnabled: page > 1,
    nextEnabled: page < maxPage,
    visible: maxPage > 1 || !autoHide
  }
})

const handlePageChange = (value: number | Event) => {
  if (typeof value === 'number') {
    emit('change-page', value)
  } else {
    emit('change-page', +(value.target as HTMLSelectElement).value)
  }
}
</script>

<template>
  <div
    v-show="info.visible"
    class="flex justify-center items-center p-2 py-4 text-center children:mx-1 whitespace-nowrap bg-light-50 dark:bg-dark-300"
  >
    <ui-button class="text-small" :disabled="!info.prevEnabled" @click="handlePageChange(props.page - 1)">
      <template #content>
        <svg-il-arrow-left />
      </template>
    </ui-button>

    <div
      class="relative px-2 flex-shrink-0 flex items-center rounded-md overflow-hidden select-none bg-true-gray-200 bg-opacity-50 dark:bg-dark-100 shadow-sm dark:shadow-dark-50"
    >
      <select
        :value="info.page"
        class="h-9 m-1 px-4 text-current text-center outline-none rounded-md appearance-none bg-light-50 dark:bg-dark-400"
        @change="handlePageChange($event)"
      >
        <option
          v-for="value in info.maxPage"
          :key="value"
          class="bg-light-50 text-dark-900 dark:bg-dark-400 dark:text-true-gray-400"
          :value="value"
          v-text="value"
        />
      </select>
      <svg-mdi-slash-forward />
      <div class="px-2" v-text="info.maxPage" />
    </div>

    <ui-button class="text-small" :disabled="!info.nextEnabled" @click="handlePageChange(props.page + 1)">
      <template #content>
        <svg-il-arrow-right />
      </template>
    </ui-button>
  </div>
</template>

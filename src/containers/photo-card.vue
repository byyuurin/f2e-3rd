<script lang="ts" setup>
interface Props {
  src?: string
  alt?: string
  title?: string
  description?: string
  city?: string
  time?: string
}

const props = withDefaults(defineProps<Props>(), { src: '', alt: '', title: '', description: '', city: '', time: '' })
const emit = defineEmits(['more'])
</script>

<template>
  <ui-card>
    <template #header>
      <div class="group relative h-50 overflow-hidden bg-true-gray-200 dark:bg-dark-50">
        <img
          v-if="props.src"
          class="min-w-full min-h-full transition duration-750 object-center object-fill transform opacity-85 pointer-events-none group-hover:scale-115 group-hover:opacity-100"
          :src="props.src"
          :alt="props.alt"
        />
        <div v-else class="flex justify-center items-center min-h-full text-2xl text-true-gray-500">暫無圖片</div>
        <div
          class="absolute z-1 right-0 bottom-0 transition -translate-x-[25%] -translate-y-[25%] md:translate-y-[100%] duration-300 transform group-hover:-translate-y-[25%]"
        >
          <div
            class="inline-flex justify-center items-center w-12 h-12 rounded-1 text-xl cursor-pointer bg-true-gray-100 bg-opacity-85 hover:bg-opacity-100 dark:bg-dark-200 dark:hover:bg-dark-100"
            @click="emit('more')"
          >
            <svg-entypo-location />
          </div>
        </div>
      </div>
    </template>
    <h3 class="py-2 font-bold text-xl text-dark-900 dark:text-light-900" v-text="props.title" />
    <p
      class="overflow-ellipsis line-clamp-3 text-base h-18 text-true-gray-600 dark:text-true-gray-400"
      v-text="props.description"
    />
    <template #footer>
      <div class="p-4 pt-0">
        <div v-if="props.city" class="inline-flex items-start">
          <svg-carbon-location-filled class="flex-shrink-0 text-xl text-orange-400 dark:text-yellow-300" />
          <div class="px-2 text-true-gray-500 dark:text-true-gray-300" v-text="props.city" />
        </div>
        <div v-if="props.time" class="inline-flex items-start">
          <svg-bx-bxs-time-five class="flex-shrink-0 text-xl text-orange-400 dark:text-yellow-300" />
          <div class="px-2 text-true-gray-500 dark:text-true-gray-300" v-text="props.time" />
        </div>
      </div>
    </template>
  </ui-card>
</template>

<script lang="ts" setup>
import { useService } from '/src/utils/service'
import { injectRouteMeta } from '/src/meta'

const meta = injectRouteMeta()
const title = ref(unref(meta?.title) || '')
const rootName = 'tourism-activity'
const router = useRouter()
const route = useRoute()
const service = useService('Tourism')
const search = service.request('/Activity', { $top: 1, $filter: `ActivityID eq '${route.params.id}'` })

useHead({ title })

search.onFetchFinally(() => {
  if (!search.data.value?.length) {
    router.replace({ name: rootName })
  } else {
    title.value = `${search.data.value[0].ActivityName} - 台灣旅遊景點導覽`
  }
})

search.execute()

const data = computed(() => search.data.value && search.data.value[0])

const mapUrl = computed(() => {
  if (!data.value) {
    return null
  }
  const { PositionLat, PositionLon } = data.value.Position || {}
  return `https://maps.google.com/maps?q=${PositionLat},${PositionLon}&z=18&ie=UTF8&output=embed`
})
</script>

<template>
  <div class="p-4 m-auto max-w-screen-2xl text-true-gray-600 dark:text-true-gray-400">
    <div class="flex items-center w-full">
      <ui-button @click="router.push({ name: rootName })">
        <template #content>
          <svg-ic-baseline-arrow-back-ios-new />
        </template>
      </ui-button>

      <h2 class="flex-grow px-4 text-2xl dark:text-light-900" v-text="data?.ActivityName" />
    </div>
    <div class="flex flex-wrap py-4 w-full">
      <div class="w-full py-4 md:w-1/2">
        <img
          v-if="data?.Picture?.PictureUrl1"
          class="w-full max-w-full rounded-md pointer-events-none"
          :src="data.Picture?.PictureUrl1"
          :alt="data.Picture?.PictureDescription1"
        />
        <div
          v-else
          class="flex justify-center items-center min-h-120 rounded-md text-2xl text-true-gray-500 bg-true-gray-200 dark:bg-dark-50"
        >
          暫無圖片
        </div>
      </div>
      <div class="w-full flex flex-col py-4 md:w-1/2">
        <p class="flex-grow text-base md:px-4" v-text="data?.Description" />
        <div
          class="flex flex-wrap mt-4 md:mx-4 px-4 py-2 shadow-md text-true-gray-600 dark:text-true-gray-300 bg-true-gray-100 dark:bg-dark-100 rounded-sm"
        >
          <div v-show="data?.Address" class="flex items-center py-2 <sm:w-full sm:min-w-1/2">
            <svg-carbon-location-filled class="flex-shrink-0 text-xl text-orange-400 dark:text-yellow-300" />
            <span class="px-4" v-text="data?.Address" />
          </div>
          <div v-show="data?.Organizer" class="flex items-center py-2 <sm:w-full sm:min-w-1/2">
            <svg-ri-service-fill class="flex-shrink-0 text-xl text-orange-400 dark:text-yellow-300" />
            <span class="px-4" v-text="data?.Organizer" />
          </div>
          <div v-show="data?.Phone" class="flex items-center py-2 <sm:w-full sm:min-w-1/2">
            <svg-fa-solid-phone class="flex-shrink-0 text-xl text-orange-400 dark:text-yellow-300" />
            <a :href="`tel:${data?.Phone}`">
              <span class="px-4" v-text="data?.Phone" />
            </a>
          </div>
        </div>
      </div>
      <div class="w-full py-4 md:w-1/2">
        <h3 class="text-2xl leading-10 dark:text-light-900">交通方式</h3>
        <p v-text="data?.TravelInfo || '暫無資料'" />
      </div>
      <div class="w-full py-4 md:w-1/2 md:px-4">
        <iframe v-if="mapUrl" class="w-full h-full h-120 rounded-sm overflow-hidden" :src="mapUrl" frameborder="0" />
      </div>
    </div>
  </div>
</template>

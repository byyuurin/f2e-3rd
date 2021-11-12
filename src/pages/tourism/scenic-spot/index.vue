<route lang="yaml">
meta:
  title: 台灣旅遊景點導覽
</route>

<script lang="ts" setup>
import { useService } from '/src/utils/service';
import { savedSearch, cityOptions } from '/src/utils/service/shared';

const service = useService('Tourism');
const { data, reload } = service.request('/ScenicSpot', {});

const list = computed(() =>
  data.value?.map((raw) => {
    return {
      City: raw.Address?.replace(/(\u7e23|\u5e02).*/, '$1'),
      ...raw
    };
  })
);

const handleSearch = () => {
  console.log('handleSearch');
  const { keyword, city } = unref(savedSearch);
  const targetCity = city && cityOptions.find((item) => item.value === city)?.label;
  const conditions: string[] = [];

  if (targetCity) conditions.push(`contains(Address, '${targetCity}')`);
  if (keyword) conditions.push(`contains(Address, '${keyword}')`);

  reload({ $top: 10, $filter: conditions.length ? conditions.join(' and ') : undefined });
};
</script>

<template>
  <tourism-search class="text-orange-200" @search="handleSearch">
    <div class="flex flex-wrap items-stretch m-auto max-w-screen-2xl p-2">
      <div v-for="item of list" :key="item.ID" class="group w-full p-2 md:max-w-1/2 2xl:max-w-1/3 select-none">
        <ui-card>
          <template #header>
            <div class="relative h-50 overflow-hidden bg-true-gray-200 dark:bg-dark-50">
              <img
                v-if="item.Picture?.PictureUrl1"
                class="
                  min-w-full min-h-full
                  transition
                  duration-750
                  object-center object-contain
                  transform
                  opacity-85
                  pointer-events-none
                  group-hover:scale-115 group-hover:opacity-100
                "
                :src="item.Picture?.PictureUrl1"
                :alt="item.Picture?.PictureDescription1"
              />
              <div v-else class="flex justify-center items-center min-h-full text-2xl text-true-gray-500">暫無圖片</div>
            </div>
          </template>
          <h3 class="py-2 font-bold text-xl text-dark-900 dark:text-light-900" v-text="item.Name" />
          <p
            class="overflow-ellipsis line-clamp-3 text-base h-18 text-true-gray-600 dark:text-true-gray-400"
            v-text="item.Description"
          />
          <template #footer>
            <div class="p-4 pt-0">
              <div class="inline-flex items-start">
                <svg-carbon-location-filled class="flex-shrink-0 text-xl text-orange-400 dark:text-yellow-300" />
                <div class="px-2 text-true-gray-500 dark:text-true-gray-300" v-text="item.City" />
              </div>
              <div class="inline-flex items-start">
                <svg-bx-bxs-time-five class="flex-shrink-0 text-xl text-orange-400 dark:text-yellow-300" />
                <div class="px-2 text-true-gray-500 dark:text-true-gray-300" v-text="item.OpenTime" />
              </div>
            </div>
          </template>
        </ui-card>
      </div>
    </div>
  </tourism-search>
</template>

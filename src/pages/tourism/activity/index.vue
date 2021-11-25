<route lang="yaml">
meta:
  title: 活動資訊 - 台灣旅遊景點導覽
</route>

<script lang="ts" setup>
import { MaybeRef } from '@vueuse/core';
import { injectAppAction } from '/src/meta';
import store, { GlobalQuery } from '/src/utils/service/store';

const wrapperRef = ref<HTMLDivElement>();

const router = useRouter();
const appAction = injectAppAction();

const searchAttrs = computed(() => {
  const { page, size, total, loading } = store.activity.state.value;
  return {
    loading,
    total,
    pagination: {
      page,
      size
    }
  };
});

const list = computed(() => unref(store.activity.state.value.data));

const search = (query: MaybeRef<GlobalQuery>, page = 1) => {
  const conditions: string[] = ['City ne null', 'Description ne null'];
  const { keyword, city } = unref(query);

  if (city) conditions.push(`City eq '${city}'`);
  if (keyword) conditions.push(`contains(Name, '${keyword}')`);

  store.activity.query(conditions, { page });
};

const handleSearch = (query: MaybeRef<GlobalQuery>, page = 1) => search(query, page);

const handlePageChange = (page: number) => {
  search(store.global, page);
  const offsetParent = (wrapperRef.value?.offsetParent as HTMLDivElement)?.offsetTop;
  const offsetWrapper = wrapperRef.value?.offsetTop || 0;
  appAction?.top(true, {
    top: offsetParent + offsetWrapper - 52
  });
};

const handleReadMore = (id?: string) => {
  appAction?.top(false);
  router.push({ name: 'tourism-activity-id', params: { id } });
};

if (store.activity.state.value.immediate) {
  handleSearch(store.global);
}
</script>

<template>
  <tourism-search v-bind="searchAttrs" class="text-orange-200" @search="handleSearch" @page-change="handlePageChange">
    <div ref="wrapperRef" class="flex flex-wrap items-stretch">
      <div
        v-for="item of list"
        :key="item.ID"
        class="group w-full p-2 md:max-w-1/2 xl:max-w-1/3 2xl:max-w-1/4 select-none"
      >
        <photo-card
          :src="item.Picture?.PictureUrl1"
          :alt="item.Picture?.PictureDescription1"
          :title="item.Name"
          :description="item.Description"
          :city="item.City"
          @more="handleReadMore(item.ID)"
        />
      </div>
    </div>
  </tourism-search>
</template>

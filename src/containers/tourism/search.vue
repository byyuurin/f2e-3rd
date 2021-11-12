<script lang="ts" setup>
import { savedSearch, cityOptions } from '/src/utils/service/shared';

const emit = defineEmits(['search']);

const route = useRoute();

const search = ref({
  module: route.path.replace(/\/tourism\//, ''),
  ...unref(savedSearch)
});

const handleSearch = () => {
  savedSearch.value = {
    keyword: search.value.keyword,
    city: search.value.city
  };
  emit('search');
};

onMounted(() => {
  emit('search');
});
</script>

<template>
  <div>
    <div
      class="
        m-2
        mx-5
        p-4
        py-18
        text-center
        rounded-md
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

      <div class="mx-auto max-w-screen-sm flex items-center text-dark-700" @keyup.enter="handleSearch">
        <div class="m-2 relative inline-block rounded-md overflow-hidden flex-grow">
          <input
            v-model="search.keyword"
            class="w-full h-12 px-3 pr-12 text-xl text-current outline-none truncate"
            type="text"
            placeholder="搜尋關鍵字"
          />
          <div
            class="
              absolute
              z-1
              top-2
              right-2
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
        </div>
        <div class="m-2 inline-block rounded-md overflow-hidden">
          <select v-model="search.city" class="w-full px-2 h-12 text-current outline-none appearance-none">
            <option v-for="option of cityOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="p-2 px-5">
      <slot />
    </div>
  </div>
</template>

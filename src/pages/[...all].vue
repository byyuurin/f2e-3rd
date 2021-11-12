<route lang="yaml">
meta:
  layout: 404
</route>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const regex = /\/index\.(htm|html)$/i;

if (regex.test(route.path)) {
  router.replace(route.path.replace(regex, '/'));
}
</script>

<template>
  <div class="flex justify-center items-center w-full h-full p-2">
    <div class="flex flex-col items-center w-full max-w-screen-sm p-8 rounded-md bg-true-gray-100 dark:bg-dark-100">
      <svg-twemoji-crying-face class="text-[40px]" />
      <div class="py-2 text-center">
        <h3 class="text-2xl">沒有這個頁面哦…</h3>
        <router-link to="/" class="text-lg text-orange-400 dark:text-yellow-300">回去吧</router-link>
      </div>
    </div>
  </div>
</template>

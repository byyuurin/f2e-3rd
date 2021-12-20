<route lang="yaml">
meta:
  title: 2021 年前端/UI 從業人員現況問卷調查
</route>

<script lang="ts" setup>
import { isDark } from '/src/meta'
</script>

<template>
  <div class="relative h-auto min-h-full flex flex-col">
    <div
      class="sticky z-10 top-0 flex flex-wrap items-center px-5 py-2 mb-[2px] bg-light-50 dark:text-white dark:bg-dark-300 shadow-sm dark:shadow-light-900"
    >
      <div class="flex-grow my-2 px-3 text-3xl">2021 年前端/UI 從業人員現況問卷調查</div>
      <div class="py-4 inline-flex items-center" all="outline-solid-red-500 outline-opacity-0">
        <dark-toggle v-model="isDark" class="h-13 w-13 text-lg" />
      </div>
    </div>
    <div class="relative flex-grow bg-light-50 dark:text-white dark:bg-dark-300">
      <router-view />
    </div>
  </div>
</template>

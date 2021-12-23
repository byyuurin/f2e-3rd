<route lang="yaml">
meta:
  title: 台灣旅遊景點導覽
</route>

<script lang="ts" setup>
import { isDark } from '/src/meta'
</script>

<template>
  <div class="relative h-auto min-h-full flex flex-col">
    <div
      class="sticky z-10 top-0 flex flex-wrap items-center px-5 py-2 mb-[2px] bg-light-50 dark:text-white dark:bg-dark-300 shadow-sm dark:shadow-dark-50"
    >
      <div class="rounded-md w-15 h-15 leading-15 bg-yellow-300 text-[0px] text-center text-white">
        <svg-vs-butterfly class="inline-block align-middle text-4xl text-light-50" />
      </div>
      <div class="flex-grow my-2 px-3 text-3xl">台灣旅遊景點導覽</div>
      <div class="py-4 inline-flex items-center" all="outline-solid-red-500 outline-opacity-0">
        <!-- <ui-button class="mr-4 px-7 h-13">
          <template #prefix>
            <svg-zmdi-favorite class="text-sm text-orange-400 dark:text-yellow-300" />
          </template>
          <span class="text-sm">我的最愛</span>
        </ui-button> -->
        <dark-toggle v-model="isDark" class="h-13 w-13 text-lg" />
      </div>
    </div>
    <div class="relative flex-grow bg-light-50 dark:text-white dark:bg-dark-300">
      <tourism-navigator />
      <router-view />
    </div>
    <div class="p-8 text-center bg-light-50 dark:bg-transparent">
      <div class="text-xl">
        <a href="javascript:void(0);" class="inline-block px-2 text-true-gray-600 dark:text-current">
          <svg-brandico-facebook-rect />
        </a>
        <a href="javascript:void(0);" class="inline-block px-2 text-true-gray-600 dark:text-current">
          <svg-vs-line-square />
        </a>
        <a href="javascript:void(0);" class="inline-block px-2 text-true-gray-600 dark:text-current">
          <svg-fontisto-instagram />
        </a>
      </div>
      <div>台灣旅遊景點導覽</div>
    </div>
  </div>
</template>

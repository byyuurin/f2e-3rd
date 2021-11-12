<route lang="yaml">
meta:
  title: The F2E 前端 & UI 修煉精神時光屋(2021)
</route>

<script lang="ts" setup>
import { isDark } from '/src/meta';
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <div class="flex items-center">
      <h1 class="flex-grow text-2xl">The F2E 前端 & UI 修煉精神時光屋(2021)</h1>
      <dark-toggle v-model="isDark" />
    </div>
    <div class="flex-grow">
      <ul>
        <li class="flex items-center">
          <a class="text-orange-400 dark:text-yellow-300" href="https://2021.thef2e.com/" target="_blank">
            The F2E 前端 &amp; UI 修煉精神時光屋
            <svg-la-external-link-alt />
          </a>
        </li>
        <li class="flex items-center">
          <a
            class="text-orange-400 dark:text-yellow-300"
            href="ttps://tdx.transportdata.tw/api-service/swagger"
            target="_blank"
          >
            TDX 運輸資料流通服務
            <svg-la-external-link-alt />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

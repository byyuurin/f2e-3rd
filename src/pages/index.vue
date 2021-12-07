<route lang="yaml">
meta:
  title: The F2E 前端 & UI 修煉精神時光屋(2021)
</route>

<script lang="ts" setup>
const router = useRouter()
// TODO: 活動主題頁, 提供三週頁面連結
router.replace({ name: 'tourism-scenic-spot' })
</script>

<template>
  <router-view />
</template>

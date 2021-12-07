<script lang="ts" setup>
import { injectRouteMeta } from '/src/meta'

const meta = injectRouteMeta()
const title = computed(() => {
  return unref(meta?.title) || 'Page Not Found'
})

useHead({
  title
})
</script>

<template>
  <!-- layout: 404 -->
  <router-view />
</template>

<script lang="ts" setup>
import { provideRouteMeta, provideAppAction } from '/src/meta'
import { createStore, provideStore } from '/src/utils/service/store'

const route = useRoute()

const title = computed(() => {
  return `${route.meta.title ?? ''}`
})

provideRouteMeta({
  title
})
provideAppAction({
  top: (animated = true, options = { left: 0, top: 0 }) =>
    document.querySelector('#app')?.scrollTo({ ...options, behavior: animated ? 'smooth' : 'auto' })
})
provideStore(createStore())
</script>

<template>
  <router-view />
</template>

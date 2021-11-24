<script lang="ts" setup>
import { provideRouteMeta, provideAppAction } from '/src/meta';

const route = useRoute();

const title = computed(() => {
  return `${route.meta.title ?? ''}`;
});

provideRouteMeta({
  title
});
provideAppAction({
  top: (animated = true) =>
    document.querySelector('#app')?.scrollTo({ left: 0, top: 0, behavior: animated ? 'smooth' : 'auto' })
});
</script>

<template>
  <router-view />
</template>

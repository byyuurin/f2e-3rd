<script lang="ts" setup>
import { injectRouteMeta } from '/src/meta';

const route = useRoute();

const title = computed(() => {
  return `${route.meta.title ?? ''}`;
});

injectRouteMeta({
  title
});
</script>

<template>
  <router-view />
</template>

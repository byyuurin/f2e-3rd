<script lang="ts" setup>
import { injectRouteMeta, injectAppAction } from '/src/meta';

const route = useRoute();

const title = computed(() => {
  return `${route.meta.title ?? ''}`;
});

injectRouteMeta({
  title
});
injectAppAction();
</script>

<template>
  <router-view />
</template>

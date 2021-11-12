<script lang="ts" setup>
const route = useRoute();
const title = computed(() => {
  return (route.meta.title as string) ?? 'Page Not Found';
});

useHead({
  title
});
</script>

<template>
  <!-- layout: 404 -->
  <router-view />
</template>

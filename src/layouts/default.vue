<script lang="ts" setup>
import { useRouteMeta } from '/src/meta';

const meta = useRouteMeta();

if (meta) {
  useHead({
    title: meta.title
  });
}
</script>

<template>
  <!-- layout: default -->
  <router-view />
</template>

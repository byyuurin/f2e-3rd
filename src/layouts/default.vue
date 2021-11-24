<script lang="ts" setup>
import { injectRouteMeta } from '/src/meta';

const meta = injectRouteMeta();

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

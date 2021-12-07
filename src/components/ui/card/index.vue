<script lang="ts">
export default { name: 'UiCard' }
</script>

<script lang="ts" setup></script>

<template>
  <div
    class="inline-flex w-full h-full flex-col overflow-hidden rounded-xl shadow-md bg-true-gray-100 dark:bg-dark-100"
  >
    <div v-if="$slots.header"><slot name="header" /></div>
    <div class="p-4"><slot /></div>
    <div v-if="$slots.footer"><slot name="footer" /></div>
  </div>
</template>

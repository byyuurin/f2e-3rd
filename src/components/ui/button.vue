<script lang="ts" setup>
const emit = defineEmits(['click']);
</script>

<template>
  <div
    class="
      p-3
      px-7
      rounded-md
      inline-flex
      items-center
      align-top
      cursor-pointer
      transition
      duration-100
      select-none
      overflow-hidden
      bg-yellow-200 bg-opacity-50
      hover:bg-opacity-75
      active:bg-opacity-100
      dark:bg-dark-100 dark:hover:bg-dark-50 dark:active:bg-opacity-75
    "
    @click="emit('click')"
  >
    <div class="flex-shrink-0"><slot name="prefix" /></div>
    <div class="flex-shrink-0 inline-block px-[0.5em]"><slot /></div>
    <div class="flex-shrink-0"><slot name="suffix" /></div>
  </div>
</template>

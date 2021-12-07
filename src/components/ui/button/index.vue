<script lang="ts">
export default { name: 'UiButton' }
</script>

<script lang="ts" setup>
interface Props {
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), { disabled: false })

const emit = defineEmits(['click'])
</script>

<template>
  <div
    class="p-3 rounded-md inline-flex items-center align-top cursor-pointer transition duration-100 select-none whitespace-nowrap overflow-hidden bg-true-gray-200 bg-opacity-50 dark:bg-dark-100 dark:hover:bg-dark-50 hover:bg-opacity-75 active:bg-opacity-100 dark:active:bg-opacity-75 shadow-sm dark:shadow-light-900"
    :class="props.disabled ? 'pointer-events-none opacity-55' : ''"
    @click="emit('click')"
  >
    <slot name="prefix" />
    <slot name="content">
      <div class="px-[0.5em] leading-none"><slot /></div>
    </slot>
    <slot name="suffix" />
  </div>
</template>

<script lang="ts">
export default { name: 'UiButton' }
</script>

<script lang="ts" setup>
interface Props {
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), { disabled: false })

const emit = defineEmits(['click'])

const handleClick = () => {
  if (!props.disabled) {
    emit('click')
  }
}
</script>

<template>
  <div
    class="p-3 rounded-md inline-flex justify-center items-center align-top transition duration-100 select-none whitespace-nowrap overflow-hidden bg-true-gray-200 bg-opacity-50 dark:bg-dark-100 shadow-sm dark:shadow-dark-50"
    :class="
      props.disabled
        ? 'cursor-not-allowed opacity-55'
        : 'cursor-pointer dark:hover:bg-dark-50 hover:bg-opacity-75 active:bg-opacity-100 dark:active:bg-opacity-75'
    "
    @click="handleClick"
  >
    <slot name="prefix" />
    <slot name="content">
      <div class="px-[0.5em] leading-none"><slot /></div>
    </slot>
    <slot name="suffix" />
  </div>
</template>

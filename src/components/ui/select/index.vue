<script lang="ts">
export default { name: 'UiSelect' }
</script>

<script lang="ts" setup>
import { UiSelectOption } from './types'
import { InputSize, inputFontSize, inputHeight } from '../_shared'

interface Props {
  size?: InputSize
  value: string | number
  options: UiSelectOption[]
}

const props = withDefaults(defineProps<Props>(), { size: 'medium' })

const innerValue = useVModel(props, 'value')

const innerStyle = computed(() => {
  const classList = [
    'flex-grow',
    'px-3',
    'pr-8',
    'w-full',
    'truncate',
    'text-current',
    'bg-transparent',
    'outline-none',
    'appearance-none',
    'cursor-pointer'
  ]
  classList.push(inputFontSize[props.size])
  classList.push(inputHeight[props.size])
  return classList
})
</script>

<template>
  <div class="inline-block text-dark-700 overflow-hidden rounded-md shadow-md">
    <div class="group relative flex items-center bg-white">
      <select v-model="innerValue" :class="innerStyle">
        <option
          v-for="option of props.options"
          :key="option.value"
          class="before:content-aa"
          :value="option.value"
          v-text="option.label"
        />
      </select>
      <span
        class="absolute top-[50%] right-0 transform -translate-x-[50%] -translate-y-[50%] inline-flex items-center pointer-events-none"
      >
        <svg-ic-round-arrow-drop-down />
      </span>
    </div>
  </div>
</template>

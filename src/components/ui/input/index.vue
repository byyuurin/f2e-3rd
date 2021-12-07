<script lang="ts">
export default { name: 'UiInput' }
</script>

<script lang="ts" setup>
import { InputSize, inputFontSize, inputHeight } from '../_shared'

interface Props {
  type?: 'text' | 'password' | 'number'
  size?: InputSize
  value: string | number
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), { type: 'text', size: 'medium', placeholder: '' })

const innerValue = useVModel(props, 'value')

const innerStyle = computed(() => {
  const classList = ['flex-grow', 'px-3', 'truncate', 'text-current', 'bg-transparent', 'outline-none']
  classList.push(inputFontSize[props.size])
  classList.push(inputHeight[props.size])
  return classList
})
</script>

<template>
  <div class="inline-flex items-center bg-white overflow-hidden rounded-md shadow-md">
    <slot name="prepend">
      <div v-if="$slots.prefix" m="-r-1" p="x-3 r-0" class="inline-flex justify-center items-center">
        <slot name="prefix" />
      </div>
    </slot>
    <input v-model="innerValue" :class="innerStyle" :type="props.type" :placeholder="props.placeholder" />
    <slot name="append">
      <div v-if="$slots.suffix" m="-l-1" p="x-3 l-0" class="inline-flex justify-center items-center">
        <slot name="suffix" />
      </div>
    </slot>
  </div>
</template>

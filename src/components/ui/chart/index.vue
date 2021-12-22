<script lang="ts">
export default { name: 'UiChart' }
</script>

<script lang="ts" setup>
import { ChartOption, ChartInstance, useChart } from './utils'

interface Props {
  option: ChartOption | null
}

const props = withDefaults(defineProps<Props>(), { option: null })

const chartRef = ref<HTMLDivElement>()

let instance: ChartInstance | null = null

useEventListener('resize', () => instance?.resize())

watchEffect(() => {
  const el = chartRef.value

  if (el && !instance) {
    instance = useChart({ el })
  }

  if (instance && props.option) {
    instance.setOption(props.option)
  }
})
</script>

<template>
  <div class="relative w-full pb-[50%]">
    <div
      ref="chartRef"
      class="absolute top-0 left-0 right-0 bottom-0 overflow-hidden text-current text-sm sm:text-base xl:text-xl"
    />
  </div>
</template>

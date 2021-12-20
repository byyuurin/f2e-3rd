import { init } from 'echarts'
import type { EChartsOption } from 'echarts'

export type ChartOption = EChartsOption

interface UseChartOptions {
  el: HTMLElement
}

export function useChart(options: UseChartOptions) {
  const instance = init(options.el)
  return {
    setOption: (option: ChartOption) => instance.setOption(option),
    resize: () => instance.resize()
  }
}

export type ChartInstance = ReturnType<typeof useChart>

type ChartOptionGenerator<T, O> = (chartDefaults: ChartOption) => (data: T, options: O) => ChartOption

export const createChartHelper = <T = any, O = any>(defaults: ChartOption, generator: ChartOptionGenerator<T, O>) =>
  generator({
    ...defaults,
    grid: {
      containLabel: true,
      top: 50,
      bottom: 40,
      left: 20,
      right: 20,
      borderWidth: 0.33,
      ...defaults.grid
    }
  })

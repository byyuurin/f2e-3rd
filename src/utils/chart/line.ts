import { createChartHelper } from '/src/components/ui/chart/utils'

interface HelperOptions {
  title: string
  dataTitle: string
}

export const line = createChartHelper<any, HelperOptions>(
  {
    title: {
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    series: []
  },
  (chartDefaults) => {
    return (values = {}, options) => {
      const labels = Object.keys(values).reverse()
      return {
        ...chartDefaults,
        title: {
          ...chartDefaults.title,
          text: options.title
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.1]
        },
        yAxis: {
          type: 'category',
          data: labels,
          show: false
        },
        series: [
          {
            name: options.dataTitle,
            type: 'bar',
            label: {
              show: true,
              formatter: ` {b}`,
              position: 'insideLeft'
            },
            data: labels.map((key) => values[key])
          }
        ]
      }
    }
  }
)

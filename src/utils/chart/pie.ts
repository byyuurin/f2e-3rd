import { createChartHelper } from '/src/components/ui/chart/utils'

interface HelperOptions {
  title: string
  dataTitle: string
}

export const pie = createChartHelper<Record<string, number>, HelperOptions>(
  {
    title: {
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      top: 'center',
      textStyle: {
        color: 'inherit',
        fontSize: '1em'
      }
    },
    series: []
  },
  (chartDefaults) => {
    return (values = {}, options) => {
      return {
        ...chartDefaults,
        title: {
          ...chartDefaults.title,
          text: options.title
        },
        series: [
          {
            name: options.dataTitle,
            type: 'pie',
            radius: ['50%', '75%'],
            itemStyle: {
              borderRadius: 10,
              borderColor: 'rgba(255,255,255,0.75)',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'inner'
            },
            data: Object.keys(values).map((key) => {
              return {
                value: values[key],
                name: key
              }
            }),
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  }
)

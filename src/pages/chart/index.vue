<script lang="ts" setup>
import * as chartHelper from '/src/utils/chart'
import { RawItem, createSelectOptions } from './utils'

const frontend = useFetch(
  'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json'
).json<RawItem[]>()

const ui = useFetch('https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/ui_data.json').json<
  RawItem[]
>()

const data = computed(() => [...(frontend.data.value || []), ...(ui.data.value || [])])
const filterOption = computed(() => createSelectOptions(unref(data)))

const filterDefaults = {
  job: '',
  gender: '',
  age: '',
  major: '',
  education: '',
  industry: '',
  work: '',
  area: '',
  scale: '',
  people: ''
}

const filter = ref({ ...filterDefaults })
const savedFilter = ref({ ...filterDefaults })
const savedConditions = ref(JSON.stringify(unref(filter)))
const conditions = computed(() => JSON.stringify(unref(filter)))

const basicData = ref<Record<string, Record<string, number>>>({})

const chartOption = computed(() => {
  return {
    gender: chartHelper.pie(basicData.value['gender'], { title: '性別', dataTitle: '性別' }),
    age: chartHelper.line(basicData.value['age'], { title: '年齡', dataTitle: '人數' }),
    major: chartHelper.line(basicData.value['major'], { title: '科系', dataTitle: '人數' }),
    education: chartHelper.pie(basicData.value['education'], { title: '學歷', dataTitle: '學歷' }),
    industry: chartHelper.line(basicData.value['industry'], { title: '產業類型', dataTitle: '人數' }),
    work: chartHelper.pie(basicData.value['work'], { title: '工作型態', dataTitle: '工作型態' }),
    area: chartHelper.line(basicData.value['area'], { title: '公司位置', dataTitle: '人數 ' }),
    scale: chartHelper.line(basicData.value['scale'], { title: '公司規模人數', dataTitle: '人數 ' }),
    people: chartHelper.pie(basicData.value['people'], { title: '相同職位人數', dataTitle: '人數 ' })
  }
})

const updateBasicDataByKey = (key: string, value: string) => {
  if (!basicData.value[key]) basicData.value[key] = {}
  if (!basicData.value[key][value]) basicData.value[key][value] = 0
  basicData.value[key][value]++
}

const updateBasicData = (data: RawItem) => {
  updateBasicDataByKey('job', data.job)
  updateBasicDataByKey('gender', data.gender)
  updateBasicDataByKey('age', data.age)
  updateBasicDataByKey('major', data.major)
  updateBasicDataByKey('education', data.education)
  updateBasicDataByKey('industry', data.company.industry)
  updateBasicDataByKey('work', data.company.work)
  updateBasicDataByKey('area', data.company.area)
  updateBasicDataByKey('scale', data.company.scale)
  updateBasicDataByKey('people', data.company.people)
}

// const resetBasicData = () => {
//   const raw = basicData.value['major']
//   const major: Record<string, number> = {}
//   let sum = 0

//   if (!raw) return

//   Object.keys(raw).forEach((key) => {
//     if (raw[key] < 30) {
//       others += raw[key]
//     } else {
//       major[key] = raw[key]
//     }
//   })
//   major['其他'] = others
//   basicData.value['major'] = major
// }

const dataReduction = (key: string, min = 0) => {
  const raw = basicData.value[key]
  const data: Record<string, number> = {}
  let sum = 0

  if (!raw) return raw

  Object.keys(raw).forEach((key) => {
    if (raw[key] < min) {
      sum += raw[key]
    } else {
      data[key] = raw[key]
    }
  })

  data['其他'] = sum
  basicData.value[key] = data
}

const visibleData = computed(() => {
  const conditions = JSON.parse(unref(savedConditions)) as typeof filter.value

  savedFilter.value = conditions
  basicData.value = {}

  const result = unref(data)?.filter((item) => {
    if (conditions.job && item.job !== conditions.job) return false
    if (conditions.gender && item.gender !== conditions.gender) return false
    if (conditions.age && item.age !== conditions.age) return false
    if (conditions.major && item.major !== conditions.major) return false
    if (conditions.education && item.education !== conditions.education) return false
    if (conditions.industry && item.company.industry !== conditions.industry) return false
    if (conditions.work && item.company.work !== conditions.work) return false
    if (conditions.area && item.company.area !== conditions.area) return false
    if (conditions.scale && item.company.scale !== conditions.scale) return false
    if (conditions.people && item.company.people !== conditions.people) return false

    updateBasicData(item)
    return true
  })

  dataReduction('major', 30)
  dataReduction('industry', 10)

  return result
})

const status = computed(() => {
  const filterEnabled = unref(conditions) !== unref(savedConditions)
  const resetEnabled = filterEnabled || JSON.stringify(filterDefaults) !== unref(savedConditions)
  return {
    filterEnabled,
    resetEnabled
  }
})

const handleFilter = () => {
  savedConditions.value = unref(conditions)
}

const handleReset = () => {
  if (unref(conditions) === unref(savedConditions)) {
    filter.value = { ...filterDefaults }
  } else {
    filter.value = JSON.parse(unref(savedConditions))
  }
}
</script>

<template>
  <div class="p-6">
    <div class="flex flex-wrap children:m-1 children:w-50 children:bg-dark-100">
      <ui-select v-model:value="filter.job" :options="filterOption.job" />
      <ui-select v-model:value="filter.gender" :options="filterOption.gender" />
      <ui-select v-model:value="filter.age" :options="filterOption.age" />
      <ui-select v-model:value="filter.major" :options="filterOption.major" />
      <ui-select v-model:value="filter.education" :options="filterOption.education" />
      <ui-select v-model:value="filter.industry" :options="filterOption.industry" />
      <ui-select v-model:value="filter.work" :options="filterOption.work" />
      <ui-select v-model:value="filter.area" :options="filterOption.area" />
      <ui-select v-model:value="filter.scale" :options="filterOption.scale" />
      <ui-select v-model:value="filter.people" :options="filterOption.people" />
    </div>
    <div class="flex flex-wrap justify-center py-2 children:m-1 children:mx-3 children:w-50 children:text-xl">
      <ui-button :disabled="!status.resetEnabled" @click="handleReset">重置篩選</ui-button>
      <ui-button :disabled="!status.filterEnabled" @click="handleFilter">更新圖表</ui-button>
    </div>
    <div class="py-4">total: {{ visibleData.length }}</div>
    <!-- <pre>{{ basicData }}</pre> -->
    <div
      class="flex flex-wrap text-white children:w-full children:flex-grow children:mb-10 children:lg:w-1/2 children:xl:w-1/3"
    >
      <ui-chart v-if="!savedFilter.gender" :option="chartOption.gender" />
      <ui-chart
        v-if="!savedFilter.age"
        class="md:w-full md:pb-[75%] lg:w-1/2 lg:pb-[50%] xl:w-1/3"
        :option="chartOption.age"
      />
      <ui-chart
        v-if="!savedFilter.major"
        class="md:w-full md:pb-[75%] lg:w-1/2 lg:pb-[50%] xl:w-1/3"
        :option="chartOption.major"
      />
      <ui-chart v-if="!savedFilter.education" :option="chartOption.education" />
      <ui-chart
        v-if="!savedFilter.industry"
        class="md:w-full md:pb-[75%] lg:w-1/2 lg:pb-[50%] xl:w-1/3"
        :option="chartOption.industry"
      />
      <ui-chart v-if="!savedFilter.work" :option="chartOption.work" />
      <ui-chart
        v-if="!savedFilter.area"
        class="md:w-full md:pb-[75%] lg:w-1/2 lg:pb-[50%] xl:w-1/3"
        :option="chartOption.area"
      />
      <ui-chart
        v-if="!savedFilter.scale"
        class="md:w-full md:pb-[75%] lg:w-1/2 lg:pb-[50%] xl:w-1/3"
        :option="chartOption.scale"
      />
      <ui-chart
        v-if="!savedFilter.people"
        class="md:w-full md:pb-[75%] lg:w-1/2 lg:pb-[50%] xl:w-1/3"
        :option="chartOption.people"
      />
    </div>
  </div>
</template>

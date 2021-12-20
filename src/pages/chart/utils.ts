import { UiSelectOption } from '/src/components/ui/select/types'

export interface RawItem {
  job: string // 職稱
  gender: string // 性別
  age: string // 年齡
  education: string // 學歷
  major: string // 科系
  // 第一份工作
  first_job: {
    tenure: string // 第一份年資
    leave: string // 第一份工作離職原因
    position: string // 第一份工作被要求非前端工程師的技能
    skill: string // 第一份工作上公司所導入的技能
    render: string // 接觸到哪一種開發模式
  }
  // 工作相關
  works: {
    window: string // 主要是哪些窗口有溝通障礙
    market?: string // 自評工作能力範圍
  }
  // 目前公司
  company: {
    industry: string // 產業類型
    score: string // 產業滿意度
    work: string // 工作型態
    area: string // 公司位置
    scale: string // 公司規模人數
    people: string // 相同職位人數
    job_tenure: string // 工作年資
    salary: string // 年薪範圍
    salary_score: string // 薪水滿意度
    industry_message: string // 產業簽到區
  }
}

const updateContainer = (container: string[], value: string) => {
  if (container.indexOf(value) === -1) container.push(value)
}

const toSortValue = (values: string[]) => {
  const toNumber = (s: string) => +s.replace(/(.*~)?(\d+).*/, '$2') || 0
  return values.sort((a, b) => {
    const n1 = toNumber(a)
    const n2 = toNumber(b)
    return n1 - n2
  })
}

const convertSelectOptions = (values: string[]) => {
  const prefixReg = /^\u4e0d\u9650/ // 不限
  const [defaultValue, ...others] = values
  const prefix = defaultValue.replace(prefixReg, '')

  return [defaultValue, ...toSortValue(others)].map((value) => {
    const option: UiSelectOption = {
      label: prefixReg.test(value) ? value : `${prefix}: ${value}`,
      value: prefixReg.test(value) ? '' : value
    }
    return option
  })
}

export const createSelectOptions = (list: RawItem[] = []) => {
  const map = {
    job: ['不限職稱'],
    gender: ['不限性別'],
    age: ['不限年齡'],
    major: ['不限科系'],
    education: ['不限學歷'],
    industry: ['不限產業類型'],
    work: ['不限工作型態'],
    area: ['不限公司位置'],
    scale: ['不限公司規模人數'],
    people: ['不限相同職位人數']
  }

  list.forEach((item) => {
    updateContainer(map.industry, item.company.industry)
    updateContainer(map.work, item.company.work)
    updateContainer(map.area, item.company.area)
    updateContainer(map.scale, item.company.scale)
    updateContainer(map.people, item.company.people)

    Object.keys(item).forEach((key) => {
      const value = item[key as keyof typeof item]
      if (typeof value === 'string') {
        if (key === 'job') updateContainer(map.job, value)
        if (key === 'gender') updateContainer(map.gender, value)
        if (key === 'age') updateContainer(map.age, value)
        if (key === 'major') updateContainer(map.major, value)
        if (key === 'education') updateContainer(map.education, value)
      }
    })
  })

  return {
    job: convertSelectOptions(map.job),
    gender: convertSelectOptions(map.gender),
    age: convertSelectOptions(map.age),
    major: convertSelectOptions(map.major),
    education: convertSelectOptions(map.education),
    industry: convertSelectOptions(map.industry),
    work: convertSelectOptions(map.work),
    area: convertSelectOptions(map.area),
    scale: convertSelectOptions(map.scale),
    people: convertSelectOptions(map.people)
  }
}

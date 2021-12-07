import { InjectionKey, inject, provide } from 'vue'

export const defineInjection = <T>() => {
  const key: InjectionKey<T> = Symbol()
  return {
    inject: () => inject(key),
    provide: (value: T) => provide(key, value)
  }
}

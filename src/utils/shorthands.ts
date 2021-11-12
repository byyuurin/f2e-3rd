import { InjectionKey } from 'vue';

export const defineInjectionKey = <T>() => Symbol() as InjectionKey<T>;

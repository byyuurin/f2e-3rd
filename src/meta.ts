import { MaybeRef } from '@vueuse/core';
import { RouteMeta } from 'vue-router';
import { defineInjectionKey } from '/src/utils/shorthands';

interface AppRouteMeta extends RouteMeta {
  title: MaybeRef<string>;
}

const InjectionRouteMeta = defineInjectionKey<AppRouteMeta>();

export const injectRouteMeta = (meta: AppRouteMeta) => provide(InjectionRouteMeta, meta);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const useRouteMeta = () => inject(InjectionRouteMeta)!;

export const isDark = useDark();

interface AppAction {
  top: () => void;
}

const injectionAppAction = defineInjectionKey<AppAction>();

export const injectAppAction = () =>
  provide(injectionAppAction, {
    top: () => document.querySelector('#app')?.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
  });

export const useAppAction = () => inject(injectionAppAction);

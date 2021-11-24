import { MaybeRef } from '@vueuse/core';
import { RouteMeta } from 'vue-router';
import { defineInjection } from '/src/utils/shorthands';

interface AppRouteMeta extends RouteMeta {
  title: MaybeRef<string>;
}

export const { inject: injectRouteMeta, provide: provideRouteMeta } = defineInjection<AppRouteMeta>();

export const isDark = useDark();

interface AppAction {
  top: (animated?: boolean) => void;
}

export const { inject: injectAppAction, provide: provideAppAction } = defineInjection<AppAction>();

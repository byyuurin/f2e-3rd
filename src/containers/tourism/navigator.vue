<script lang="ts" setup>
import SvgIcon1 from '~icons/ic/sharp-mode-of-travel';
import SvgIcon2 from '~icons/carbon/hotel';
import SvgIcon3 from '~icons/fluent/food-16-filled';
import SvgIcon4 from '~icons/fluent/shifts-activity-24-filled';

const links = [
  { icon: SvgIcon1, label: '旅遊景點', name: 'tourism-scenic-spot' },
  { icon: SvgIcon2, label: '推薦旅宿', name: 'tourism-hotel' },
  { icon: SvgIcon3, label: '美食饗宴', name: 'tourism-restaurant' },
  { icon: SvgIcon4, label: '活動資訊', name: 'tourism-activity' }
];
</script>

<template>
  <div class="flex flex-wrap justify-between items-center p-2 px-3 text-center">
    <div v-for="link of links" :key="link.name" class="w-1/2 md:w-1/4 p-2">
      <router-link :to="link">
        <div class="h-15 leading-15 rounded-md bg-yellow-100 bg-opacity-50 dark:bg-dark-100">
          <span class="pr-1 inline-block align-middle leading-none">
            <component :is="link.icon" class="text-2xl" />
          </span>
          <span class="inline-block align-middle" v-text="link.label" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.router-link-exact-active {
  > div {
    @apply bg-yellow-200 dark:bg-dark-700;
  }
}
</style>

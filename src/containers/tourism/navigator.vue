<script lang="ts" setup></script>

<template>
  <div class="flex flex-wrap justify-between items-center p-2 px-3 text-center">
    <div class="w-1/2 md:w-1/4 p-2">
      <router-link :to="{ name: 'tourism-scenic-spot' }">
        <div class="h-15 leading-15 rounded-md bg-yellow-100 bg-opacity-50 dark:bg-dark-100">
          <span class="pr-1 inline-block align-middle leading-none">
            <svg-ic-sharp-mode-of-travel class="text-2xl" />
          </span>
          <span class="inline-block align-middle">旅遊景點</span>
        </div>
      </router-link>
    </div>
    <div class="w-1/2 md:w-1/4 p-2">
      <router-link :to="{ name: 'tourism-hotel' }">
        <div class="h-15 leading-15 rounded-md bg-yellow-100 bg-opacity-50 dark:bg-dark-100">
          <span class="pr-1 inline-block align-middle leading-none">
            <svg-carbon-hotel class="text-2xl" />
          </span>
          <span class="inline-block align-middle">推薦旅宿</span>
        </div>
      </router-link>
    </div>
    <div class="w-1/2 md:w-1/4 p-2">
      <router-link :to="{ name: 'tourism-restaurant' }">
        <div class="h-15 leading-15 rounded-md bg-yellow-100 bg-opacity-50 dark:bg-dark-100">
          <span class="pr-1 inline-block align-middle leading-none">
            <svg-fluent-food-16-filled class="text-2xl" />
          </span>
          <span class="inline-block align-middle">美食饗宴</span>
        </div>
      </router-link>
    </div>
    <div class="w-1/2 md:w-1/4 p-2">
      <router-link :to="{ name: 'tourism-activity' }">
        <div class="h-15 leading-15 rounded-md bg-yellow-100 bg-opacity-50 dark:bg-dark-100">
          <span class="pr-1 inline-block align-middle leading-none">
            <svg-fluent-shifts-activity-24-filled class="text-2xl" />
          </span>
          <span class="inline-block align-middle">活動資訊</span>
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

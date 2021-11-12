<script lang="ts">
export default { name: 'DarkToggle' };
</script>

<script lang="ts" setup>
interface Props {
  modelValue: boolean;
}
const props = withDefaults(defineProps<Props>(), { modelValue: true });
const modelValue = useVModel(props, 'modelValue');
const handleToggle = () => useToggle(modelValue)();
</script>

<template>
  <div
    class="
      p-2
      cursor-pointer
      rounded-1
      inline-flex
      items-center
      hover:bg-true-gray-700 hover:bg-opacity-5
      dark:hover:bg-light-900 dark:hover:bg-opacity-5
    "
    @click="handleToggle"
  >
    <svg-ph-sun-bold v-show="!modelValue" class="inline-block align-middle text-current" />
    <svg-ph-moon-bold v-show="modelValue" class="inline-block align-middle text-yellow-200" />
  </div>
</template>

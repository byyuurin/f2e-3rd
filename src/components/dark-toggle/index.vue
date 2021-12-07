<script lang="ts">
export default { name: 'DarkToggle' }
</script>

<script lang="ts" setup>
interface Props {
  modelValue: boolean
}
const props = withDefaults(defineProps<Props>(), { modelValue: true })
const value = useVModel(props, 'modelValue')
const handleToggle = () => useToggle(value)()
</script>

<template>
  <ui-button @click="handleToggle">
    <template #content>
      <div class="w-full flex justify-center items-center">
        <svg-ph-sun-bold v-show="!value" class="text-current" />
        <svg-ph-moon-bold v-show="value" class="text-yellow-200" />
      </div>
    </template>
  </ui-button>
</template>

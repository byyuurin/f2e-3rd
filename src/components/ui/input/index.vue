<script lang="ts">
export default { name: 'UiInput' };
</script>

<script lang="ts" setup>
interface Props {
  type?: 'text' | 'password' | 'number';
  size?: 'small' | 'medium' | 'large';
  value: string | number;
  placeholder?: string;
}
const props = withDefaults(defineProps<Props>(), { type: 'text', size: 'medium', placeholder: '' });

const innerValue = useVModel(props, 'value');

const wrapStyle = ['inline-flex', 'items-center', 'bg-white', 'rounded-md', 'shadow-md'];

const innerStyle = computed(() => {
  const innerHeight = {
    small: 'h-10',
    medium: 'h-12',
    large: 'h-14'
  };
  const fontSize = {
    small: 'text-base',
    medium: 'text-xl',
    large: 'text-2xl'
  };
  const classList = ['flex-grow', 'px-3', 'truncate', 'text-current', 'bg-transparent', 'outline-none'];
  classList.push(fontSize[props.size]);
  classList.push(innerHeight[props.size]);
  return classList;
});
</script>

<template>
  <div :class="wrapStyle">
    <slot name="prepend">
      <div v-if="$slots.prefix" m="-r-1" p="x-3 r-0" class="inline-flex justify-center items-center">
        <slot name="prefix" />
      </div>
    </slot>
    <input v-model="innerValue" :class="innerStyle" :type="props.type" :placeholder="props.placeholder" />
    <slot name="append">
      <div v-if="$slots.suffix" m="-l-1" p="x-3 l-0" class="inline-flex justify-center items-center">
        <slot name="suffix" />
      </div>
    </slot>
  </div>
</template>

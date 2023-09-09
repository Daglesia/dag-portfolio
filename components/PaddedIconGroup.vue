<!-- eslint-disable no-undef -->
<template>
  <div id="padded-icon-group">
    <padded-icon v-for="(item, index) in items" :key="index" interactive :active="modelValue === index"
      :style="{ 'animation-delay': delayInMilliseconds(index) }" @click="() => activeElementHandler(Number(index))"
      :icon="item">
    </padded-icon>
  </div>
</template>
  
<script setup lang="ts">
const props = defineProps<{
  modelValue?: number | null;
  items: string[];
  delayMs?: number;
}>();

const delayInMilliseconds = (index: number) => props.delayMs ? `${100 * index + props.delayMs}ms` : `${100 * index}ms`;

const emit = defineEmits<{ (event: "update:modelValue", index: number): void; }>();

const activeElementHandler = (index: number) => {
    emit("update:modelValue", index);
};
</script>

<style lang="scss">
#padded-icon-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}
</style>

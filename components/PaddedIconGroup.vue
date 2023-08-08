<!-- eslint-disable no-undef -->
<template>
  <div id="padded-icon-group">
    <padded-icon v-for="(item, index) in items" :key="index" :hidden="hidden" interactive :active="modelValue === index"
      @click="() => activeElementHandler(Number(index))" :icon="item">
    </padded-icon>
  </div>
</template>
  
<script setup lang="ts">
defineProps<{
  hidden: boolean;
  modelValue: number | null;
  items: string[];
}>();

const emit = defineEmits<{ (event: "update:modelValue", index: number): void; }>();

const activeElementHandler = (index: number) => {
    emit("update:modelValue", index);
};
</script>

  
<template>
  <div id="pill-group">
      <pill-component
        v-for="(item, index) in items"
        :key="index"
        :data-index="index"
        :hidden="hidden"
        interactive
        :active="modelValue === index"
        @click="() => activeElementHandler(Number(index))"
      >
        <template #default>
          <span>{{ item.primary }}</span>
        </template>
        <template v-if="item.secondary" #right>
          <span>{{ item.secondary }}</span>
        </template>
      </pill-component>
  </div>
</template>

<script setup lang="ts">
import { PillGroupItem } from "types/props";

defineProps<{
  hidden: boolean;
  modelValue: number | null;
  items: PillGroupItem[];
}>();

const emit = defineEmits<{(event: "update:modelValue", index: number): void;}>();

const activeElementHandler = (index: number) => {
    emit("update:modelValue", index);
};
</script>

<style lang="scss" scoped>
#pill-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
}

#pill {
  cursor: pointer;
}

#pill:hover {
  opacity: 1;
}
</style>

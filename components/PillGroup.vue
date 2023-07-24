<!-- eslint-disable no-undef -->
<template>
  <div id="pill-group">
    <pill-component :hidden="hidden" :interactive="true" v-for="(item, index) in items" :key="item.name"
      :active="modelValue === index" @click="() => activeElementHandler(index)">
      <template #default>
        <span>{{ item.primary }}</span>
      </template>
      <template #right v-if="item.secondary">
        <span>{{ item.secondary }}</span>
      </template>
    </pill-component>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  hidden: boolean;
  modelValue: number | null | string;
  items: Object;
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', index: string): void;
}>();

const activeElementHandler = (index: string) => {
  emit('update:modelValue', index);
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
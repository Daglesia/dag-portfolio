<!-- eslint-disable no-undef -->
<template>
    <div id="pill-group">
      <pill-component :hidden="hidden" :interactive="true" :active="modelValue === 0" @click="()=>activeElementHandler(0)">
      <template #default>
        <span>Dupa</span>
      </template>
      <template #right>
        <span>2y</span>
      </template>
    </pill-component>

    <pill-component :hidden="hidden" :interactive="true" :active="modelValue === 1" @click="()=>activeElementHandler(1)">
      <template #default>
        <span>Jasia</span>
      </template>
      <template #right>
        <span>2y</span>
      </template>
    </pill-component>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    hidden: boolean;
    modelValue: number | null;
  }>();

const emit = defineEmits<{
  (event: 'update:modelValue', index: number): void;
}>();

const activeElementHandler = (index: number) => {
  console.log('zzz', index);
  emit('update:modelValue', index);
}

</script>

<style lang="scss" scoped>
#pill-group {
  display: flex;
  flex-direction: column;
  gap:0.5rem;
}

#pill {
  cursor: pointer;
}

#pill:hover {
  opacity: 1;
}

</style>
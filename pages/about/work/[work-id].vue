<template>
    <div id="work-description">
      <header-component :hidden="hidden" :title="currentItem.title" />
      <div id="work-pills">
        <pill-component icon="fa6-solid:clock" :hidden="hidden">
          <template #default>
            <span>{{ duration }}</span>
          </template>
        </pill-component>
        <pill-component icon="fa6-solid:calendar" :hidden="hidden">
          <template #default>
            <span>{{ timeframe }}</span>
          </template>
        </pill-component>
        <pill-component icon="fa6-solid:suitcase" :hidden="hidden">
          <template #default>
            <span>{{ currentItem.position }}</span>
          </template>
        </pill-component>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
import { WorkDataItem } from 'types/props';
import { getFormattedDuration, getFormattedStartEndFrame } from '@/utils/dateUtils';

  const props = defineProps<{
  currentItem: WorkDataItem;
}>();

console.log(props.currentItem, 'cxzcknmk')

const duration = computed(() => getFormattedDuration(props.currentItem.startDate, props.currentItem?.endDate, false));
const timeframe = computed(() => getFormattedStartEndFrame(props.currentItem.startDate, props.currentItem?.endDate));


  const hidden = ref(true);
  
  onMounted(() => {
    hidden.value = false;
  });
  </script>
  
  <style lang="scss" scoped>
  #work-description {
    padding-inline: 4rem;
    padding-top: 1.4rem;
  }
  
  #work-pills {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  </style>
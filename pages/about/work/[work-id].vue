<template>
  <div class="flex-column">
    <header-component :title="title" />
    <div id="work-pills">
      <pill-component icon="fa6-solid:clock">
        <template #default>
          <span>{{ duration }}</span>
        </template>
      </pill-component>
      <pill-component icon="fa6-solid:calendar" :style="{ 'animation-delay': '100ms' }">
        <template #default>
          <span>{{ timeframe }}</span>
        </template>
      </pill-component>
      <pill-component icon="fa6-solid:suitcase" :style="{ 'animation-delay': '200ms' }">
        <template #default>
          <span>{{ position }}</span>
        </template>
      </pill-component>
      <padded-icon-group :delayMs="300" @update:modelValue="skillClickHandler" :items="skillIconsArray" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { WorkDataItem } from "types/props";
import {
    getFormattedDuration,
    getFormattedStartEndFrame
} from "@/utils/dateUtils";

const route = useRoute();

const skillClickHandler = (newValue: number) => {
    navigateTo(`/about/skills/${skillArray[newValue ?? 0].name}`);
};

const nuxtApp = useNuxtApp();
const workData = nuxtApp.$workData();

const currentItem = computed<WorkDataItem>(() => workData.value?.find(workItem => workItem.id === route.params.workid) as WorkDataItem);

const title = currentItem.value.title;
const position = currentItem.value.position;

const skillArray = getSkillsArrayFromIds(currentItem.value.skills);
const skillIconsArray = skillArray.map(skill => skill.skill.icon);

const duration = getFormattedDuration(
    currentItem.value.startDate,
    currentItem.value?.endDate,
    false
);
const timeframe = getFormattedStartEndFrame(
    currentItem.value.startDate,
    currentItem.value?.endDate
);
</script>

<style lang="scss" scoped>
#work-pills {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

#padded-icon-group {
  display: flex;
  justify-content: left;
  gap: 1rem;
}
</style>

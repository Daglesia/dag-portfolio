<template>
    <div id="skill-description">
        <header-component :title="title" />
        <div id="skill-pills">
            <pill-component icon="fa6-solid:clock" :style="{ 'animation-delay': '100ms' }">
                <template #default>
                    <span>{{ duration }}</span>
                </template>
            </pill-component>
            <list-component v-if="usedInArray.length" :delay-ms="300" title="Used in:" :items="usedInArray" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { SkillDataItem } from "types/props";
import {
    getFormattedDuration
} from "@/utils/dateUtils";

const route = useRoute();

const nuxtApp = useNuxtApp();
const skillData = nuxtApp.$skillsData();
const workData = nuxtApp.$workData();

const currentItem = computed<SkillDataItem>(() => skillData.value?.find(skill => skill.name === route.params.skillid) as SkillDataItem);

const workItems = getWorkItemsWithParticularSkill(currentItem.value, workData.value ?? []);

const usedInArray: string[] = [ ...new Set(workItems.map(workItem => workItem.title))];

const title = currentItem.value.skill.displayName;

const duration = getFormattedDuration(
    currentItem.value.startDate,
    undefined,
    false
);
</script>
  
<style lang="scss" scoped>
#skill-description {
    padding-inline: 4rem;
    padding-top: 1.4rem;
}

#skill-pills {
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

#list-component {
    padding-left: 1rem;
}
</style>
  
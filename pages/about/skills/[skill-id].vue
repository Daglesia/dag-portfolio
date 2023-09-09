<template>
    <div id="skill-description">
        <header-component :title="title" />
        <div id="skill-pills">
            <pill-component icon="fa6-solid:clock" :style="{ 'animation-delay': '100ms' }">
                <template #default>
                    <span>{{ duration }}</span>
                </template>
            </pill-component>
            <list-component :delay-ms="300" title="Used in:" :items="['Bepe', 'bopo']" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { SkillDataItem } from "types/props";
import {
    getFormattedDuration
} from "@/utils/dateUtils";

import { useSkillStore } from "@/store/skillStore";
import { storeToRefs } from "pinia";
import { useWorkStore } from "@/store/workStore";
import { getWorkItemsWithParticularSkill } from "@/utils/aboutUtils";

const route = useRoute();

const skillStore = useSkillStore();
const workStore = useWorkStore();

const { skillData } = storeToRefs(skillStore);
const { workData } = storeToRefs(workStore);

const currentItem = computed<SkillDataItem>(() => skillData.value.find(skill => skill.name === route.params.skillid) as SkillDataItem);

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
</style>
  
<template>
    <div id="skills-page">
        <div id="skills-selector">
            <header-component :hidden="false" title="Skills" />
            <padded-icon-group :hidden="false" v-model="activeElement" :items="skillIconsArray"/>
        </div>
        <div id="skill-selected">
            <NuxtPage :current-item="currentItem" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { SkillDataItem, SkillDataResponse } from "@/types/props";
import { SkillMap } from "@/assets/constants/skills";
import { PATHS } from "@/assets/constants/paths";

const activeElement = ref<number | null>(null);

watch(activeElement, (newValue) => {
    if (skillsetArray) {
        navigateTo(`${PATHS.about.skills}/${skillsetArray[Number(newValue)].name}`);
    }
});

const { data } = await useFetch<SkillDataResponse[]>("/api/skills");

const skillsetArray = data.value?.map(item => {
    return {
        startDate: item.startDate,
        skill: SkillMap.get(item.name),
        name: item.name,
    } as SkillDataItem;
});
const skillIconsArray = <string[]>skillsetArray?.map(skill => skill.skill.icon);

const currentItem = computed(() => skillsetArray ? skillsetArray[activeElement.value ?? 0] : {});
</script>

<style scoped lang="scss">
#skills-page {
    display: flex;
}

#skills-selector {
    width: 40vw;
    padding-left: 2rem;
    padding-right: 3rem;
}

#skill-selected {
    width: 40vw;
    padding-right: 3rem;
}

#skills-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.8rem;
    padding-top: 1rem;
}

#header-component {
    padding-top: 1.5rem;
    padding-right: 3rem;
}
</style>

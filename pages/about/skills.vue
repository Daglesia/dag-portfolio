<template>
    <div id="skills-selector">
        <header-component :hidden="false" title="Skills" />
        <div id="skills-group">
            <padded-icon
                v-for="(item, index) in skillsetArray" :key="index"
                :icon="item.skill.icon"
                class="interactive" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { SkillDataItem, SkillDataResponse } from "@/types/props";
import { SkillMap } from "@/assets/constants/skills";

const { data } = await useFetch<SkillDataResponse[]>("/api/skills");

const skillsetArray = data.value?.map(item => {
    return {
        startDate: item.startDate,
        skill: SkillMap.get(item.name),
    } as SkillDataItem;
});
</script>

<style scoped lang="scss">
#skills-selector {
    width: 40vw;
    padding-left: 2rem;
}

#skills-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.8rem;
}

#header-component {
    padding-top: 1.5rem;
    padding-right: 3rem;
}
</style>

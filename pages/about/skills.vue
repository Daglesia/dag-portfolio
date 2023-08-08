<template>
    <div id="skills-page">
        <div id="skills-selector">
            <header-component :hidden="hidden" title="Skills" />
            <suspense>
                <padded-icon-group :hidden="hidden" v-model="activeElement" :items="skillIconsArray"/>
            </suspense>
        </div>
        <div id="skill-selected">
            <NuxtPage :current-item="currentItem" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { SkillDataItem } from "@/types/props";
import { PATHS } from "@/assets/constants/paths";
import { useSkillStore } from "@/store/skillStore";

const activeElement = ref<number | null>(null);
const hidden = ref<boolean>(true);

onMounted(()=>{
    hidden.value = false;
});

watch(activeElement, (newValue) => {
    if (skillsetArray) {
        navigateTo(`${PATHS.about.skills}/${skillsetArray.value[Number(newValue)].name}`);
    }
});

const skillStore = useSkillStore();
const skillsetArray: Ref<SkillDataItem[]> = await skillStore.getSkillData();

const skillIconsArray = <string[]>skillsetArray.value?.map(skill => skill.skill.icon);

const currentItem = computed(() => skillsetArray.value ? skillsetArray.value[activeElement.value ?? 0] : {});
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

#padded-icon-group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.8rem;
    padding-top: 1rem;
}

#header-component {
    padding-top: 1.5rem;
}
</style>

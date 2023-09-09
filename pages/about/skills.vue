<template>
  <div id="skill-page">
    <div id="skill-selector">
      <header-component title="Skills" />
      <padded-icon-group v-model="activeElement" :items="icons" />
    </div>
    <div id="skill-selected">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PATHS } from "@/assets/constants/paths";
import { useSkillStore } from "@/store/skillStore";
import { storeToRefs } from "pinia";

definePageMeta({
    layout: "menu",
    pageTransition: {
        name: "layout",
        appear: true,
        mode: "out-in",
    }
});

const route = useRoute();


const skillStore = useSkillStore();
const { skillData } = storeToRefs(skillStore);

const activeElement = ref<number>(skillData.value.findIndex(skill => skill.name === route.params.skillid));

const icons: string[] = skillData.value.map(dataItem => dataItem.skill.icon);

watch(activeElement, (newValue) => {
    navigateTo(`${PATHS.about.skills}/${skillData.value[newValue].name}`);
});
</script>

<style lang="scss" scoped>
#skill-page {
  padding-left: 2rem;
  display: flex;
}

#skill-selector {
  width: 40vw;
}

#skill-selected {
  width: 40vw;
}

#header-component {
  padding-top: 1.5rem;
}

#padded-icon-group {
  padding-top: 1rem;
}
</style>

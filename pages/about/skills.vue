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

definePageMeta({
    layout: "menu",
    pageTransition: {
        name: "layout",
        appear: true,
        mode: "out-in",
    }
});

const route = useRoute();

const nuxtApp = useNuxtApp();
const skillData = nuxtApp.$skillsData();

const activeElement = ref<number | null>(skillData.value?.findIndex(skill => skill.name === route.params.skillid) ?? null);

const icons: string[] = skillData.value.map(dataItem => dataItem.skill.icon);

watch(activeElement, (newValue) => {
    navigateTo(`${PATHS.about.skills}/${skillData.value[newValue ?? 0].name}`);
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

<template>
  <div id="hobby-page">
    <div id="hobby-selector">
      <header-component title="Free time" />
      <pill-group v-model="activeElement" :items="pillGroups" />
    </div>
    <div id="hobby-selected">
      <NuxtPage/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PillGroupItem } from "@/types/props";
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
const hobbyData = nuxtApp.$hobbyData();

const activeElement = ref<number | null>(hobbyData.value?.findIndex(hobbyItem => hobbyItem.id === route.params.hobbyid) ?? null);

const pillGroups = computed(
    () =>
        hobbyData.value ? hobbyData.value.map((item) => {
            return {
                primary: item.title,
            } as PillGroupItem;
        }) : ([] as PillGroupItem[])
);

watch(activeElement, (newValue) => {
    if(hobbyData.value !== null) {
        navigateTo(`${PATHS.about.hobbies}/${hobbyData.value[newValue ?? 0].id}`);
    }
});
</script>

<style lang="scss" scoped>
#hobby-page {
  padding-left: 2rem;
  display: flex;
}

#hobby-selector {
  width: 40vw;
}

#hobby-selected {
  width: 40vw;
}

#header-component {
  padding-top: 1.5rem;
}
</style>

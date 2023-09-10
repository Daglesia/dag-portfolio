<template>
  <div id="work-page">
    <div id="work-selector">
      <header-component title="Work experience" />
      <pill-group v-model="activeElement" :items="pillGroups" />
    </div>
    <div id="work-selected">
      <NuxtPage/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PillGroupItem } from "@/types/props";
import { PATHS } from "@/assets/constants/paths";
import { getFormattedDuration } from "@/utils/dateUtils";

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
const workData = nuxtApp.$workData();

const activeElement = ref<number | null>(workData.value?.findIndex(workItem => workItem.id === route.params.workid) ?? null);

const pillGroups = computed(
    () =>
        workData.value ? workData.value.map((item) => {
            return {
                primary: item.title,
                secondary: getFormattedDuration(item.startDate, item.endDate, true)
            } as PillGroupItem;
        }) : ([] as PillGroupItem[])
);

watch(activeElement, (newValue) => {
    if(workData.value !== null) {
        navigateTo(`${PATHS.about.work}/${workData.value[newValue ?? 0].id}`);
    }
});
</script>

<style lang="scss" scoped>
#work-page {
  padding-left: 2rem;
  display: flex;
}

#work-selector {
  width: 40vw;
}

#work-selected {
  width: 40vw;
}

#header-component {
  padding-top: 1.5rem;
}
</style>

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
import { useHobbyStore } from "@/store/hobbyStore";
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

const hobbyStore = useHobbyStore();
const { hobbyData } = storeToRefs(hobbyStore);

const activeElement = ref<number>(hobbyData.value.findIndex(hobbyItem => hobbyItem.id === route.params.hobbyid));

const pillGroups = computed(
    () =>
        hobbyData.value ? hobbyData.value.map((item) => {
            return {
                primary: item.title,
            } as PillGroupItem;
        }) : ([] as PillGroupItem[])
);

watch(activeElement, (newValue) => {
    navigateTo(`${PATHS.about.hobbies}/${hobbyData.value[newValue].id}`);
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

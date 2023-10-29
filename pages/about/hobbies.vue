<template>
  <two-sided-component>
    <template #left>
      <div class="flex-column">
        <header-component title="Free time" />
        <pill-group v-model="activeElement" :items="pillGroups" />
      </div>
    </template>
    <template #right>
      <NuxtPage/>
    </template>
  </two-sided-component>
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
.flex-column {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>

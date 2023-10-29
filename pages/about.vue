<template>
  <div id="about-view">
    <header-component primary title="About" id="main-header"/>
    <icon-navigation
      :modelValue="activeElement"
      @update:modelValue="handleActiveElementChange"
      :menuItems="menuItems"
    />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { NavigationMenuItem } from "@/types/props";
import { PATHS } from "@/assets/constants/paths";
import { ICONS } from "@/assets/constants/icons";
import { RouteLocationNormalized } from ".nuxt/vue-router";

definePageMeta({
    middleware: "about",
    layout: "menu",
    pageTransition: {
        name: "layout",
        appear: true,
        mode: "out-in",
    }
});

const route = useRoute();

const menuItems = <NavigationMenuItem[]>[
    {
        path: PATHS.about.work,
        icon: ICONS.work,
    },
    {
        path: PATHS.about.skills,
        icon: ICONS.skills,
    },
    {
        path: PATHS.about.hobbies,
        icon: ICONS.hobbies,
    },
];

const activeElement = ref(menuItems.findIndex(item => route.path.includes(item.path)));

const handleActiveElementChange = (index: number): void => {
    activeElement.value = index;
    navigateTo(menuItems[activeElement.value].path);
};

onBeforeRouteUpdate((to: RouteLocationNormalized, _from: RouteLocationNormalized):void => {
    activeElement.value = menuItems.findIndex(item => item.path === to.matched[1].path);
});
</script>

<style lang="scss" scoped>
.header-component {
  width: 40%;
  padding-top: 1rem;
}

#navigation {
  padding-top: 1rem;
  margin-bottom: 1rem;
}
</style>

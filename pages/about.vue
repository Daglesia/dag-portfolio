<template>
  <div id="about-view">
    <header-component primary title="About" />
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
#header-component {
  width: 40vw;
  padding: 2rem;
  padding-bottom: 1rem;
}

#about-view {
  margin-left: 1rem;
}

#navigation {
  padding-left: 2rem;
  padding-top: 0.5rem;
}
</style>

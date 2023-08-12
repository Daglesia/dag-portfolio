<template>
  <div id="about-view">
    <header-component primary title="About" :hidden="hidden" />
    <icon-navigation
      v-model="activeElement"
      :menuItems="menuItems"
      :hidden="hidden"
    />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { NavigationMenuItem } from "@/types/props";
import { PATHS } from "@/assets/constants/paths";
import { ICONS } from "@/assets/constants/icons";

definePageMeta({
    middleware: "about",
    pageTransition: {
        css: false,
        onLeave: (element, callback) => {
            blurOutAnimation(element, callback);
        },
        mode: "out-in",
    },
});

const hidden = ref(true);
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

watch(activeElement, (newValue) => {
    navigateTo(menuItems[newValue].path);
});
  
onMounted(() => {
    hidden.value = false;
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

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
const route = useRoute();
const hidden = ref(true);

const menuItems = <NavigationMenuItem[]>[
  {
    path: "/about/work",
    icon: "fa6-solid:circle-user",
  },
  {
    path: "/about/skills",
    icon: "fa6-solid:brain",
  },
  {
    path: "/about/hobbies",
    icon: "fa6-solid:football",
  },
];

const activeElement = ref(
  menuItems.findIndex((item) => useRoute().fullPath.includes(item.path)),
);

watch(activeElement, (newValue) => {
  navigateTo(menuItems[newValue].path);
});

onMounted(() => {
  hidden.value = false;
  if (route.path.split("/").length === 2) {
    navigateTo(menuItems[activeElement.value].path);
  }
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

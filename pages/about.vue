<template>
  <div id="about-view">
    <header-component primary title="About" :hidden="hidden" />
    <icon-navigation v-model="activeElement" :hidden="hidden" />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const hidden = ref(true);

const routerPaths = ['/about/work', '/about/skills', '/about/hobbies'];

const activeElement = ref(0);

watch(activeElement, (newValue) => {
	navigateTo(routerPaths[newValue]);
});

onMounted(() => {
	hidden.value = false;
	console.log(route.path);
	if (route.path.split('/').length === 2) {
		navigateTo(routerPaths[activeElement.value]);
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
}
</style>

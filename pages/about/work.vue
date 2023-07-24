<template>
  <div id="work-page">
    <div id="work-selector">
      <header-component :hidden="hidden" title="Work experience" />
      <pill-group v-model="activeElement" :hidden="hidden" :items="items">

      </pill-group>
    </div>
    <div id="work-selected">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const hidden = ref(true);
const activeElement = ref<number | null>(null);

const items = [{
  name: 'WithSecure',
  date: '2y',
},
{
  name: 'F-Secure',
  date: '2y',
}];

watch(activeElement, (newValue) => {
  navigateTo('/about/work/' + newValue);
});

onMounted(() => {
  hidden.value = false;
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
  padding-right: 3rem;
}
</style>
<template>
    <div id="hobbies-page">
      <div id="hobbies-selector">
        <header-component :hidden="hidden" title="Hobbies and interests" />
        <pill-group v-model="activeElement" :hidden="hidden" :items="items">
  
        </pill-group>
      </div>
      <div id="hobby-selected">
        <NuxtPage />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const hidden = ref(true);
  const activeElement = ref<number | null>(null);
  
  const items = [{
  primary: 'Video games',
},
{
  primary: 'Programming',
},
{
  primary: 'Gardening',
},
{
  primary: 'Anime',
},
];
  
  watch(activeElement, (newValue) => {
    navigateTo('/about/hobbies/' + newValue);
  });
  
  onMounted(() => {
    hidden.value = false;
  });
  </script>
  
  <style lang="scss" scoped>
  #hobbies-page {
    padding-left: 2rem;
    display: flex;
  }
  
  #hobbies-selector {
    width: 40vw;
  }
  
  #hobby-selected {
    width: 40vw;
  }
  
  #header-component {
    padding-top: 1.5rem;
    padding-right: 3rem;
  }
  </style>
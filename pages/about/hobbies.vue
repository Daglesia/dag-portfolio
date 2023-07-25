<template>
  <div id="hobbies-page">
    <div id="hobbies-selector">
      <header-component :hidden="hidden" title="Hobbies and interests" />
      <suspense>
        <pill-group v-model="activeElement" :hidden="hidden" :items="pillGroups" />
      </suspense>
    </div>
    <div id="hobby-selected">
      <NuxtPage :currentItem="currentItem" />
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { HobbyDataItem, PillGroupItem } from '@/types/props';

const route = useRoute();

const hidden = ref(true);
const activeElement = ref<number>(Number(route.params.hobbyid));

const { data } = await useFetch<HobbyDataItem[]>('/api/hobbies');
const pillGroups = computed(() => data.value?.map(item => { return { primary: item.title } as PillGroupItem; }) ?? [] as PillGroupItem[]);
const currentItem = computed(() => data.value ? data.value[activeElement.value] : []);

watch(activeElement, (newValue) => {
  navigateTo('/about/hobbies/' + newValue);
});

onMounted(async () => {
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
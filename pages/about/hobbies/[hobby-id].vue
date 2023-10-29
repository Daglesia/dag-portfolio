<template>
    <div class="flex-column">
      <header-component :title="currentItem.title" />
      <list-component :delay-ms="100" :title="currentItem.subtitle" :items="listItems" />
    </div>
</template>
  
<script setup lang="ts">
import { HobbyDataItem, InteractiveListItem } from "@/types/props";
  
const route = useRoute();
  
const nuxtApp = useNuxtApp();
const hobbyData = nuxtApp.$hobbyData();
  
const currentItem = computed<HobbyDataItem>(() => hobbyData.value?.find(hobbyItem => hobbyItem.id === route.params.hobbyid) as HobbyDataItem);
const listItems = computed<InteractiveListItem[]>(() => currentItem.value.items.map(item => ({title: item})));
</script>
  
  <style lang="scss" scoped>
.flex-column {
  display: flex;
  flex-direction: column;
  width: 100%;
}
  </style>
  
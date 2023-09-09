<template>
    <div id="hobby-description">
      <header-component :title="currentItem.title" />
      <list-component :delay-ms="100" :title="currentItem.subtitle" :items="currentItem.items" />
    </div>
</template>
  
<script setup lang="ts">
import { HobbyDataItem } from "@/types/props";
  
import { useHobbyStore } from "@/store/hobbyStore";
import { storeToRefs } from "pinia";
  
const route = useRoute();
  
const hobbyStore = useHobbyStore();
  
const { hobbyData } = storeToRefs(hobbyStore);
  
const currentItem = computed<HobbyDataItem>(() => hobbyData.value.find(hobbyItem => hobbyItem.id === route.params.hobbyid) as HobbyDataItem);
</script>
  
  <style lang="scss" scoped>
  #hobby-description {
    padding-inline: 4rem;
    padding-top: 1.4rem;
  }
  
  #hobby-pills {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  #padded-icon-group {
    display: flex;
    justify-content: left;
    gap: 1rem;
  }
  </style>
  
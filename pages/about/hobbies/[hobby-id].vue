<template>
  <div id="hobby-description">
    <header-component :hidden="hidden" :title="currentItem.title" />
    <list-component :hidden="hidden" :title="currentItem.subtitle" :items="data"/>
  </div>
</template>

<script setup lang="ts">
import { HobbyDataItem } from '@/types/props';

const hidden = ref(true);

const props = defineProps<{
  currentItem: HobbyDataItem;
}>();

const data = computed(() => props?.currentItem.items);

onMounted(() => {
  hidden.value = false;
});
</script>

<style lang="scss" scoped>
#hobby-description {
  padding-inline: 4rem;
  padding-top: 1.4rem;
}

#list-component {
  margin-left: 1rem;
}

</style>
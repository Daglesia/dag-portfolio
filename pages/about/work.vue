<template>
  <div id="work-page">
    <div id="work-selector">
      <header-component :hidden="hidden" title="Work experience" />
      <pill-group v-model="activeElement" :hidden="hidden" :items="pillGroups">

      </pill-group>
    </div>
    <div id="work-selected">
      <NuxtPage :currentItem="currentItem" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PillGroupItem, WorkDataItem } from 'types/props';
import { getFormattedDuration } from '@/utils/dateUtils';

const route = useRoute();

const hidden = ref(true);
const activeElement = ref<number>(Number(route.params.workid));

const { data } = await useFetch<WorkDataItem[]>('/api/work');

const pillGroups = computed(() => data.value?.map(item => { return { primary: item.title, secondary: getFormattedDuration(item.startDate, item.endDate, true) } as PillGroupItem; }) ?? [] as PillGroupItem[]);
const currentItem = computed(() => data.value ? data.value[activeElement.value] : []);

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
<template>
  <div>
    <nuxt-layout v-if="!loading">
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
import { useWorkStore } from "@/store/workStore";
import { useSkillStore } from "@/store/skillStore";
import { useHobbyStore } from "@/store/hobbyStore";

const loading = ref<boolean>(true);

const workStore = useWorkStore();
const skillStore = useSkillStore();
const hobbyStore = useHobbyStore();

onMounted(async () => {
    await workStore.fetchWorkData();
    await skillStore.fetchSkillData();
    await hobbyStore.fetchHobbyData();
    loading.value = false;
});
</script>

<style lang="scss">
@import "@/assets/global";
</style>

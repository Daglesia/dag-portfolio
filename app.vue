<template>
  <div>
    <nuxt-layout v-if="!loading">
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">

const loading = ref<boolean>(true);

onMounted(async () => {
    loading.value = false;
});
</script>

<style lang="scss">
@import "@/assets/global";
</style>

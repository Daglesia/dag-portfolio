<template>
  <div>
    <nuxt-page />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const isMenuVisible = computed(() => route.path === "/");
</script>

<style lang="scss">
@import "@/assets/global";
</style>

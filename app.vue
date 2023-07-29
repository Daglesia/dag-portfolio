<template>
  <nuxt-layout :name="isMenuVisible ? 'menu' : 'default'">
    <nuxt-page />
  </nuxt-layout>
</template>

<script setup lang="ts">
const route = useRoute();

const isMenuVisible = computed(() => route.path !== "/");
</script>

<style lang="scss">
@import "@/assets/global";
</style>

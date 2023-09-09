<template>
  <header id="header-component" :data-primary="primary">
    <div id="span-container">
        <span :class="{ centered }">{{ title }}</span>
    </div>
    <div id="hr-container">
      <hr :data-primary="primary">
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  primary?: boolean;
  centered?: boolean;
}>();
</script>

<style scoped lang="scss">
@import "@/assets/header.scss";
</style>

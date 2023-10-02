<template>
  <header id="header-component" :data-primary="primary">
    <div id="span-container">
        <span :class="{ centered, concise }">{{ title }}</span>
    </div>
    <div id="hr-container">
      <hr :data-primary="primary">
    </div>
    <div id="span-container-bottom" v-if="secondaryText">
      <span :class="{ centered, concise }"> {{secondaryText}} </span>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  primary?: boolean;
  centered?: boolean;
  concise?: boolean;
  secondaryText?: string;
}>();
</script>

<style scoped lang="scss">
@import "@/assets/header.scss";
</style>

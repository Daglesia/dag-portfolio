<template>
  <header :class="`header-component header-component__${primary ? 'primary' : 'secondary'} ${centered ? 'header-component--centered' : ''}`">
    <div class="span-container-top animation--slide-up">
        <span :class="{ centered }" >{{ title }}</span>
    </div>
    <div class="hr-container">
      <hr class="animation--span-out" :data-primary="primary">
    </div>
    <div class="overflow-hidden">
      <div class="span-container-bottom animation--slide-down" v-if="secondaryText">
        <span :class="{ centered }" > {{secondaryText}} </span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  primary?: boolean;
  centered?: boolean;
  secondaryText?: string;
}>();
</script>

<style scoped lang="scss">
@import "@/assets/header.scss";
@import "@/assets/animations.scss";

.overflow-hidden {
  overflow: hidden;
}
</style>

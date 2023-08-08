<template>
  <header id="header-component" :data-primary="primary">
    <div id="span-container">
      <Transition :css="false" :on-enter="popFromAboveAnimationEnter">
        <span v-if="!hidden" :class="{ centered }">{{ title }}</span>
      </Transition>
    </div>
    <div id="hr-container">
      <Transition :css="false" :on-enter="spanOutAnimationEnter">
        <hr v-if="!hidden" :data-primary="primary">
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  hidden: boolean;
  title: string;
  primary?: boolean;
  centered?: boolean;
}>();
</script>

<style scoped lang="scss">
@import "@/assets/header.scss";
</style>

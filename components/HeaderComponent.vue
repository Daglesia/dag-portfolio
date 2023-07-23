<template>
  <header id="header-component" :data-primary="primary">
    <div id="span-container">
      <Transition name="mario-span" appear>
        <span v-if="!hidden" :class="{ centered }">{{ title }}</span>
      </Transition>
    </div>
    <div id="hr-container">
      <Transition name="mario-hr" appear>
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

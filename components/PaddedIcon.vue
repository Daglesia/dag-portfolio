<template>
  <div id="padded-icon" :class="{ interactive: interactive, active: active }">
    <IconCSS :name="icon" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  interactive?: boolean;
  active?: boolean;
}>();
</script>

<style lang="scss" scoped>
@import "@/assets/components.scss";
</style>
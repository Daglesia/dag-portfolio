<template>
  <div class="padded-icon animation--slide-up animation--initial-blank" :class="{ 'padded-icon--interactive': interactive, 'padded-icon--active': active }">
    <IconCSS class="padded-icon__icon" :name="icon" />
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
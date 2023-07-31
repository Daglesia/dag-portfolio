<template>
    <div id="padded-icon">
        <IconCSS :name="icon" />
    </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
}>();
</script>

<style lang="scss" scoped>
@import "@/assets/components.scss";
</style>
<template>
  <Transition name="mario-pill" appear>
    <div v-if="!hidden" id="padded-icon" :class="{interactive: interactive, active: active}">
        <IconCSS :name="icon" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  interactive?: boolean;
  active?: boolean;
  hidden: boolean;
}>();
</script>

<style lang="scss" scoped>
@import "@/assets/components.scss";
</style>
<template>
    <Transition name="mario-pill" appear>
  <div id="pill" v-if="!hidden" :class="{centered: isSingleItem, active: active, interactive: interactive}">
    <div id="pill-slot">
    <slot></slot>
  </div>
  <div id="pill-slot">
    <slot name="right"></slot>
  </div>
  </div>
  </Transition>
  </template>
  
<script setup lang="ts">
import { useSlots } from 'vue';
  
defineProps<{
    hidden: boolean
    active: boolean
    interactive: boolean
  }>();
  
const slots = useSlots();
const isSingleItem = Object.keys(slots).length === 1;
</script>

<style lang="scss" scoped>
@import "@/assets/components.scss";
</style>
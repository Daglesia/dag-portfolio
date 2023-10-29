<template>
  <div class="pill animation--slide-up animation--initial-blank" :class="{
    'pill--centered': isSingleItem,
    'pill--active': active,
    'pill--interactive': interactive,
  }">
    <div class="pill__slot" :class="{ 'pill__icon': !!icon }">
      <IconCSS v-if="icon" :name="icon" />
      <div v-else class="pill__text">
        <slot />
      </div>
    </div>
    <div class="pill__slot pill--smallerText" v-if="icon || !isSingleItem">
      <slot :name="icon ? 'default' : 'right'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlots } from "vue";

const props = defineProps<{
  active?: boolean;
  interactive?: boolean;
  icon?: string;
}>();

const slots = useSlots();
const isSingleItem = Object.keys(slots).length === 1 && !props.icon;
</script>

<style lang="scss" scoped>
@import "@/assets/components.scss";
</style>

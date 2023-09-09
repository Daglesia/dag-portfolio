<template>
  <div id="list-component">
      <p v-if="title" :style="{animationDelay: `${delayMs ?? 0}ms`}">
        {{ title }}
      </p>
      <ul>
          <li v-for="item, index in items" :key="item" :style="{ 'animation-delay': delayInMilliseconds(index)}">
            {{ item }}
          </li>
          <hr :style="{animationDelay: `${delayMs ?? 0}ms`}">
      </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string;
  items: string[];
  delayMs?: number;
}>();

const delayInMilliseconds = (index: number) => props.delayMs ? `${100 * index + props.delayMs}ms` : `${100 * index}ms`;
</script>

<style lang="scss" scoped>
@import "@/assets/components.scss";
</style>

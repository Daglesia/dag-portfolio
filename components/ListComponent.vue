<template>
  <div class="vertical-list">
      <p v-if="title" class="vertical-list__title animation--slide-up animation--initial-blank" :style="{animationDelay: `${delayMs ?? 0}ms`}">
        {{ title }}
      </p>
      <ul class="vertical-list__list">
          <li v-for="item, index in items" :key="index" class="vertical-list__item animation--slide-up animation--initial-blank" :style="{ 'animation-delay': delayInMilliseconds(index)}">
            <nuxt-link v-if="item.href" :to="item.href" class="vertical-list__item--interactive">
              {{ item.title }}
            </nuxt-link>
            <div v-else>
              {{ item.title }}
            </div>
          </li>
          <hr class="vertical-list__line animation--vertical-line animation--initial-blank" :style="{animationDelay: `${delayMs ?? 0}ms`}">
      </ul>
  </div>
</template>

<script setup lang="ts">
import { InteractiveListItem } from "@/types/props";

const props = defineProps<{
  title?: string;
  items: InteractiveListItem[];
  delayMs?: number;
}>();

const delayInMilliseconds = (index: number) => props.delayMs ? `${100 * index + props.delayMs}ms` : `${100 * index}ms`;
</script>

<style lang="scss" scoped>
@import "@/assets/components.scss";
</style>

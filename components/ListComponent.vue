<template>
  <div id="list-component">
      <p v-if="title" :style="{animationDelay: `${delayMs ?? 0}ms`}">
        {{ title }}
      </p>
      <ul>
          <li v-for="item, index in items" :key="index" :style="{ 'animation-delay': delayInMilliseconds(index)}">
            <nuxt-link v-if="item.href" :to="item.href" class="interactive">
              {{ item.title }}
            </nuxt-link>
            <div v-else>
              {{ item.title }}
            </div>
          </li>
          <hr :style="{animationDelay: `${delayMs ?? 0}ms`}">
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

.interactive {
  cursor: pointer;
  opacity: 0.8;
  transition: opacity ease 0.4s;
}

.interactive:hover {
  opacity: 1;
}
</style>

<template>
  <div id="list-component">
    <Transition :css="false" :on-enter="fadeFromAboveAnimationEnter">
      <p v-if="!hidden && title">
        {{ title }}
      </p>
    </Transition>
      <ul>
        <transition-group :css="false" :on-enter="fadeFromAboveAnimationEnter2" appear>
          <li v-for="item in items" :key="item">
            {{ item }}
          </li>
        </transition-group>
        <transition :css="false" :on-enter="hrVerticalAnimation">
          <hr v-if="!hidden">
        </transition>
      </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  hidden: boolean;
  title?: string;
  items: string[];
}>();
</script>

<style lang="scss" scoped>
@import "@/assets/components.scss";
</style>

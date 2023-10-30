<template>
  <div class="main-menu">
    <header-component class="main-menu__header" primary centered title="Magdalena" secondary-text="Frontend developer" />
    <div class="main-menu__link-group">
      <div class="main-menu__link-item" :style="{ 'animation-delay': '100ms' }">
        <NuxtLink to="/about/">
          About
        </NuxtLink>
      </div>
      <div class="main-menu__link-item" :style="{ 'animation-delay': '200ms' }">
        <NuxtLink to="/contact/">
          Contact
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "default",
});
</script>

<style lang="scss" scoped>
@import "@/assets/components.scss";

.main-menu {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;


  &__header {
    width: 80%;
    padding: 2rem;
    padding-bottom: 1rem;
  }

  &__link-group {
    align-self: start;
    padding: 6rem;
    padding-left: 10%;
  }

  &__link-item {
    transition: color 0.6s, opacity 0.6s;
    width: fit-content;

    font-size: 5rem;
    padding-block: 0.5rem;
    color: $color-darkblue-1;
    font-weight: bold;
    cursor: pointer;
  }

  :hover > &__link-item {
    opacity: 0.7;
    color: $color-darkblue-1;
  }

  &__link-item:hover {
    opacity: 1;
    color: $color-lightblue-1 !important;
  }
}

.main-menu__header {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

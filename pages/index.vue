<template>
  <div id="main-menu">
    <header-component primary centered title="Magdalena" secondary-text="Frontend developer" />
    <div id="menu-links">
      <div id="a-container" :style="{ 'animation-delay': '100ms' }">
        <NuxtLink to="/about/">
          About
        </NuxtLink>
      </div>
      <div id="a-container" :style="{ 'animation-delay': '200ms' }">
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

#main-menu {
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#menu-links {
  align-self: start;
  padding: 5rem;
}

#menu-links > div {
  color: $color-lightblue-1;
}

#menu-links:hover > div {
  color: $color-darkblue-1;
}

.header-component {
  width: 80%;
  padding: 2rem;
  padding-bottom: 1rem;
}

#a-container {
  font-size: 5rem;
  padding-block: 0.5rem;
  color: $color-darkblue-1;
  font-weight: bold;
  cursor: pointer;
}

#a-container>a {
  transition: color 0.4s;
}

#a-container>a:hover {
  color: $color-lightblue-1;
}
</style>

<template>
  <div id="hobby-page">
    <div id="hobby-selector">
      <header-component primary title="Contact" concise />
      <pill-input />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: "about",
    layout: "menu",
    pageTransition: {
        name: "layout",
        appear: true,
        mode: "out-in",
    }
});
</script>

<style lang="scss" scoped>
#hobby-page {
  padding-left: 2rem;
  display: flex;
}

#hobby-selector {
  width: 40vw;
}

#hobby-selected {
  width: 40vw;
}

#header-component {
  padding-top: 1.5rem;
}
</style>
<template>
  <div id="contact-page">
    <header-component primary title="Contact" />
    <div id="contact-form">
      <div id="contact-lines">
        <pill-input type="name" label="Name" :style="{ 'animation-delay': '100ms' }"/>
        <pill-input type="email" label="Email" :style="{ 'animation-delay': '200ms' }"/>
      </div>
      <message-field label="Message" :style="{ 'animation-delay': '300ms' }"/>
      <button id="pill">Send</button>
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
@import "@/assets/components.scss";
#contact-page {
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
}

#contact-form {
  display: flex;
  flex-direction: column;
  width: 80vw;
  padding-top: 1rem;
  height: 80vh;
}

#contact-lines {
  display: flex;
  gap: 2rem;
  flex-direction: row;
}

#header-component {
  padding-top: 1.9rem;
  width: 40vw;
}
</style>
<template>
  <div>
    <header-component primary title="Contact" />
    <div class="contact-form">
      <div class="contact-form__input-group">
        <pill-input type="name" label="Name" :style="{ 'animation-delay': '100ms' }"/>
        <pill-input type="email" label="Email" :style="{ 'animation-delay': '200ms' }"/>
      </div>
      <message-field label="Message" :style="{ 'animation-delay': '300ms' }"/>
      <pill-button class="contact-form__submit-button">Send</pill-button>
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
.header-component {
  width: 40%;
  padding-top: 1rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 1rem;
  height: 100%;

  &__input-group {
    display: flex;
    gap: 2rem;
    flex-direction: row;
  }

  &__submit-button {
    margin-top: 4rem;
    width: 40%;
    place-self: center;
  }
}
</style>
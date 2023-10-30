<template>
  <div class="pill-input" @click="focusIn" v-click-outside="focusOut">
    <label :for="type" class="pill-input__label">{{ label }}</label>
    <div class="pill-input__pill" :class="{ 'pill-input__pill--active': !!inputFocused }">
      <div class="pill-input__input-wrapper">
        <input class="pill-input__input" @focusin="inputFocused = true" @focusout="focusOut" :type="type" ref="inputComponent" :id="type"/>
        <hr class="pill-input__line" />
      </div>
      <div class="pill-input__icon-wrapper">
        <IconCSS class="pill-input__icon" :name="iconName" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const inputFocused = ref(false);
const inputComponent = ref<HTMLElement | null>(null);

type inputType = "email" | "name";

const props = defineProps<{
  type: inputType;
  label: string;
}>();

const focusIn = () => {
    inputFocused.value = true;
    if (inputComponent.value) {
        inputComponent.value.focus();
    }
};

const focusOut = () => {
    inputFocused.value = false;
};

const iconName = props.type === "email" ? "fa6-solid:envelope" : "fa6-solid:circle-user";
</script>

<style lang="scss" scoped>
@import "@/assets/components.scss";

.pill-input__label {
  padding-left: 1.2rem;
  width: fit-content;
}

.pill-input {
  width: 100%;
}
</style>
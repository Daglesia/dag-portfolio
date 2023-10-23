<template>
  <div class="slide-low input-component" @click="focusIn" v-click-outside="focusOut">
    <label :for="type" class="text-big">{{ label }}</label>
    <div class="pill-input" :class="{ active: !!inputFocused }">
      <div class="input">
        <input @focusin="inputFocused = true" @focusout="focusOut" :type="type" ref="inputComponent" :id="type"/>
        <hr />
      </div>
      <div class="icon">
        <IconCSS :name="iconName" />
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

.text-big {
  padding-left: 1.2rem;
}

.input-component {
  width: 100%;
}
</style>
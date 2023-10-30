<template>
  <div class="message-field pill-textarea" @click="focusIn" v-click-outside="focusOut">
    <label for="text" class="pill-textarea__label">{{ label }}</label>
    <div class="pill-textarea__pill" :class="{ 'pill-textarea__pill--active': !!inputFocused }">
      <textarea class="pill-textarea__textarea" :value="text" @keydown.enter.prevent="inputChangedHandler" @input="inputChangedHandler" @focusin="inputFocused = true" @focusout="focusOut" id="text" :maxlength="MAX_LENGTH" ref="textArea" />
      <span class="pill-textarea__footnote">Remaining characters: {{ MAX_LENGTH - text.length }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const MAX_LENGTH = 300;

const inputFocused = ref<boolean>(false);

const text = ref<string>("");
const textArea = ref<HTMLElement | null>(null);

const height = ref<string>("6rem");
const initialHeight = ref<number>(0);

addEventListener("resize", () => {
    resizeIfNecessary();
});

defineProps<{
  label: string;
}>();

const focusIn = () => {
    inputFocused.value = true;
    if (textArea.value) {
        textArea.value.focus();
    }
};

const focusOut = () => {
    inputFocused.value = false;
};

onMounted(() => {
    if (textArea.value) {
        initialHeight.value = textArea.value.clientHeight;
    }
});

const resizeIfNecessary = () => {
    if (textArea.value) {
        height.value = `${textArea.value.scrollHeight.toString()}px`;
    }
};

const inputChangedHandler = (event: Event) => {
    const newValue = (event?.target as HTMLInputElement).value;
    text.value = newValue;

    resizeIfNecessary();
};
</script>

<style lang="scss" scoped>
@import "@/assets/components.scss";
.pill-textarea__textarea {
  height: v-bind(height);
}
</style>
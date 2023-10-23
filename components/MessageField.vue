<template>
  <div class="slide-low message-field" @click="focusIn" v-click-outside="focusOut">
    <label for="text" class="text-big">{{ label }}</label>
    <div class="pill-textarea" :class="{ active: !!inputFocused }">
      <textarea v-model="text" @focusin="inputFocused = true" @focusout="focusOut" id="text" :maxlength="MAX_LENGTH" ref="textArea" />
      <span>Remaining characters: {{ MAX_LENGTH - text.length }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const MAX_LENGTH = 500;

const inputFocused = ref(false);

const text = ref<string>("");
const textArea = ref<HTMLElement | null>(null);

const height = ref<string>("6rem");
const initialHeight = ref<number>(0);

addEventListener("resize", () => {
    console.log("resiziz");
    resizeIfNecessary();
});

const props = defineProps<{
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
    console.log("resize");
    if (textArea.value) {
        console.log("resize222");
        height.value = `${textArea.value.scrollHeight.toString()}px`;
    }
};

watch(text, () => {
    resizeIfNecessary();
});
</script>

<style lang="scss" scoped>
@import "@/assets/components.scss";

.text-big {
  padding-left: 1.2rem;
}

.pill-textarea {
  height: v-bind(height);
}

.message-field {
  display: flex;
  flex-direction: column;
  height: auto;
}

span {
  position: absolute;
  bottom: 1rem;
  right: 2.4rem;

  font-size: 1.2rem;
  font-weight: bold;
}
</style>
<template>
    <div class="navigation navigation__wrapper animation--slide-up-short">
      <nav class="navigation__nav">
        <div
          v-for="(item, index) in menuItems"
          :key="index"
          ref="startingPoint"
          class="navigation__item"
          :class="{ 'navigation__item--active': modelValue === index }"
          @click="(event) => handleClick(event, index)"
        >
          <IconCSS class="navigation__icon" :name="item.icon" />
        </div>
      </nav>
      <div class="navigation__underline-group">
        <hr class="navigation__underline">
        <hr class="navigation__underline navigation__underline--active">
        <hr class="navigation__underline navigation__underline--active navigation__underline--delayed">
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NavigationMenuItem } from "@/types/props";

const props = defineProps<{
  menuItems: NavigationMenuItem[];
  modelValue: number;
}>();

const selectedIndex = computed(()=>props.modelValue);

const emit = defineEmits<{(event: "update:modelValue", index: number): void;}>();

const startingPoint = ref<HTMLElement[]>();
const left = ref(`calc(${props.modelValue * (1/3)}%)`);
const width = ref("calc(33% + 1px)");

const setNavigationLine = (newLeft: number) => {
    left.value = `${newLeft}px`;
};

const setSelectedElement = (element: HTMLElement[] | undefined, index: number | undefined = undefined) => {
    if (element) {
        const item = element[index ?? props.modelValue] as HTMLElement;
        if (item.offsetWidth) {
            setNavigationLine(item.offsetLeft);
        }
    }
};

watch(startingPoint, (newValue) => {
    setSelectedElement(newValue);
});

watch(selectedIndex, (newValue) => {
    if(startingPoint.value) {
        setSelectedElement(startingPoint.value, newValue);
    }
});

const handleClick = (event: MouseEvent, index: number) => {
    let element = event?.target as HTMLElement;
    while (element.nodeName !== "DIV") {
        element = element.parentNode as HTMLElement;
    }
    setNavigationLine(element.offsetLeft);
    emit("update:modelValue", index);
};
</script>

<style scoped lang="scss">
@import "@/assets/navigation";

.navigation__underline--active {
  left: v-bind(left);
  width: v-bind(width);
}
</style>

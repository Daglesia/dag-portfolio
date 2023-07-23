<template>
  <Transition name="mario-nav" appear>
    <div v-if="!hidden" id="navigation">
      <nav>
        <div v-for="item, index in menuItems" :key="index" ref="startingPoint" :class="{ active: modelValue === index }"
          @click="(event) => handleClick(event, index)">
          <IconCSS :name="item.icon" />
        </div>
      </nav>
      <div class="underlines">
        <hr>
        <hr class="active">
        <hr class="active delayed">
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { NavigationMenuItem } from 'types/props';
import { useSlots, ref } from 'vue';

const emit = defineEmits<{
  (event: 'update:modelValue', index: number): void;
}>();

const startingPoint = ref<HTMLElement[]>();
const left = ref('0px');
const width = ref('0px');

const setNavigationLine = (newLeft: number, newWidth: number) => {
	left.value = `${newLeft}px`;
	width.value = `${newWidth}px`;
};

const props = defineProps<{
  menuItems: NavigationMenuItem[];
  hidden: boolean;
  modelValue: number;
}>();

watch(startingPoint, (newValue) => {
	if (newValue) {
		const item = newValue[props.modelValue] as HTMLElement;
		setNavigationLine(item.clientLeft, item.clientWidth);
	}
});

const handleClick = (event: MouseEvent, index: number) => {
	let element = event?.target as HTMLElement;
	while (element.nodeName !== 'DIV') {
		element = element.parentNode as HTMLElement;
	}
	setNavigationLine(element.offsetLeft, element.offsetWidth);
	emit('update:modelValue', index);
};

console.log(useSlots(), 'dazz');
</script>

<style scoped lang="scss">
@import "@/assets/navigation";

.underlines>.active {
  left: v-bind(left);
  width: v-bind(width);
}
</style>

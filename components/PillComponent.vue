<template>
  <Transition name="mario-pill" appear>
    <div id="pill" v-if="!hidden" :class="{ centered: isSingleItem, active: active, interactive: interactive }">
      <div id="pill-slot" :class="{ icon: !!icon }">
        <IconCSS v-if="icon" :name="icon" />
        <slot v-else />
      </div>
      <div id="pill-slot" :class="{ smallerText: !!icon }">
        <slot :name="icon ? 'default' : 'right'" />
      </div>
    </div>
  </Transition>
</template>
  
<script setup lang="ts">
import { useSlots } from 'vue';

const props = defineProps<{
  hidden: boolean
  active?: boolean
  interactive?: boolean
  icon?: string
}>();

const slots = useSlots();
const isSingleItem = Object.keys(slots).length === 1 && !props.icon;
</script>

<style lang="scss" scoped>
@import "@/assets/components.scss";
</style>
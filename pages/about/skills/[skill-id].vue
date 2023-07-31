<template>
    <div id="skill-description">
        <header-component :hidden="false" :title="currentItem.skill.displayName" />
    </div>
</template>

<script setup lang="ts">
import { SkillDataItem } from "@/types/props";

const props = defineProps<{
  currentItem: SkillDataItem;
}>();
</script>

<style lang="scss" scoped>
#header-component {
    padding-top: 1.5rem;
    padding-right: 3rem;
}
</style>
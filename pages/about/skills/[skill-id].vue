<template>
    <div id="skill-description">
        <header-component :hidden="false" :title="currentItem.skill.displayName" />
        <pill-component icon="fa6-solid:clock" :hidden="false">
        <template #default>
          <span>{{ getFormattedDuration(currentItem.startDate, undefined, false) }}</span>
        </template>
      </pill-component>
      <list-component
      :hidden="false"
      title="Used in:"
      :items="['data']"
    />
    </div>
</template>

<script setup lang="ts">
import { SkillDataItem } from "@/types/props";
import {
    getFormattedDuration,
} from "@/utils/dateUtils";

defineProps<{
  currentItem: SkillDataItem;
}>();
</script>

<style lang="scss" scoped>

#header-component {
    padding-top: 1.5rem;
    margin-bottom: 1rem;
}

#list-component {
  margin-left: 1rem;
}
</style>
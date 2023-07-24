<template>
    <div id="list-component">
        <p v-if="title">
            {{ title }}
        </p>
        <ul>
            <li v-for="item in items" :key="item">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  hidden: boolean;
  title?: string;
  items: string[];
}>();
</script>

<style lang="scss" scoped>
@import "@/assets/components.scss";
</style>
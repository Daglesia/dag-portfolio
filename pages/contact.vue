<template>
    <span>
        Placeholder text
    </span>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: "about",
    layout: "menu",
    pageTransition: {
        name: "layout",
        appear: true,
        mode: "out-in",
    }
});
</script>
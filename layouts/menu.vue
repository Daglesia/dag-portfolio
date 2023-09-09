<template>
    <div>
        <div id="menu-icon" @click="menuIconClickHandler">
            <IconCSS name="fa6-solid:house" />
            <hr v-if="!hidden">
        </div>
        <slot />
    </div>
</template>

<script setup lang="ts">
const hidden = ref(true);

const menuIconClickHandler = () => navigateTo("");

onMounted(() => {
    hidden.value = false;
});
</script>

<style scoped lang="scss">
@import "@/assets/components.scss";

#menu-icon {
    position: absolute;
    right: 0;
    margin-top: 2rem;
    margin-right: 7rem;
}
</style>
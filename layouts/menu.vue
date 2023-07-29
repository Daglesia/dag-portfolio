<template>
    <div id="menu-icon" @click="menuIconClickHandler">
        <Transition name="mario-span" appear>
            <IconCSS v-if="!hidden" name="fa6-solid:house" />
        </Transition>
        <Transition name="mario-hr" appear>
            <hr v-if="!hidden" >
        </Transition>
    </div>
    <slot />
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
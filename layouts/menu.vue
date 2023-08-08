<template>
    <div id="menu-icon" @click="menuIconClickHandler">
        <Transition :css="false" :on-enter="popFromAboveAnimationEnter">
            <IconCSS v-if="!hidden" name="fa6-solid:house" />
        </Transition>
        <Transition :css="false" :on-enter="spanOutAnimationEnter">
            <hr v-if="!hidden">
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
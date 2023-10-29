<template>
    <div class="pi-3">
        <div id="menu-icon" class="hr-icon hr-icon--interactive" @click="menuIconClickHandler">
            <IconCSS class="hr-icon__icon animation--slide-up" name="fa6-solid:house" />
            <hr class="hr-icon__line animation--span-out" v-if="!hidden">
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

.pi-3 {
    padding-inline: 3rem;
}

#menu-icon {
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 1.8rem;
    margin-right: 3rem;
}
</style>
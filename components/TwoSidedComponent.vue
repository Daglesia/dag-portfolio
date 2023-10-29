<template>
    <div class="two-sides">
        <div class="w-100">
            <slot name="left"></slot>
        </div>
        <div class="w-100">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.two-sides {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;

    gap: 5rem;
}

.w-100 {
    width: 100%;
}
</style>
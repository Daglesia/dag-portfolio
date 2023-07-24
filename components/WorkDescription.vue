<template>
    <div id="work-description">
        <header-component :hidden="hidden" title="Something" />
        <div id="work-pills">
            <pill-component icon="fa6-solid:clock" :hidden="hidden">
                <template #default>
                    <span>2 years</span>
                </template>
            </pill-component>
            <pill-component icon="fa6-solid:calendar" :hidden="hidden">
                <template #default>
                    <span>03.21 - 05.23</span>
                </template>
            </pill-component>
            <pill-component icon="fa6-solid:suitcase" :hidden="hidden">
                <template #default>
                    <span>Software engineer</span>
                </template>
            </pill-component>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  hidden: boolean;
}>();
</script>

<style lang="scss" scoped>
#work-description {
    padding-inline: 4rem;
    padding-top: 1.4rem;
}

#work-pills {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
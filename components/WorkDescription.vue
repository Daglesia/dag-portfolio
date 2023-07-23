<template>
    <div id="work-description">
        <header-component :hidden="false" title="Something" />
        <div id="work-pills">
            <pill-component icon="fa6-solid:clock" :hidden="false">
                <template #default>
                    <span>2 years</span>
                </template>
            </pill-component>
            <pill-component icon="fa6-solid:calendar" :hidden="false">
                <template #default>
                    <span>03.21 - 05.23</span>
                </template>
            </pill-component>
            <pill-component icon="fa6-solid:suitcase" :hidden="false">
                <template #default>
                    <span>Software engineer</span>
                </template>
            </pill-component>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#work-description {
    padding-inline: 4rem;
    padding-top: 2rem;
}

#work-pills {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
}
</style>
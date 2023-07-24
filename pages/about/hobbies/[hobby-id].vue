<template>
  <div id="hobby-description">
    <header-component :hidden="hidden" title="Video games" />
    <list-component :hidden="hidden" title="Favourites:" :items="items"/>
  </div>
</template>

<script setup lang="ts">
const hidden = ref(true);
const items = [
  'Terraria',
  'Minecraft',
  'Yakuza',
  'Chrono Trigger',
  'Mother 3'
];

onMounted(() => {
  hidden.value = false;
});
</script>

<style lang="scss" scoped>
#hobby-description {
  padding-inline: 4rem;
  padding-top: 1.4rem;
}

#list-component {
  margin-left: 1rem;
}

</style>
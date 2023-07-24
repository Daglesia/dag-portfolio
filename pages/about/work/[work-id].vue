<template>
  <work-description :hidden="hidden" />
</template>

<script setup lang="ts">
const hidden = ref(true);

onMounted(() => {
    hidden.value = false;
});
</script>
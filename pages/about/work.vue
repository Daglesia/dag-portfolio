<template>
  <div id="work-page">
    <div id="work-selector">
    <header-component 
      :hidden="hidden"
      title="Work experience"
    />
    <pill-group v-model="activeElement" :hidden="hidden">
      
    </pill-group>  
    </div>
    <div id="work-selected" v-show="activeElement !== null">
      <work-description />
    </div>
  </div>
</template>

<script setup lang="ts">
const hidden = ref(true);
const activeElement = ref<number | null>(null);

const activeElementChangeHandler = (index: number) => {
  console.log('element', index);
}

onMounted(()=> {
	hidden.value = false;
});
</script>

<style lang="scss" scoped>
#work-page {
  padding-left: 2rem;
  display: flex;
}

#work-selector {
  width: 40vw;
}

#work-selected {
  width: 40vw;
}

#header-component {
  padding-top: 2rem;
  padding-right: 3rem;
}
</style>
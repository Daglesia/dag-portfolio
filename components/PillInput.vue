<template>
<div class="relative">
  <div id="pill" class="input-border">
    <div id="pill-slot" class="smallerText">
        <input class="input" />
    </div>
    <div id="pill-slot" class="icon">
        <IconCSS name="fa6-solid:circle-user" />
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@import "@/assets/components.scss";

.relative {
    position: relative;
    margin-top: 30rem;
    box-shadow: 0 0 1px 0px $color-lightblue-1 inset, 0 0 1px 0px $color-lightblue-1;
    border-radius: 2.5rem;
}

.pill-border {
  position: absolute;
  top:0;
  height: 100%;
  width: 100%;
    border-radius: 2.5rem;
    box-shadow: 0 1px 1px 1px $color-lightblue-1;
    border-bottom: 4px $color-lightblue-1 solid;
    border-left: 4px $color-lightblue-1 solid;
}
</style>
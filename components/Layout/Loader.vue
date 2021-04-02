<template>
  <div class="loader">
    <div class="svgContainer"></div>
  </div>
</template>

<style scoped>
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: #000;
  overflow: hidden;
  z-index: 1001;}

.svgContainer {
  height: 160px;}

@media (min-width: 768px) { 
  .svgContainer {
    height: 240px;}
}
</style>

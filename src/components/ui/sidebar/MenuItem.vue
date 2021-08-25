<template>
  <div class="container pl-6">
    <div class="icon"><slot name="icon"></slot></div>
    <div class="text ml-2">
      <slot name="text"> </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.icon-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.container:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

.icon,
.text {
  size: 1.875em;
  color: white;
}
</style>

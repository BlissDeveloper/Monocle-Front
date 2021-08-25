<template>
  <div class="container">
    <va-input class="mr-1"
      ><template #prepend> <va-icon name="search" /> </template
    ></va-input>
    <Button label="Search" class="ml-1" />
  </div>
</template>

<script>
import Button from "primevue/button";

export default {
  components: {
    Button,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
button {
  background-color: #338aa1;
  border-color: #338aa1;
}
</style>

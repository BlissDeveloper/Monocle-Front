<template>
  <div class="container pl-6">
    <div class="icon"><slot name="icon"></slot></div>
    <router-link :to="link"><slot name="text" style="width: 100%"> </slot></router-link>
  </div>
</template>

<script>
export default {
  props: ["link"],
};
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

a {
  text-decoration: none;
}

a:hover,
a.active,
a.router-link-active {
  color: white;
  /* background-color: rgba(0, 0, 0, 0.5); */
}
/* .container:hover {
  background-color: rgba(0, 0, 0, 0.5);
} */

a:link,
a:visited {
  color: white;
  /* background-color: rgba(0, 0, 0, 0.5); */
}

.icon,
.text {
  size: 1.875em;
  color: white;
}
</style>

<template>
  <div class="container">
    <router-link class="px-5" to="accounts"><h1>Accounts</h1></router-link>
    <router-link class="px-5 ml-3" to="landmarks"><h1>Landmarks</h1></router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

}

a {
  text-decoration: none;
}

a:link {
  color: #000000;
  background: rgba(196, 196, 196, 0.5);
}

a:visited {
  color: black;
}

a:hover,
a.active,
a.router-link-active {
  color: white;
  background-color: #090c4b;
}
</style>

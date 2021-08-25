<template>
  <div class="container">
    <router-link class="px-5" to="accounts"
      ><p class="text-base lg:text-4xl">Accounts</p></router-link
    >
    <router-link class="px-5 p ml-3" to="landmarks"
      ><p class="text-base lg:text-4xl">Landmarks</p></router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
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

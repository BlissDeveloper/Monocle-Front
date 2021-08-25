<template>
  <div class="grid mt-3">
    <div class="col-1"></div>
    <div class="col-10">
      <admin-panel-nav></admin-panel-nav>
      <hr />
      <search-bar class="pl-6 pr-6"></search-bar>
      <router-view></router-view>
    </div>
    <div class="col-1"></div>
  </div>
</template>

<script>
import AdminPanelNav from "./AdminPanelNav.vue";
import SearchBar from "./SearchBar.vue";

export default {
  components: {
    AdminPanelNav,
    SearchBar,
  },
};
</script>

<style scoped></style>

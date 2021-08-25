<template>
  <div class="grid mt-3">
    <div class="col-1"></div>
    <div class="col-10">
      <admin-panel-nav></admin-panel-nav>
      <hr>
      <router-view></router-view>
    </div>
    <div class="col-1"></div>
  </div>
</template>

<script>
import AdminPanelNav from "./AdminPanelNav.vue";

export default {
  components: {
    AdminPanelNav,
  },
};
</script>

<style scoped></style>

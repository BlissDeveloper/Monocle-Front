<template>
  <app-bar @drawer-open="setOpen"></app-bar>
  <Sidebar
    :visible="true"
    :dismissable="true"
    :showCloseIcon="true"
    :baseZIndex="1000"
    class="p-sidebar-sm"
    v-if="isDrawerOpen"
    @click="isDrawerOpen = false"
  ></Sidebar>
</template>

<script>
import AppBar from "./AppBar.vue";
import Sidebar from "primevue/sidebar";

export default {
  data() {
    return {
      isDrawerOpen: false,
    };
  },
  components: {
    AppBar,
    Sidebar,
  },
  methods: {
    setOpen() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
  },
};
</script>

<style scoped></style>

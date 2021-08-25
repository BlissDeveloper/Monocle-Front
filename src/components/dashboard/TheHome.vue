<template>
  <the-sidebar
    v-if="isDrawerOpen"
    @on-close="isDrawerOpen = false"
  ></the-sidebar>
  <app-bar @drawer-open="isDrawerOpen = true"></app-bar>
  <router-view></router-view>
</template>

<script>
import AppBar from "../ui/appbar/AppBar.vue";
import TheSidebar from "../ui/sidebar/TheSidebar.vue";

export default {
  data() {
    return {
      isDrawerOpen: false,
    };
  },
  components: {
    AppBar,
    TheSidebar,
  },
  watch: {
    // document.querySelector('body').style.backgroundColor = this.isRed ? 'red' : null;
    isDrawerOpen() {
      document.querySelector("body").style.backgroundColor = this.isDrawerOpen
        ? "rgba(0,0,0,0.4)"
        : null;
    },
  },
};
</script>

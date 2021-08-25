<template>
  <div id="mySidenav" class="sidenav flex">
    <div id="close-container">
      <Button
        icon="pi pi-times"
        class="p-button-rounded p-button-danger"
        @click="onClose"
      />
    </div>
    <img class="responsive" src="../../../assets/monocle_logo.svg" />
    <div class="mt-4" style="width: 100%">
      <menu-item link="/home/dashboard/accounts">
        <template v-slot:icon>
          <img class="responsive" src="../../../assets/ic_dashboard.svg" />
        </template>
        <template v-slot:text>
          <p>Dashboard</p>
        </template>
      </menu-item>
      <menu-item link="/home/settings">
        <template v-slot:icon>
          <img class="responsive" src="../../../assets/ic_gear.svg" />
        </template>
        <template v-slot:text>
          <p>Settings</p>
        </template>
      </menu-item>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
import MenuItem from "./MenuItem.vue";

export default {
  emits: ["on-close"],
  components: {
    Button,
    MenuItem,
  },
  methods: {
    onClose() {
      this.$emit("on-close");
    },
  },
};
</script>

<style scoped>
/* The side navigation menu */
#close-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 1.5em;
  padding-top: 1.5em;
  width: 100%;
}

.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidenav {
  height: 100%; /* 100% Full-height */
  width: 300px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background: linear-gradient(
    175.4deg,
    #060645 1.22%,
    #4bb3d9 149.64%,
    #58d5f6 149.65%
  ); /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  /* padding-top: 60px; Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left 0.5s;
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
#overlay {
  position: fixed; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}

.responsive {
  width: 50%;
  height: auto;
}
</style>

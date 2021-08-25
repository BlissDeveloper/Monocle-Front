<template>
  <div class="app-bar">
    <i
      class="pi pi-bars pl-4"
      style="fontSize: 2rem; color: white"
      @click="initDrawerOpen"
    ></i>
    <p class="title"><b>Welcome, admin!</b></p>
    <div class="avatar ">
      <Avatar
        class="mr-3 p-avatar-lg"
        size="large"
        shape="circle"
        image="https://i.ytimg.com/vi/HChr5aeN5lk/maxresdefault.jpg"
      />
    </div>
  </div>
</template>

<script>
// import Button from "primevue/button";
import Avatar from "primevue/avatar";
export default {
  emits: ["drawer-open"],
  components: {
    Avatar,
  },
  methods: {
    initDrawerOpen() {
      this.$emit("drawer-open");
    },
  },
};
</script>

<style scoped>
.app-bar {
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
  overflow: auto;
  background: #090c4b;
  height: 80px;
  margin-top: 0;
  top: 0;
}

.title {
  font-size: 2.5vh;
  color: white;
}

.avatar {
}
</style>

//
<Button type="button" class="p-px-3">
            <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" style="width: 1.5rem"/>
        </Button>

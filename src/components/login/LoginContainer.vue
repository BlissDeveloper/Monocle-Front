<template>
  <div class="grid">
    <div class="col-1 lg:col-4"></div>
    <login-form class="col-10 lg:col-4"></login-form>
    <div class="col-1 lg:col-4"></div>
  </div>
</template>

<script>
import LoginForm from "./LoginForm.vue";

export default {
  components: {
    "login-form": LoginForm,
  },
};
</script>

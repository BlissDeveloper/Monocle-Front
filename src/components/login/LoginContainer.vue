<template>
  <div class="grid">
    <div class="col-1 md:col-4"></div>
    <login-form class="col-10 md:col-4"></login-form>
    <div class="col-1 md:col-4"></div>
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

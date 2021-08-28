<template>
  <teleport to="#modal ">
    <va-progress-bar indeterminate v-if="isLoading"/>
  </teleport>
  <div class="grid">
    <div class="col-1 lg:col-4"></div>
    <div class="col-10 lg:col-4">
      <login-form @is-loading="handleLoad"></login-form>
    </div>
    <div class="col-1 lg:col-4"></div>
  </div>
</template>

<script>
import LoginForm from "./LoginForm.vue";

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    "login-form": LoginForm,
  },
  methods: {
    handleLoad(isLoading) {
      this.isLoading = isLoading;
    },
  },
};
</script>

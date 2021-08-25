<template>
  <div class="flex flex-column md:pl-8 md:pr-8">
    <img class="responsive center" src="../../assets/monocle_logo.svg" />
    <label class="mt-3" for="username">Username/Email</label>
    <text-field id="username" type="username" />
    <label class="mt-3" for="password">Password</label>
    <text-field id="username" type="password" />
    <m-button class="mt-3 custom-btn" label="Login"></m-button>
    <div class="flex flex-row justify-content-center">
      <a><p class="forgot">Forgot Password</p></a>
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import Button from "primevue/button";

export default {
  components: {
    "text-field": InputText,
    "m-button": Button,
  },
};
</script>

<style scoped>
.forgot {
  color: rgba(0, 0, 0, 0.7);
}

text-field {
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-radius: 10px;
}

text-fiel:hover {
  border-color: #090c4b;
}

.custom-btn {
  background-color: #090c4b;
  border-color: #090c4b;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 33px;
}

.custom-btn:hover {
  opacity: 0.5;
  background-color: #090c4b;
}

.responsive {
  width: 100%;
  max-width: 450px;
  height: auto;
}
.center {
  /* display: block; */
  margin-left: auto;
  margin-right: auto;
}
</style>

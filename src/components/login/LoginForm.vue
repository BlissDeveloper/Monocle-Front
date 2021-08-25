<template>
  <div class="flex flex-column md:pl-8 md:pr-8">
    <img class="responsive center" src="../../assets/monocle_logo.svg" />
    <label class="mt-3" for="username">Username/Email</label>
    <text-field id="username" type="username" maxLength="50" />
    <label class="mt-3" for="password">Password</label>
    <text-field id="username" type="password" maxLength="50" />
    <m-button
      class="mt-3 custom-btn"
      label="Login"
      @click="handleClick"
    ></m-button>
    <div class="flex flex-row justify-content-center">
      <a><p class="forgot">Forgot Password</p></a>
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Messages from "../../utils/Messages";

export default {
  data() {
    return {
      severity: "success",
      username: "",
      password: "",
      show: false,
    };
  },
  components: {
    "text-field": InputText,
    "m-button": Button,
  },
  methods: {
    handleClick() {
      if (this.username.length === 0) {
        this.errors.push(Messages.PASSWORD_REQ);
      }
      if (this.password.length === 0) {
        this.errors.push(Messages.USERNAME_REQ);
      }
    },
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

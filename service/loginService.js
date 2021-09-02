require("dotenv").config();
const BASE_URL = process.env.VUE_APP_LOGIN_BASE;

const axios = require("axios").create({
  baseURL: BASE_URL,
  timeout: 60000,
});

const signIn = (email, password) => {
  return axios.post("/login", {
    email: email,
    password: password,
  });
};

export default {
  signIn,
};

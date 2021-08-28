require("dotenv").config();
const BASE_URL = process.env.VUE_APP_LOGIN_BASE;
const axios = require("axios");
axios.defaults.baseURL = BASE_URL;
export const signIn = (email, password) => {
  return axios.post("/login", {
    email: email,
    password: password,
  });
};

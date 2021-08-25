import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import "../node_modules/primeflex/primeflex.css";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";

import LoginContainer from "./components/login/LoginContainer.vue";
import DashboardContainer from "./components/dashboard/DashboardContainer.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      component: LoginContainer,
    },
    {
      path: "/dashboard",
      component: DashboardContainer,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.mount("#app");

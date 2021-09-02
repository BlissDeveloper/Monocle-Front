import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import { VuesticPlugin } from "vuestic-ui"; // <-
// import 'vuestic-ui/dist/vuestic-ui.css' // <-

import PrimeVue from "primevue/config";
import "../node_modules/primeflex/primeflex.css";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";

import LoginContainer from "./components/login/LoginContainer.vue";
import TheHome from "./components/dashboard/TheHome.vue";
import AdminPanel from "./components/dashboard/admin_panel/AdminPanel.vue";
import Settings from "./components/dashboard/settings/Settings.vue";
import AccountsList from "./components/dashboard/admin_panel/accounts/AccountsList.vue";
import LandmarksList from "./components/dashboard/admin_panel/landmarks/LandmarksList.vue";
import Message from "primevue/message";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "login",
      path: "/login",
      component: LoginContainer,
    },
    {
      name: "home",
      path: "/home",
      component: TheHome,
      children: [
        {
          name: "dashboard",
          path: "dashboard",
          component: AdminPanel,
          children: [
            {
              name: "accounts",
              path: "accounts",
              component: AccountsList,
            },
            {
              name: "landmarks",
              path: "landmarks",
              component: LandmarksList,
            },
          ],
        },
        {
          name: "settings",
          path: "settings",
          component: Settings,
        },
      ],
    },
  ],
});

const app = createApp(App);
app.component(Message);

app.use(router);
app.use(PrimeVue);
app.use(VuesticPlugin);
app.mount("#app");

import { createApp } from "vue";

import App from "./App.vue";

// import 'vuestic-ui/dist/vuestic-ui.css' // <-
import { VuesticPlugin } from "vuestic-ui"; // <-

import PrimeVue from "primevue/config";
import "../node_modules/primeflex/primeflex.css";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";
import ToastService from "primevue/toastservice";
import Message from "primevue/message";

import VueCookies from "vue3-cookies";
import router from "./router/router";

const app = createApp(App);
app.component(Message);
app.use(VueCookies, {
  expireTimes: "7d",
  secure: true,
});
app.use(ToastService);
app.use(router);
app.use(PrimeVue);
app.use(VuesticPlugin);
app.mount("#app");

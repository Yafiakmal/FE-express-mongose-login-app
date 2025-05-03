import { createApp } from "vue";
import App from "../layouts/Dashboard.vue";
import { router } from "../router/router.dashboard";

createApp(App).use(router).mount("#app");

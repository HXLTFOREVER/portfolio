import { createApp } from "vue";
import "./style.scss";
import Antd from "ant-design-vue";
import App from "./App.vue";
import { router } from "@/routes/routes.js";
import "ant-design-vue/dist/antd.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createPinia } from "pinia";

library.add(fas);
library.add(far);
library.add(fab);

const app = createApp(App);
app.use(router);
app.use(Antd);
app.use(createPinia());
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");

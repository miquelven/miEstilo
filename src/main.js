import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  IoMenuSharp,
  IoCloseSharp,
} from "oh-vue-icons/icons";

addIcons(RiFacebookBoxLine, RiInstagramLine, IoMenuSharp, IoCloseSharp);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.mount("#app");

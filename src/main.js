import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  IoMenuSharp,
  IoCloseSharp,
  BiWhatsapp,
  IoShirtOutline,
  GiArmoredPants,
  GiConverseShoe,
  GiDress,
  GiLargeDress,
  GiLabCoat,
  GiBilledCap,
  GiSkirt,
  IoShirt,
} from "oh-vue-icons/icons";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// PrimeVue
import PrimeVue from "primevue/config";

import "primevue/resources/themes/md-light-deeppurple/theme.css";

import Button from "primevue/button";
import Carousel from "primevue/carousel";

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    VBtn: {
      color: "#aaa",
      variant: "outlined",
      rounded: false,
    },
  },
});

addIcons(
  RiFacebookBoxLine,
  RiInstagramLine,
  IoMenuSharp,
  IoCloseSharp,
  BiWhatsapp,
  IoShirtOutline,
  GiArmoredPants,
  GiConverseShoe,
  GiDress,
  GiLargeDress,
  GiLabCoat,
  GiBilledCap,
  GiSkirt,
  IoShirt
);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.component("Button", Button);
app.component("Carousel", Carousel);
app.use(vuetify);
app.use(PrimeVue, {
  unstyled: true,
});
app.mount("#app");

import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

// vue icons
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
  BiArrowUpSquareFill,
} from "oh-vue-icons/icons";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

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

// PrimeVue
import PrimeVue from "primevue/config";
import "primevue/resources/themes/md-light-deeppurple/theme.css";
import Carousel from "primevue/carousel";

// add icons vue icons
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
  IoShirt,
  BiArrowUpSquareFill
);

const app = createApp(App);

// vue icons
app.component("v-icon", OhVueIcon);
// primevue
app.component("Carousel", Carousel);

app.use(vuetify);
app.use(PrimeVue, {
  unstyled: true,
});
app.mount("#app");

<script setup>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
import Banner from "./components/Banner/index.vue";
import Products from "./components/Products/index.vue";
import ProductsIconsArea from "./components/ProductsIconsArea/index.vue";
import Collections from "./components/Collections/index.vue";
import Rating from "./components/Rating/index.vue";
import About from "./components/About/index.vue";
import SocialMedia from "./components/SocialMedia/index.vue";

import { ref, onMounted, onBeforeMount } from "vue";

let showScroll = ref(false);

const userScroll = () => {
  if (window.scrollY > 1200) {
    showScroll.value = true;
  } else {
    showScroll.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", userScroll);
});
onBeforeMount(() => {
  window.removeEventListener("scroll", userScroll);
});
const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <Header />
  <main class="snap-y">
    <Banner />
    <Products />
    <ProductsIconsArea />
    <Collections />
    <Rating />
    <About />
    <SocialMedia />

    <v-button
      @click="scrollTop"
      class="transition-all duration-300 fixed bottom-16 right-10 cursor-pointer hover:scale-105 z-50 max-sm:right-4"
      :class="`${
        showScroll ? 'right-10 opacity-100' : 'right-[-100%] opacity-0'
      }`"
      :key="true"
    >
      <v-icon
        name="bi-arrow-up-square-fill"
        class="transition-all duration-300 text-[#495057] w-12 h-12 hover:text-[#293037] max-sm:w-8 max-sm:h-8"
      >
      </v-icon>
    </v-button>
  </main>
  <Footer />
</template>

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
import ScrollToTop from "./components/ScrollToTop/index.vue";
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

    <ScrollToTop />
  </main>
  <Footer />
</template>

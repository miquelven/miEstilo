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
  <div class="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50 to-accent-50">
    <Header />
    <main class="snap-y relative overflow-hidden">
      <!-- Background Decorative Elements -->
      <div class="fixed inset-0 pointer-events-none z-0">
        <div class="absolute top-20 left-10 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-float"></div>
        <div class="absolute top-96 right-20 w-96 h-96 bg-gradient-secondary opacity-10 rounded-full blur-3xl animate-float" style="animation-delay: 2s;"></div>
        <div class="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-accent opacity-10 rounded-full blur-3xl animate-float" style="animation-delay: 4s;"></div>
      </div>
      
      <div class="relative z-10">
        <Banner />
        <div class="animate-fade-in-up" style="animation-delay: 0.5s;">
          <Products />
        </div>
        <div class="animate-fade-in-up" style="animation-delay: 0.7s;">
          <ProductsIconsArea />
        </div>
        <div class="animate-fade-in-up" style="animation-delay: 0.9s;">
          <Collections />
        </div>
        <div class="animate-fade-in-up" style="animation-delay: 1.1s;">
          <Rating />
        </div>
        <div class="animate-fade-in-up" style="animation-delay: 1.3s;">
          <About />
        </div>
        <div class="animate-fade-in-up" style="animation-delay: 1.5s;">
          <SocialMedia />
        </div>
      </div>

      <ScrollToTop />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Container from "../Container/index.vue";

import womanBanner from "/images/banner/womanBanner.webp";
import shoeBanner from "/images/banner/shoeBanner.webp";
import manBanner from "/images/banner/manBanner.webp";

const data = [
  {
    img: womanBanner,
    title: "#ParaMulheres",
    subtitle: "Venda com 10% de desconto em quase tudo",
  },
  {
    img: shoeBanner,
    title: "#Acessórios",
    subtitle: "Venda com 40% de desconto em quase tudo",
  },
  {
    img: manBanner,
    title: "#ParaHomens",
    subtitle: "Venda com 10% de desconto em quase tudo",
  },
];
</script>

<template>
  <section>
    <Container>
      <div class="flex gap-4 items-center max-2xl:flex-col max-[1470]:gap-0">
        <div
          v-motion
          :initial="{ opacity: 0, y: 100, scale: 0.8 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              delay: index * 200,
              duration: 800,
              type: 'spring',
              stiffness: 100,
            },
          }"
          v-for="(infos, index) in data"
          :key="index"
          class="group h-[700px] w-1/3 bg-top bg-cover shadow-strong relative z-40 overflow-hidden rounded-3xl cursor-pointer hover-lift max-2xl:w-screen max-md:h-[500px] max-sm:h-[300px] transition-all duration-500"
          :style="{
            backgroundImage: `url('${infos.img}')`,
          }"
          :class="`${index == 0 || index == 2 ? 'mt-20' : ''}
          ${index == 0 ? 'max-md:mt-16  max-sm:mt-12' : ''}
          ${index == 2 ? 'max-2xl:mt-0' : ''}
          `"
        >
          <!-- Enhanced Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 transition-all duration-500 group-hover:from-black/95 group-hover:via-black/60"></div>
          
          <!-- Animated Overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-accent-600/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <!-- Content Container -->
          <div class="absolute inset-0 flex flex-col justify-between p-8 text-white">
            <!-- Top Badge -->
            <div class="flex justify-between items-start">
              <div class="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <span class="text-sm font-medium text-white">Novo</span>
              </div>
              
              <!-- Discount Badge -->
              <div class="bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <span class="text-sm font-bold text-white">{{ infos.subtitle.match(/\d+/)?.[0] || '10' }}% OFF</span>
              </div>
            </div>
            
            <!-- Main Content -->
            <div class="space-y-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <div class="space-y-4">
                <h3 class="font-display text-5xl font-bold max-2xl:text-6xl max-md:text-4xl max-sm:text-3xl leading-tight tracking-tight text-shadow-lg">
                  {{ infos.title }}
                </h3>
                
                <p class="font-body text-xl font-medium max-2xl:text-2xl max-md:text-lg max-sm:text-base leading-relaxed text-white/95 max-w-md">
                  {{ infos.subtitle }}
                </p>
              </div>
              
              <!-- Action Buttons -->
              <div class="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  name="whatsapp button"
                  aria-label="whatsapp button"
                  class="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-base flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg group/btn"
                >
                  <v-icon
                    name="bi-whatsapp"
                    class="h-6 w-6 transition-transform duration-300 group-hover/btn:scale-110"
                  ></v-icon>
                  <span>Falar no WhatsApp</span>
                </button>
                
                <button class="bg-white/20 backdrop-blur-md border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-white/30 hover:border-white/60 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Explorar Coleção
                </button>
              </div>
            </div>
            
            <!-- Bottom Indicator -->
            <div class="flex justify-center">
              <div class="w-1 h-8 bg-white/40 rounded-full group-hover:bg-white/60 transition-all duration-500"></div>
            </div>
          </div>
          
          <!-- Floating Elements -->
          <div class="absolute top-1/2 right-8 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
            <div class="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce-slow">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

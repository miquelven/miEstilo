<script setup>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import Container from "../Container/index.vue";

import backgroundRating from "/images/rating/ratingImg.webp";
import avatarImg from "/images/rating/ratingAvatarImg.webp";

const data = [
  {
    img: avatarImg,
    alt: "Imagem do avaliador",
    name: "Amanda Silva",
    role: "Cliente Satisfeita",
    rating: 5,
    text: "Produtos de excelente qualidade! O atendimento é impecável e a entrega foi super rápida. Recomendo muito a MiEstilo para quem busca estilo e elegância.",
  },
  {
    img: avatarImg,
    alt: "Imagem do avaliador",
    name: "Carla Santos",
    role: "Compradora Frequente",
    rating: 5,
    text: "Já comprei várias vezes e sempre fico impressionada com a qualidade. As peças são lindas e o preço é justo. Virei cliente fiel!",
  },
  {
    img: avatarImg,
    alt: "Imagem do avaliador",
    name: "Juliana Costa",
    role: "Nova Cliente",
    rating: 5,
    text: "Primeira compra e já estou apaixonada! O produto chegou exatamente como mostrado no site. Parabéns pela seriedade e profissionalismo.",
  },
];
</script>

<template>
  <section class="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" id="rating">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" :style="{ backgroundImage: `url('${backgroundRating}')`, backgroundSize: 'cover', backgroundPosition: 'center' }"></div>
    </div>
    
    <Container>
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 200,
              duration: 600,
            },
          }"
          class="text-center mb-16"
        >
          <h2 class="text-4xl font-bold text-gray-900 mb-4 max-lg:text-3xl max-sm:text-2xl">
            O Que Nossos Clientes Dizem
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Depoimentos reais de quem já experimentou a qualidade e o estilo da MiEstilo
          </p>
        </div>

        <!-- Reviews Carousel -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 400,
              duration: 600,
            },
          }"
          id="ratingArea"
          class="relative"
        >
          <Carousel
            :wrapAround="true"
            :transition="800"
            :itemsToShow="1"
            :autoplay="5000"
            :navigationEnabled="true"
            class="w-full"
          >
            <Slide v-for="(review, index) in data" :key="index">
              <div class="px-4">
                <div class="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto relative overflow-hidden">
                  <!-- Decorative Elements -->
                  <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                  <div class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary-100 to-primary-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
                  
                  <div class="relative z-10">
                    <!-- Quote Icon -->
                    <div class="flex justify-center mb-6">
                      <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                        </svg>
                      </div>
                    </div>

                    <!-- Review Content -->
                    <div class="text-center mb-8">
                      <p class="text-lg text-gray-700 leading-relaxed mb-6 italic max-w-3xl mx-auto">
                        "{{ review.text }}"
                      </p>
                      
                      <!-- Star Rating -->
                      <div class="flex justify-center gap-1 mb-6">
                        <svg
                          v-for="star in review.rating"
                          :key="star"
                          class="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                    </div>

                    <!-- Customer Info -->
                    <div class="flex items-center justify-center gap-4">
                      <div class="relative">
                        <div class="w-16 h-16 rounded-full overflow-hidden ring-4 ring-primary-100">
                          <img
                            :src="review.img"
                            :alt="review.alt"
                            class="w-full h-full object-cover"
                          />
                        </div>
                        <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        </div>
                      </div>
                      
                      <div class="text-left">
                        <h4 class="font-semibold text-gray-900 text-lg">
                          {{ review.name }}
                        </h4>
                        <p class="text-primary-600 font-medium text-sm">
                          {{ review.role }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
            
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>

        <!-- Trust Indicators -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 600,
              duration: 600,
            },
          }"
          class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div class="text-center">
            <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Qualidade Garantida</h3>
            <p class="text-gray-600 text-sm">Produtos selecionados com o mais alto padrão de qualidade</p>
          </div>
          
          <div class="text-center">
            <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Entrega Rápida</h3>
            <p class="text-gray-600 text-sm">Receba seus produtos com agilidade e segurança</p>
          </div>
          
          <div class="text-center">
            <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Atendimento Especial</h3>
            <p class="text-gray-600 text-sm">Suporte personalizado para uma experiência única</p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style>
#ratingArea .carousel__prev,
#ratingArea .carousel__next {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

#ratingArea .carousel__prev:hover,
#ratingArea .carousel__next:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

#ratingArea .carousel__prev {
  left: -60px;
}

#ratingArea .carousel__next {
  right: -60px;
}

@media (max-width: 768px) {
  #ratingArea .carousel__prev {
    left: 10px;
  }
  
  #ratingArea .carousel__next {
    right: 10px;
  }
}
</style>

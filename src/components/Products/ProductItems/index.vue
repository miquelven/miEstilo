<template>
  <Carousel
    v-motion
    :initial="{ opacity: 0 }"
    :visible-once="{
      opacity: 1,
      transition: {
        duration: 500,
        delay: 700,
      },
    }"
    v-bind="settings"
    :breakpoints="breakpoints"
    :wrapAround="true"
    :transition="500"
    :autoplay="4000"
    class="flex flex-col gap-5 w-full"
  >
    <Slide v-for="(product, index) in data.products" :key="index">
      <div class="group relative mx-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
        <!-- Product Image -->
        <div class="relative aspect-[4/5] overflow-hidden">
          <img
            :src="product.img"
            alt="imagem do produto"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          
          <!-- Discount Badge -->
          <div
            v-if="product.discount"
            class="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold"
          >
            -{{ product.discount }}%
          </div>
          
          <!-- WhatsApp Button -->
          <button
            class="absolute top-3 left-3 w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Contato via WhatsApp"
          >
            <v-icon name="bi-whatsapp" class="w-5 h-5"></v-icon>
          </button>
        </div>
        
        <!-- Product Info -->
        <div class="p-4">
          <h4 class="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {{ product.name }}
          </h4>
          
          <div class="flex items-center gap-2">
            <span class="text-xl font-bold text-gray-900">
              R$ {{ product.price }},00
            </span>
            <span
              v-if="product.price !== product.totalPrice"
              class="text-sm text-gray-500 line-through"
            >
              R$ {{ product.totalPrice }},00
            </span>
          </div>
          
          <!-- Add to Cart Button -->
          <button class="w-full mt-3 bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors duration-300 text-sm font-medium">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import Container from "../../Container/index.vue";

import camisa from "/images/products/camisa.webp";
import calçaPreta from "/images/products/calça-preta.webp";
import moletomPreto from "/images/products/moletom-preto.webp";
import calçaCamuflada from "/images/products/calça-camuflada.webp";
import short from "/images/products/short.webp";
import moletom from "/images/products/moletom.webp";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
    Container,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    breakpoints: {
      550: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      1024: {
        itemsToShow: 3,
        snapAlign: "center",
      },
    },
    data: {
      products: [
        {
          img: camisa,
          name: "Camisa Branca",
          totalPrice: 80,
          price: 40,
          discount: 50,
        },
        {
          img: calçaPreta,
          name: "Calça Esportiva",
          totalPrice: 50,
          price: 50,
          discount: 0,
        },
        {
          img: moletomPreto,
          name: "Moletom ",
          totalPrice: 140,
          price: 100,
          discount: 30,
        },
        {
          img: calçaCamuflada,
          name: "Calça Camuflada",
          totalPrice: 120,
          price: 120,
          discount: 0,
        },
        {
          img: short,
          name: "Short",
          totalPrice: 30,
          price: 20,
          discount: 35,
        },
        {
          img: moletom,
          name: "Moletom",
          totalPrice: 100,
          price: 80,
          discount: 20,
        },
      ],
    },
  }),
});
</script>

<style>
.carousel__pagination-button {
  padding: 6px !important;
  margin: 0 4px !important;
}

.carousel__pagination-button::after {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #d1d5db;
  transition: all 0.3s ease;
}

.carousel__pagination-button--active::after {
  background-color: #374151;
  transform: scale(1.2);
}

.carousel__prev,
.carousel__next {
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  height: 48px;
  width: 48px;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.carousel__prev:hover,
.carousel__next:hover {
  background-color: #374151;
  border-color: #374151;
  color: #fff;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.carousel__icon {
  width: 20px;
  height: 20px;
}

/* Line clamp utility */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

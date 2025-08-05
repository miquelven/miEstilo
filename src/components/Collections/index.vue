<script setup>
import Container from "../Container/index.vue";

import { ref } from "vue";

import milimalistCollection from "/images/collections/minimalistCollection.webp";
import fashionCollection from "/images/collections/fashionCollection.webp";

const data = [
  {
    img: milimalistCollection,
    alt: "Imagem da coleção minimalista",
    title: "Coleção Minimalista",
    list: [
      "Explore a elegância da simplicidade com nossa coleção",
      "Descubra itens-chave para um guarda-roupa minimalista",
      "Paleta neutra, tecidos de alta qualidade",
    ],
    discount: 70,
  },
  {
    img: fashionCollection,
    alt: "Imagem da coleção fashion",
    title: "Coleção Fashion",
    list: [
      "Explore a moda feminina com nossa coleção única",
      "Detalhes inovadores, design elegante e sofisticado",
      "Inspiração para criar looks femininos deslumbrantes",
    ],
    discount: 50,
  },
];
</script>

<template>
  <section class="py-20 bg-gray-50">
    <Container>
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4 max-lg:text-3xl max-sm:text-2xl">
          Nossas Coleções
        </h2>
        <p class="text-lg text-gray-600 max-lg:text-base max-sm:text-sm">
          Descubra coleções exclusivas criadas especialmente para você
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              delay: index * 200 + 300,
              duration: 600,
            },
          }"
          v-for="(collection, index) in data"
          :key="index"
          class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <!-- Discount Badge -->
          <div class="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            -{{ collection.discount }}%
          </div>

          <div class="md:flex">
            <!-- Image -->
            <div class="md:w-1/2 relative overflow-hidden">
              <img
                :src="collection.img"
                :alt="collection.alt"
                class="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <!-- Content -->
            <div class="md:w-1/2 p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6 max-lg:text-xl">
                {{ collection.title }}
              </h3>

              <ul class="space-y-4 mb-8">
                <li v-for="(item, itemIndex) in collection.list" :key="itemIndex" class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-gray-700 leading-relaxed max-lg:text-sm">{{ item }}</span>
                </li>
              </ul>

              <button class="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg transition-colors duration-300 font-medium">
                Ver Coleção
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

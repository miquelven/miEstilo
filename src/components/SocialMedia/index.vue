<script setup>
import Container from "../Container/index.vue";

import camisa from "/images/socialMedia/camisa.webp";
import calçaCinza from "/images/socialMedia/calçaCinza.webp";
import tenisVerde from "/images/socialMedia/tenisVerde.webp";
import regataBranca from "/images/socialMedia/regataBranca.webp";
import moletomVermelho from "/images/socialMedia/moletomVermelho.webp";
import bermuda from "/images/socialMedia/bermuda.webp";

const data = [
  {
    img: camisa,
    alt: "Imagem de uma camisa",
  },
  {
    img: calçaCinza,
    alt: "Imagem de uma calça",
  },
  {
    img: tenisVerde,
    alt: "Imagem de uma tenis",
  },
  {
    img: regataBranca,
    alt: "Imagem de uma regata",
  },
  {
    img: moletomVermelho,
    alt: "Imagem de uma moletom",
  },
  {
    img: bermuda,
    alt: "Imagem de uma bermuda",
  },
];
</script>

<template>
  <section class="py-20 bg-white" id="contact">
    <Container>
      <div class="max-w-4xl mx-auto">
        <!-- Contact Info -->
        <div class="text-center mb-16">
          <h2
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
            class="text-4xl font-bold text-gray-900 mb-6 max-lg:text-3xl max-sm:text-2xl"
          >
            Entre em Contato
          </h2>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              transition: {
                delay: 400,
                duration: 600,
              },
            }"
            class="space-y-4 text-lg text-gray-600 max-sm:text-base"
          >
            <p>Rua das Flores, Jardim Primavera, 12345-678, São Miguel das Almas</p>
            <p class="font-semibold">(99) 1234-5678</p>
          </div>
        </div>

        <!-- Product Gallery -->
        <div class="mb-16">
          <h3
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
            class="text-2xl font-bold text-gray-900 text-center mb-8 max-lg:text-xl"
          >
            Nossos Produtos em Destaque
          </h3>
          
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :visible-once="{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 800 + index * 100,
                  duration: 400,
                },
              }"
              v-for="(product, index) in data"
              :key="index"
              class="group relative bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            >
              <img
                :src="product.img"
                :alt="product.alt"
                class="w-full h-24 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <!-- Social Media CTA -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1200,
              duration: 600,
            },
          }"
          class="text-center bg-gray-50 rounded-2xl p-8"
        >
          <h4 class="text-2xl font-bold text-gray-900 mb-4 max-lg:text-xl">
            Siga-nos no Instagram
          </h4>
          <p class="text-gray-600 mb-6">
            Fique por dentro das novidades e tendências
          </p>
          <a
            href="https://instagram.com/miestilo"
            target="_blank"
            class="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @miestilo
          </a>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from "../Container/index.vue";

import { ref } from "vue";

import milimalistCollection from "/public/images/collections/minimalistCollection.webp";

import fashionCollection from "/public/images/collections/fashionCollection.webp";

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
  <section class="my-60">
    <Container>
      <div class="flex gap-16 max-2xl:gap-8 max-lg:flex-col">
        <div
          v-motion
          :initial="{ scale: 0, opacity: 0 }"
          :visible-once="{
            scale: 1,
            opacity: 1,
            transition: {
              delay: 300,
              duration: 1000,
            },
          }"
          v-for="(collection, index) in data"
          :key="index"
          class="relative p-7 bg-[#d9d9d9] shadow-md shadow-black/40 rounded-md flex gap-12 max-sm:flex-col max-sm:gap-2"
        >
          <img
            :src="collection.img"
            :alt="collection.alt"
            class="w-[250px] h-[450px] shadow-sm shadow-black rounded-md object-cover max-2xl:w-[200px] max-2xl:h-[400px] max-xl:w-[150px] max-xl:h-[350px] max-lg:w-[300px] max-lg:object-top max-md:w-[200px] max-sm:w-[100px] max-sm:h-[100px] max-sm:mx-auto"
          />
          <div
            class="flex text-black flex-col gap-16 mt-5 max-xl:mt-0 max-xl:gap-10 max-sm:text-center"
          >
            <h5
              class="font-medium text-2xl max-xl:text-xl max-lg:text-3xl max-md:text-2xl max-sm:text-lg"
            >
              {{ collection.title }}
            </h5>

            <ul class="flex flex-col gap-7 max-lg:gap-12 max-md:gap-7">
              <li v-for="(item, itemIndex) in collection.list" :key="itemIndex">
                <span class="max-xl:text-sm max-sm:text-xs">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- discount -->
          <div
            class="absolute sm:bottom-0 sm:right-0 px-4 py-1 text-white bg-[#284b63] rounded-md max-sm:top-0 max-sm:right-0"
          >
            <span class="font-medium max-xl:text-sm"
              >{{ collection.discount }}%</span
            >
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from "../Container/index.vue";

import { ref } from "vue";

const camisa = ref("../../../public/images/socialMedia/camisa.webp");
const calçaCinza = ref("../../../public/images/socialMedia/calçaCinza.webp");
const tenisVerde = ref("../../../public/images/socialMedia/tenisVerde.webp");
const regataBranca = ref(
  "../../../public/images/socialMedia/regataBranca.webp"
);
const moletomVermelho = ref(
  "../../../public/images/socialMedia/moletomVermelho.webp"
);
const bermuda = ref("../../../public/images/socialMedia/bermuda.webp");

const data = [
  {
    img: camisa,
    color: "#D9D9D9",
    alt: "Imagem de uma camisa",
  },
  {
    img: calçaCinza,
    color: "#DFD2AF",
    alt: "Imagem de uma calça",
  },
  {
    img: tenisVerde,
    color: "#B9DFAF",
    alt: "Imagem de uma tenis",
  },
  {
    img: regataBranca,
    color: "#AFDADF",
    alt: "Imagem de uma regata",
  },
  {
    img: moletomVermelho,
    color: "#B0AFDF",
    alt: "Imagem de uma moletom",
  },
  {
    img: bermuda,
    color: "#DFAFAF",
    alt: "Imagem de uma bermuda",
  },
];
</script>

<template>
  <section class="mt-64 mb-60" id="contact">
    <Container>
      <div class="flex flex-col justify-center items-center">
        <div
          v-motion
          :initial="{ opacity: 0 }"
          :visible-once="{
            opacity: 1,
            transition: {
              delay: 800,
              duration: 400,
            },
          }"
          class="flex text-lg flex-col gap-3 text-center font-semibold max-sm:text-sm max-sm:gap-5"
        >
          <p>
            Rua das Flores, Jardim Primavera, 12345-678, São Miguel das Almas
          </p>
          <p>(99) 1234-5678</p>
        </div>

        <div
          class="flex w-full mt-8 relative justify-center min-w-96 max-lg:flex-wrap"
        >
          <div
            v-motion
            :initial="{ opacity: 0, y: index % 2 == 0 ? 50 : -50 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              transition: {
                delay: 100 * index,
                duration: 400,
              },
            }"
            v-for="(infos, index) in data"
            :key="index"
            class="flex-1 max-w-[300px] h-60 flex justify-center items-center shadow-md shadow-gray-300 min-w-40 max-lg:h-40"
            :style="{ backgroundColor: infos.color }"
          >
            <img
              :src="infos.img.value"
              :alt="infos.alt"
              class="w-40 max-lg:w-24 max-sm:w-20"
            />
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 200 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1100,
                duration: 400,
              },
            }"
            class="absolute -bottom-10 flex justify-center items-center w-full max-lg:bottom-0"
          >
            <div
              class="text-center w-[calc(33%-20px)] py-3 shadow-md shadow-gray-400 bg-white flex flex-col gap-2 max-lg:w-full max-lg:translate-x-0 max-lg:translate-y-[100%] max-sm:border-b-2 max-sm:border-gray-200 max-sm:shadow-none"
            >
              <h6 class="text-xl max-lg:text-lg max-sm:text-base">
                Nos siga no instagram
              </h6>
              <span
                class="text-[#353535] font-semibold max-lg:text-sm max-sm:text-xs"
                >@miestilo</span
              >
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import Container from "../Container/index.vue";

const data = [
  {
    img: "../../../public/images/socialMedia/camisa.png",
    color: "#D9D9D9",
    alt: "Imagem de uma camisa",
  },
  {
    img: "../../../public/images/socialMedia/calçaCinza.png",
    color: "#DFD2AF",
    alt: "Imagem de uma calça",
  },
  {
    img: "../../../public/images/socialMedia/tenisVerde.png",
    color: "#B9DFAF",
    alt: "Imagem de uma tenis",
  },
  {
    img: "../../../public/images/socialMedia/regataBranca.png",
    color: "#AFDADF",
    alt: "Imagem de uma regata",
  },
  {
    img: "../../../public/images/socialMedia/moletomVermelho.png",
    color: "#B0AFDF",
    alt: "Imagem de uma moletom",
  },
  {
    img: "../../../public/images/socialMedia/bermuda.png",
    color: "#DFAFAF",
    alt: "Imagem de uma bermuda",
  },
];
</script>

<template>
  <section class="mt-20 mb-40">
    <Container>
      <div class="flex flex-col justify-center items-center">
        <div
          class="flex flex-col gap-7 text-center font-medium max-sm:text-sm max-sm:gap-5"
        >
          <p>
            Rua das Flores, Jardim Primavera, 12345-678, São Miguel das Almas
          </p>
          <p>(99) 1234-5678</p>
        </div>

        <div
          class="flex w-full mt-16 relative justify-center min-w-96 max-lg:flex-wrap"
        >
          <div
            v-for="(infos, index) in data"
            :key="index"
            class="flex-1 max-w-[300px] h-60 flex justify-center items-center shadow-md shadow-gray-300 min-w-40 max-lg:h-40"
            :style="{ backgroundColor: infos.color }"
          >
            <img
              :src="infos.img"
              :alt="infos.alt"
              class="w-40 max-lg:w-24 max-sm:w-20"
            />
          </div>

          <div
            class="text-center w-[calc(33%-20px)] py-3 shadow-md shadow-gray-400 absolute bottom-0 left-0 translate-x-[108%] translate-y-[50%] bg-white flex flex-col gap-4 max-lg:w-full max-lg:translate-x-0 max-lg:translate-y-[100%] max-sm:border-b-2 max-sm:border-gray-200 max-sm:shadow-none"
          >
            <h6 class="text-xl font-semibold max-lg:text-lg max-sm:text-base">
              Nos siga no instagram
            </h6>
            <span
              class="text-[#B9B9B9] font-medium max-lg:text-sm max-sm:text-xs"
              >@miestilo</span
            >
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

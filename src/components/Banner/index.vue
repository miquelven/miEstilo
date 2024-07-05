<script setup>
import Container from "../Container/index.vue";
import { ref } from "vue";

const womanBanner = ref("/public/images/banner/womanBanner.webp");
const shoeBanner = ref("/public/images/banner/shoeBanner.webp");
const manBanner = ref("/public/images/banner/manBanner.webp");

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
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              delay: index * 400,
              duration: 500,
            },
          }"
          v-for="(infos, index) in data"
          :key="index"
          class="h-[700px] w-1/3 bg-top bg-cover shadow-md shadow-gray-400 relative z-40 before:content-[''] before:w-full before:h-full before:transition-all before:duration-300 before:absolute before:inset-0 before:bg-black/20 before:hover:bg-black/60 max-2xl:w-screen max-md:h-[500px] max-sm:h-[300px]"
          :style="{
            backgroundImage: `url('${infos.img.value}')`,
          }"
          :class="`${index == 0 || index == 2 ? 'mt-20' : ''}
          ${index == 0 ? 'max-md:mt-16  max-sm:mt-12' : ''}
          ${index == 2 ? 'max-2xl:mt-0' : ''}
          `"
        >
          <div
            class="absolute bottom-6 left-0 right-0 px-4 flex flex-col gap-4 text-white"
          >
            <h3
              class="text-3xl font-semibold max-2xl:text-5xl max-md:text-3xl max-sm:text-2xl"
            >
              {{ infos.title }}
            </h3>
            <p
              class="text-sm font-medium max-2xl:text-lg max-md:text-sm max-sm:text-xs"
            >
              {{ infos.subtitle }}
            </p>
            <button
              name="whatsapp button"
              aria-label="whatsapp button"
              class="transition-all duration-300 flex justify-center items-center py-2 w-32 border-2 border-transparent hover:border-[#D9D9D9] bg-[#353535] hover:bg-[#535353] max-sm:w-24"
            >
              <v-icon
                name="bi-whatsapp"
                class="h-6 w-6 max-sm:h-4 max-sm:w-4"
              ></v-icon>
            </button>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

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
      <v-card
        class="relative m-2 pt-10 w-[320px] h-[384px] max-lg:w-[280px] max-lg:h-[344px] max-md:w-[220px] max-md:h-[284px]"
        elevation="4"
      >
        <!-- whatsapp button -->
        <v-btn
          v-bind:name="'whatsapp button product'"
          v-bind:aria-label="'whatsapp button product'"
          variant="outlined"
          color="#3c6e71"
          style="position: absolute; top: 0; left: 0"
          class="max-md:scale-90"
        >
          <v-icon
            name="bi-whatsapp"
            class="h-6 w-6 text-[#3c6e71] max-md:h-5 max-md:w-5"
          ></v-icon>
        </v-btn>

        <!-- discount -->

        <v-card
          v-if="product.discount"
          color="#284b63"
          class="w-14 h-7 text-white flex justify-center items-center max-md:w-11 max-md:h-7"
          style="position: absolute; top: 0; right: 0"
        >
          <span
            class="text-center w-full h-full inline-block font-semibold max-md:text-xs"
            >{{ product.discount }}%</span
          >
        </v-card>

        <img
          :src="product.img"
          alt="imagem do produto"
          class="h-[242px] flex-1 object-cover object-center mx-auto max-lg:h-[200px] max-md:h-[150px] max-sm:h-[120px] max-sm:mt-5"
        />
        <div class="flex flex-col gap-2 absolute bottom-4 left-0 w-full">
          <h4
            class="text-center text-xl font-semibold max-lg:text-lg max-md:text-base"
          >
            {{ product.name }}
          </h4>
          <div
            class="flex gap-3 justify-center items-center font-medium max-lg:text-sm max-md:text-xs"
          >
            <span> R${{ product.price }},00 </span>

            <span
              v-if="product.price !== product.totalPrice"
              class="text-[#aaa]"
            >
              R${{ product.totalPrice }},00
            </span>
          </div>
        </div>
      </v-card>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import Container from "../../Container/index.vue";

const camisa = ref("../../../../public/images/products/camisa.webp");
const calçaPreta = ref("../../../../public/images/products/calça-preta.webp");
const moletomPreto = ref(
  "../../../../public/images/products/moletom-preto.webp"
);
const calçaCamuflada = ref(
  "../../../../public/images/products/calça-camuflada.webp"
);
const short = ref("../../../../public/images/products/short.webp");
const moletom = ref("../../../../public/images/products/moletom.webp");

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
          img: camisa.value,
          name: "Camisa Branca",
          totalPrice: 80,
          price: 40,
          discount: 50,
        },
        {
          img: calçaPreta.value,
          name: "Calça Esportiva",
          totalPrice: 50,
          price: 50,
          discount: 0,
        },
        {
          img: moletomPreto.value,
          name: "Moletom ",
          totalPrice: 140,
          price: 100,
          discount: 30,
        },
        {
          img: calçaCamuflada.value,
          name: "Calça Camuflada",
          totalPrice: 120,
          price: 120,
          discount: 0,
        },
        {
          img: short.value,
          name: "Short",
          totalPrice: 30,
          price: 20,
          discount: 35,
        },
        {
          img: moletom.value,
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
.v-card--variant-elevated {
  box-shadow: none !important;
}

.carousel__pagination-button {
  padding: 8px !important;
}

.carousel__pagination-button::after {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

.carousel__prev,
.carousel__next {
  background-color: #d9d9d9;
  height: 52px;
  width: 40px;
  border-radius: 4px;
  transition: all ease 300ms;
}

.carousel__prev:hover,
.carousel__next:hover {
  background-color: #aaaaaa;
  color: #fff;
}
</style>

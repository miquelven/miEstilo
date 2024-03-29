<template>
  <Carousel
    v-bind="settings"
    :breakpoints="breakpoints"
    :wrapAround="true"
    :transition="500"
    :autoplay="4000"
    class="flex flex-col gap-5 w-full"
  >
    <Slide v-for="(product, index) in data.products" :key="index">
      <v-card
        class="relative pt-10 w-[320px] h-[384px] max-lg:w-[280px] max-lg:h-[344px] max-md:w-[220px] max-md:h-[284px]"
      >
        <!-- whatsapp button -->
        <v-btn
          variant="outlined"
          color="#50af29"
          style="position: absolute; top: 0; left: 0"
          class="max-md:scale-90"
        >
          <v-icon
            name="bi-whatsapp"
            class="h-6 w-6 text-[#50af29] max-md:h-5 max-md:w-5"
          ></v-icon>
        </v-btn>

        <!-- discount button -->

        <v-card
          v-if="product.discount"
          color="#D77A61"
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
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import Container from "../../Container/index.vue";

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
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      500: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: "center",
      },
    },
    data: {
      products: [
        {
          img: "../../../../public/images/products/camisa.png",
          name: "Camisa Branca",
          totalPrice: 80,
          price: 40,
          discount: 50,
        },
        {
          img: "../../../../public/images/products/calça-preta.jpg",
          name: "Calça Esportiva",
          totalPrice: 50,
          price: 50,
          discount: 0,
        },
        {
          img: "../../../../public/images/products/moletom-preto.png",
          name: "Moletom ",
          totalPrice: 140,
          price: 100,
          discount: 30,
        },
        {
          img: "../../../../public/images/products/calça-camuflada.png",
          name: "Calça Camuflada",
          totalPrice: 120,
          price: 120,
          discount: 0,
        },
        {
          img: "../../../../public/images/products/short.png",
          name: "Short",
          totalPrice: 30,
          price: 20,
          discount: 35,
        },
        {
          img: "../../../../public/images/products/moletom.png",
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
</style>

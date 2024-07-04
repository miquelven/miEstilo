<script setup>
import { Carousel, Navigation, Slide } from "vue3-carousel";

import { ref } from "vue";

const backgroundRating = ref("../../../public/images/rating/ratingImg.webp");
const avatarImg = ref("../../../public/images/rating/ratingAvatarImg.webp");

const data = [
  {
    img: avatarImg.value,
    alt: "Imagem do avaliador",
    name: "Amanda Silva",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie ex sit amet justo facilisis vestibulum. Fusce metus turpis, fringilla in faucibus et, ultricies ut justo.",
  },
  {
    img: avatarImg.value,
    alt: "Imagem do avaliador",
    name: "Amanda Silva",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie ex sit amet justo facilisis vestibulum. Fusce metus turpis, fringilla in faucibus et, ultricies ut justo.",
  },
  {
    img: avatarImg.value,
    alt: "Imagem do avaliador",
    name: "Amanda Silva",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie ex sit amet justo facilisis vestibulum. Fusce metus turpis, fringilla in faucibus et, ultricies ut justo.",
  },
];
</script>

<template>
  <section class="py-40" id="rating">
    <v-parallax class="h-[400px]" :src="backgroundRating">
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{
          opacity: 1,
          transition: {
            delay: 600,
            duration: 400,
          },
        }"
        class="text-white max-w-screen-md mx-auto"
      >
        <div id="ratingArea" class="flex justify-center items-center h-[400px]">
          <Carousel
            max-width="500px"
            :wrapAround="true"
            :transition="1500"
            :itemsToShow="1"
            :autoplay="4000"
            :navigationEnabled="true"
            class="flex flex-col gap-5 w-full"
          >
            <Slide v-for="(infos, index) in data" :key="index">
              <div
                class="flex gap-10 items-center max-md:flex-col max-md:items-start max-md:gap-1 max-sm:items-center max-sm:px-6"
              >
                <div
                  class="bg-[#B9B9B9] brightness-110 h-32 w-32 flex flex-col justify-end items-center max-md:h-24 max-md:w-24 max-sm:mb-20"
                >
                  <img
                    :src="infos.img"
                    :alt="infos.alt"
                    class="h-28 object-cover object-center max-md:h-20"
                  />
                </div>
                <div
                  class="h-9 w-1 bg-[#b9b9b9] brightness-110 self-start max-md:rotate-90 max-md:ml-4 max-sm:hidden"
                ></div>
                <div class="flex flex-col text-start gap-5 max-w-96">
                  <h6 class="text-xl font-semibold max-md:text-lg">
                    {{ infos.name }}
                  </h6>
                  <p class="text-sm font-light max-md:text-xs">
                    {{ infos.text }}
                  </p>
                </div>
              </div>
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>
    </v-parallax>
  </section>
</template>

<style>
#ratingArea .carousel__prev,
#ratingArea .carousel__next {
  border: 1px solid #d9d9d9;
  background-color: transparent;
  height: 44px;
  width: 30px;
  border-radius: 4px;
  transition: all ease 300ms;
}

#ratingArea .carousel__prev:hover,
#ratingArea .carousel__next:hover {
  color: white;
  background: #c1c1c13b;
  border-color: transparent;
}
</style>

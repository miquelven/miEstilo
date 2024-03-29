<script setup>
import Container from "../Container/index.vue";
import womanHome from "../../../public/images/womanHome.webp";
import shoeHome from "../../../public/images/shoeHome.webp";
import manHome from "../../../public/images/manHome.webp";
</script>

<template>
  <section>
    <Container>
      <div class="flex gap-4 items-center max-2xl:flex-col max-[1470]:gap-0">
        <div
          class="h-[700px] w-1/3 bg-top bg-cover shadow-md shadow-gray-400 mt-20 relative z-40 before:content-[''] before:w-full before:h-full before:transition-all before:duration-300 before:absolute before:inset-0 before:bg-black/20 before:hover:bg-black/60 max-2xl:w-screen max-md:h-[500px] max-md:mt-16 max-sm:h-[300px] max-sm:mt-12"
          :style="{ backgroundImage: `url('${womanHome}')` }"
        >
          <div
            class="absolute bottom-6 left-0 right-0 px-4 flex flex-col gap-4 text-white"
          >
            <h3
              class="text-3xl font-semibold max-2xl:text-5xl max-md:text-3xl max-sm:text-2xl"
            >
              #ParaMulheres
            </h3>
            <p
              class="text-sm font-medium max-2xl:text-lg max-md:text-sm max-sm:text-xs"
            >
              Venda com 10% de desconto em quase tudo
            </p>
            <button
              class="transition-all duration-300 flex justify-center items-center py-2 w-32 border-2 border-transparent hover:border-[#D9D9D9] bg-black/40 hover:bg-transparent max-sm:w-24"
            >
              <v-icon
                name="bi-whatsapp"
                class="h-6 w-6 text-white max-sm:h-4 max-sm:w-4"
              ></v-icon>
            </button>
          </div>
        </div>

        <div
          class="h-[700px] w-1/3 bg-top bg-cover shadow-md shadow-gray-400 relative before:content-[''] before:w-full before:h-full before:transition-all before:duration-300 before:absolute before:inset-0 before:bg-black/20 before:hover:bg-black/60 max-2xl:w-screen max-md:h-[500px] max-sm:h-[300px]"
          :style="{ backgroundImage: `url('${shoeHome}')` }"
        >
          <div
            class="absolute bottom-6 left-0 right-0 px-4 flex flex-col gap-4 text-white"
          >
            <h3
              class="text-3xl font-semibold max-2xl:text-5xl max-md:text-3xl max-sm:text-2xl"
            >
              #Acessórios
            </h3>
            <p
              class="text-sm font-medium max-2xl:text-lg max-md:text-sm max-sm:text-xs"
            >
              Venda com 40% de desconto em quase tudo
            </p>
            <button
              class="transition-all duration-300 flex justify-center items-center py-2 w-32 border-2 border-transparent hover:border-[#D9D9D9] bg-black/40 hover:bg-transparent max-sm:w-24"
            >
              <v-icon
                name="bi-whatsapp"
                class="h-6 w-6 text-white max-sm:h-4 max-sm:w-4"
              ></v-icon>
            </button>
          </div>
        </div>

        <div
          class="h-[700px] w-1/3 bg-top bg-cover shadow-md shadow-gray-400 mt-20 relative before:content-[''] before:w-full before:h-full before:transition-all before:duration-300 before:absolute before:inset-0 before:bg-black/20 before:hover:bg-black/60 max-2xl:w-screen max-2xl:mt-0 max-md:h-[500px] max-sm:h-[300px]"
          :style="{ backgroundImage: `url('${manHome}')` }"
        >
          <div
            class="absolute bottom-6 left-0 right-0 px-4 flex flex-col gap-4 text-white"
          >
            <h3
              class="text-3xl font-semibold max-2xl:text-5xl max-md:text-3xl max-sm:text-2xl"
            >
              #ParaHomens
            </h3>
            <p
              class="text-sm font-medium max-2xl:text-lg max-md:text-sm max-sm:text-xs"
            >
              Venda com 10% de desconto em quase tudo
            </p>
            <button
              class="transition-all duration-300 flex justify-center items-center py-2 w-32 border-2 border-transparent hover:border-[#D9D9D9] bg-black/40 hover:bg-transparent max-sm:w-24"
            >
              <v-icon
                name="bi-whatsapp"
                class="h-6 w-6 text-white max-sm:h-4 max-sm:w-4"
              ></v-icon>
            </button>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup>
import { ref } from "vue";

import Container from "../Container/index.vue";

const showMenu = ref(false);
</script>

<template>
  <header
    class="w-full py-3 bg-[#D9D9D9] relative"
    :class="[showMenu ? 'overflow-visible' : 'overflow-hidden']"
  >
    <Container>
      <div class="flex justify-between items-center relative">
        <img
          src="/public/images/logo.png"
          alt="Imagem da logo"
          class="w-16 max-sm:w-12 max-[420px]:w-10"
        />

        <nav
          class="transition-all duration-300 max-md:absolute max-md:top-[80px] max-md:flex max-md:justify-center max-sm:top-16 max-[420px]:top-14"
          :class="[
            showMenu
              ? '-left-10 bg-[#D9D9D9] w-screen'
              : 'left-[-100vw] bg-transparent',
          ]"
        >
          <ul
            class="transition-all duration-300 flex gap-8 font-medium max-md:py-3 max-md:gap-10 max-sm:text-xs max-[420px]:px-3 max-[420px]:text-[.625rem]"
          >
            <li
              class="transition-all duration-300 hover:text-[#495057] cursor-pointer hover:scale-95"
            >
              <a href="#products"> Produtos </a>
            </li>
            <li
              class="transition-all duration-300 hover:text-[#495057] cursor-pointer hover:scale-95"
            >
              <a href="#rating"></a>
              Avaliações
            </li>
            <li
              class="transition-all duration-300 hover:text-[#495057] cursor-pointer hover:scale-95"
            >
              <a href="#about"> Sobre </a>
            </li>
            <li
              class="transition-all duration-300 hover:text-[#495057] cursor-pointer hover:scale-95"
            >
              <a href="#contact"> Contato </a>
            </li>
          </ul>
        </nav>

        <button
          class="md:hidden"
          @click="
            () => {
              showMenu = !showMenu;
            }
          "
        >
          <v-icon
            :name="[showMenu ? 'io-close-sharp' : 'io-menu-sharp']"
            class="transition-all duration-300 w-8 h-8 cursor-pointer hover:scale-105 max-sm:w-6 max-sm:h-6 max-[420px]:h-5 mx-[420px]:w-5"
          />
        </button>

        <div class="flex gap-4 max-md:hidden">
          <v-icon
            name="ri-facebook-box-line"
            class="transition-all duration-300 w-8 h-8 text-[#495057] hover:text-black cursor-pointer"
          />
          <v-icon
            name="ri-instagram-line"
            class="transition-all duration-300 w-8 h-8 text-[#495057] hover:text-black cursor-pointer"
          />
        </div>
      </div>
    </Container>
  </header>
</template>

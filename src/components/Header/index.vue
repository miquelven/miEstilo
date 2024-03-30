<script setup>
import { ref } from "vue";

import logo from "../../../public/images/logo.webp";

import Container from "../Container/index.vue";
import Links from "./Links/index.vue";
import Icons from "../Icons/index.vue";

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
          :src="logo"
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
            <Links />
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
          <Icons />
        </div>
      </div>
    </Container>
  </header>
</template>

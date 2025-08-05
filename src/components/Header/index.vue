<script setup>
import { ref } from "vue";

import logo from "/images/logo.webp";

import Container from "../Container/index.vue";
import Links from "./Links/index.vue";
import Icons from "../Icons/index.vue";

const showMenu = ref(false);
</script>

<template>
  <header
    v-motion
    :initial="{ opacity: 0, y: -50 }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 800,
        type: 'spring',
        stiffness: 100,
      },
    }"
    class="w-full py-6 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 relative z-50 transition-all duration-300 shadow-lg"
    :class="[showMenu ? 'overflow-visible shadow-2xl' : 'overflow-hidden']"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-gradient-to-r from-primary-50/30 to-accent-50/30 opacity-50"></div>
    
    <Container>
      <div class="flex justify-between items-center relative z-10">
        <!-- Logo Section -->
        <div class="flex items-center gap-4 hover-lift cursor-pointer group">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-300 scale-110"></div>
            <img
              :src="logo"
              alt="MiEstilo Logo"
              class="w-24 max-sm:w-20 max-[420px]:w-16 transition-all duration-300 group-hover:scale-110 animate-float relative z-10"
            />
          </div>
          <div class="hidden sm:block">
            <h1 class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              MiEstilo
            </h1>
            <p class="text-xs text-gray-500 font-medium">Moda & Estilo</p>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:block">
          <ul class="flex gap-8 font-accent font-medium text-gray-700">
            <Links />
          </ul>
        </nav>
        
        <!-- Mobile Navigation -->
        <nav
          class="md:hidden transition-all duration-500 ease-out absolute top-[100px] left-0 right-0 mx-4"
          :class="[showMenu ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4']"
        >
          <div class="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl p-6">
            <ul class="flex flex-col gap-6 font-accent font-medium text-gray-700">
              <Links />
            </ul>
          </div>
        </nav>

        <!-- Right Section -->
        <div class="flex items-center gap-4">
          <!-- Desktop Icons -->
          <div class="hidden md:flex items-center gap-3">
            <div class="animate-fade-in-up">
              <Icons />
            </div>
          </div>
          
          <!-- Mobile Menu Button -->
          <button
            aria-label="menu button"
            class="md:hidden relative p-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            @click="
              () => {
                showMenu = !showMenu;
              }
            "
          >
            <div class="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <v-icon
              :name="[showMenu ? 'io-close-sharp' : 'io-menu-sharp']"
              class="relative z-10 transition-all duration-300 w-6 h-6 cursor-pointer group-hover:scale-110"
              :class="[showMenu ? 'rotate-180' : 'rotate-0']"
            />
          </button>
        </div>
      </div>
    </Container>
  </header>
</template>

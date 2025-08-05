<script setup>
import Container from "../Container/index.vue";
import ProductItems from "./ProductItems/index.vue";
import Divider from "../Divider/index.vue";
</script>
<template>
  <section
    v-motion
    :initial="{
      opacity: 0,
      y: 50,
    }"
    :visible-once="{
      opacity: 1,
      y: 0,
      transition: {
        delay: 200,
        duration: 600,
      },
    }"
    class="py-20 scroll-mt-32"
    id="products"
  >
    <Container>
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 mb-4 max-lg:text-3xl max-sm:text-2xl">
          Nossos Produtos
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto max-lg:text-base max-sm:text-sm">
          Descubra nossa coleção de produtos selecionados especialmente para você
        </p>
      </div>

      <ProductItems />
      
      <div class="text-center mt-12">
        <button class="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium">
          Ver Todos os Produtos
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </Container>
  </section>
</template>

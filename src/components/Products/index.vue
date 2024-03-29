<script setup>
import Container from "../Container/index.vue";
import ProductItems from "./ProductItems/index.vue";
</script>
<template>
  <section class="my-80">
    <Container>
      <h3 class="text-4xl font-bold mb-5 max-lg:text-3xl max-sm:text-2xl">
        Alguns Produtos
      </h3>

      <div class="flex justify-end items-center gap-4 relative mb-">
        <span class="uppercase max-lg:text-sm max-sm:text-xs"
          >Mais produtos</span
        >

        <!-- line -->
        <div class="absolute -bottom-1 left-0 w-full h-0.5 bg-[#eee]"></div>
      </div>

      <ProductItems />
    </Container>
  </section>
</template>

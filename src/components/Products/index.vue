<script setup>
import Container from "../Container/index.vue";
import ProductItems from "./ProductItems/index.vue";
import Divider from "../Divider/index.vue";
</script>
<template>
  <section class="my-52 scroll-mt-32" id="products">
    <Container>
      <h3>Alguns Produtos</h3>

      <div class="flex justify-end items-center gap-4 relative mb-32 mt-10">
        <span class="uppercase max-lg:text-sm max-sm:text-xs"
          >Mais produtos</span
        >

        <Divider :absolute="true" />
      </div>

      <ProductItems />
    </Container>
  </section>
</template>

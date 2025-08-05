<script setup>
import Container from "../Container/index.vue";
import Divider from "../Divider/index.vue";
</script>

<template>
  <section class="py-20 bg-white scroll-mt-32" id="about">
    <Container>
      <div class="max-w-4xl mx-auto text-center">
        <h2
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 200,
              duration: 600,
            },
          }"
          class="text-4xl font-bold text-gray-900 mb-6 max-lg:text-3xl max-sm:text-2xl"
        >
          Sobre a MiEstilo
        </h2>

        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 400,
              duration: 600,
            },
          }"
          class="text-xl text-gray-600 mb-8 max-lg:text-lg max-sm:text-base"
        >
          Temos o compromisso de proporcionar o que há de melhor na moda.
        </p>

        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 600,
              duration: 600,
            },
          }"
          class="text-lg text-gray-700 leading-relaxed max-lg:text-base max-sm:text-sm"
        >
          Na MiEstilo, acreditamos que a moda é uma forma de expressão pessoal e
          de confiança. Nossa missão é proporcionar a você uma experiência de
          compra fácil e emocionante, oferecendo uma seleção cuidadosamente
          curada das últimas tendências e clássicos atemporais.
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 800,
              duration: 600,
            },
          }"
          class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div class="text-center">
            <div class="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div class="text-gray-600">Produtos</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-gray-900 mb-2">1000+</div>
            <div class="text-gray-600">Clientes Satisfeitos</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-gray-900 mb-2">5+</div>
            <div class="text-gray-600">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

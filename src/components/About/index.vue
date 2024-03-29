<script setup>
import Container from "../Container/index.vue";
</script>

<template>
  <section class="my-40">
    <Container>
      <h3 class="text-4xl font-bold mb-14 max-lg:text-3xl max-sm:text-2xl">
        Sobre Nós
      </h3>

      <!-- top line -->
      <div class="left-0 w-full h-0.5 bg-[#ddd]"></div>

      <div class="my-28 flex flex-col gap-14 text-center max-sm:my-20">
        <h6 class="text-3xl font-medium max-lg:text-2xl max-sm:text-lg">
          Temos o compromisso de proporcionar o que há de melhor na moda.
        </h6>

        <p
          class="leading-[50px] font-light text-xl max-w-screen-lg mx-auto max-lg:text-lg max-sm:text-sm max-sm:leading-7"
        >
          Na MiEstilo, acreditamos que a moda é uma forma de expressão pessoal e
          de confiança. Nossa missão é proporcionar a você uma experiência de
          compra fácil e emocionante, oferecendo uma seleção cuidadosamente
          curada das últimas tendências e clássicos atemporais.
        </p>
      </div>

      <!-- bottom line -->
      <div class="left-0 w-full h-0.5 bg-[#ddd]"></div>
    </Container>
  </section>
</template>

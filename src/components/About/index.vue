<script setup>
import Container from "../Container/index.vue";
import Divider from "../Divider/index.vue";
</script>

<template>
  <section class="my-40 scroll-mt-40" id="about">
    <Container>
      <h3>Sobre Nós</h3>

      <Divider />

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

      <Divider />
    </Container>
  </section>
</template>

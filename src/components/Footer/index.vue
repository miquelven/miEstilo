<script setup>
import Icons from "../Icons/index.vue";
</script>

<template>
  <footer
    class="relative py-5 border-t-2 border-[#dddddd] w-full flex justify-center items-center max-sm:px-2"
  >
    <span
      class="text-sm max-md:mb-10 max-sm:text-xs max-sm:text-center max-sm:leading-7"
      >© Copyright - Todos os direitos reservados - Miquelven Silva</span
    >

    <div class="absolute right-10 bottom-4 flex gap-6">
      <Icons :responsive="true" />
    </div>
  </footer>
</template>

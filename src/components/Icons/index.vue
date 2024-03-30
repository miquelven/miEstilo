<script setup>
const props = defineProps(["responsive"]);

const icons = ["ri-facebook-box-line", "ri-instagram-line"];
</script>

<template>
  <v-icon
    v-for="(icon, index) in icons"
    :key="index"
    :name="icon"
    class="transition-all duration-300 w-7 h-7 text-[#495057] hover:text-black cursor-pointer"
    :class="`${
      props.responsive ? 'max-lg:w-6 max-lg:h-6 max-sm:text-[#495057]/80' : ''
    }`"
  >
  </v-icon>
</template>

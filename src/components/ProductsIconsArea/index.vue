<template>
  <div
    class="w-full bg-[#D9D9D9] flex flex-col justify-center items-center gap-10 mb-20 py-10 max-lg:gap-16 max-md:gap-12 max-sm:px-10 max-sm:overflow-hidden"
  >
    <h4
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visible-once="{
        opacity: 1,
        y: 0,
        transition: {
          delay: 800,
        },
      }"
      class="text-3xl font-medium max-lg:text-2xl max-sm:text-sm max-sm:text-center"
    >
      Temos uma grande variedade de produtos
    </h4>

    <div class="flex gap-32">
      <v-icon
        v-motion
        :initial="{ opacity: 0, scale: 0 }"
        :visible-once="{
          opacity: 1,
          scale: 1,
          transition: {
            delay: index * 200,
          },
        }"
        v-for="(icon, index) in icons"
        :key="index"
        :name="icon"
        class="transition-all duration-300 w-14 h-14 text-[#495057] hover:text-black max-lg:w-14 max-lg:h-14 max-md:w-10 max-md:h-10"
      />
    </div>
  </div>
</template>

<script setup>
const icons = [
  "io-shirt",
  "gi-armored-pants",
  "gi-converse-shoe",
  "gi-dress",
  "gi-large-dress",
  "gi-lab-coat",
  "gi-billed-cap",
  "gi-skirt",
];
</script>

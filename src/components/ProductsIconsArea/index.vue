<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-12">
        <h3
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
          class="text-3xl font-bold text-gray-900 mb-4 max-lg:text-2xl max-sm:text-xl"
        >
          Categorias de Produtos
        </h3>
        <p class="text-lg text-gray-600 max-lg:text-base max-sm:text-sm">
          Explore nossa ampla variedade de produtos
        </p>
      </div>

      <div class="grid grid-cols-4 md:grid-cols-8 gap-8 max-sm:gap-4">
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :visible-once="{
            opacity: 1,
            scale: 1,
            transition: {
              delay: index * 100 + 400,
              duration: 400,
            },
          }"
          v-for="(icon, index) in icons"
          :key="index"
          class="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer group"
        >
          <div class="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
            <v-icon
              :name="icon"
              class="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300"
            />
          </div>
          <span class="text-xs text-gray-600 font-medium text-center group-hover:text-gray-900 transition-colors duration-300">
            {{ getCategoryName(index) }}
          </span>
        </div>
      </div>
    </div>
  </section>
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

const categoryNames = [
  "Camisas",
  "Calças",
  "Calçados",
  "Vestidos",
  "Roupas Longas",
  "Casacos",
  "Bonés",
  "Saias",
];

const getCategoryName = (index) => {
  return categoryNames[index] || "Categoria";
};
</script>

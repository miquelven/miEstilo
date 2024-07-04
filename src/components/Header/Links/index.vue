<script setup>
const data = [
  {
    href: "#products",
    label: "Produtos",
  },
  {
    href: "#rating",
    label: "Avaliações",
  },
  {
    href: "#about",
    label: "Sobre",
  },
  {
    href: "#contact",
    label: "Contato",
  },
];
</script>

<template>
  <li
    v-for="(infos, index) in data"
    :key="index"
    class="transition-all font-semibold duration-300 hover:text-[#495057] cursor-pointer hover:scale-95"
  >
    <a :href="infos.href"> {{ infos.label }} </a>
  </li>
</template>

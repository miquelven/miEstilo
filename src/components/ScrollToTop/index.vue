<script setup>
import { ref, onMounted, onBeforeMount } from "vue";

let showScroll = ref(false);

const userScroll = () => {
  if (window.scrollY > 1200) {
    showScroll.value = true;
  } else {
    showScroll.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", userScroll);
});
onBeforeMount(() => {
  window.removeEventListener("scroll", userScroll);
});
const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <v-button
    @click="scrollTop"
    class="transition-all duration-300 fixed bottom-16 right-10 cursor-pointer hover:scale-105 z-50 max-sm:right-4"
    :class="`${
      showScroll ? 'right-10 opacity-100' : 'right-[-100%] opacity-0'
    }`"
    :key="true"
  >
    <v-icon
      name="bi-arrow-up-square-fill"
      class="transition-all duration-300 text-[#353535] w-12 h-12 hover:text-[#293037a1] max-sm:w-8 max-sm:h-8"
    >
    </v-icon>
  </v-button>
</template>

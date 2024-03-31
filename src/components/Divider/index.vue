<script setup>
const props = defineProps(["absolute"]);
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0 }"
    :visible-once="{
      opacity: 1,
      transition: {
        delay: 1000,
        duration: 400,
      },
    }"
    class="w-full h-0.5 bg-[#ddd]"
    :class="`${props.absolute ? 'absolute -bottom-1 left-0' : ''}`"
  ></div>
</template>

<script setup>
const props = defineProps(["absolute"]);
</script>

<template>
  <div
    class="w-full h-0.5 bg-[#ddd]"
    :class="`${props.absolute ? 'absolute -bottom-1 left-0' : ''}`"
  ></div>
</template>

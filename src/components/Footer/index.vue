<script setup>
import Icons from "../Icons/index.vue";
</script>

<template>
  <footer class="py-8 bg-white border-t border-gray-200 w-full">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
        <!-- Copyright -->
        <div class="text-center lg:text-left">
          <p class="text-gray-600 text-sm">
            © 2024 <span class="font-semibold text-gray-800">miEstilo</span> - Todos os direitos reservados
          </p>
        </div>
        
        <!-- Social Icons -->
        <div class="flex items-center gap-4">
          <Icons :responsive="true" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import NavigationNavbar from '../components/UI/NavigationNavbar.vue';

onMounted(() => {
  initFlowbite();
});



</script>

<template>
  <div class="min-h-screen bg-sky-50 dark:bg-gray-900">
    <NavigationNavbar />


    <!-- AQUÍ VAN LAS VISTAS RENDERIZADAS  -->
    <div
      class="max-w-7xl mx-auto mt-20 px-6 py-10 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
      <slot />
    </div>
    <!-- HASTA AQUÍ VAN LAS VISTAS RENDERIZADAS -->
  </div>
</template>

<script setup>
import ApplicationLogo from '../components/ApplicationLogo.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-sky-50 dark:bg-gray-900">
    <div>
      <router-link to="/">
        <ApplicationLogo class="w-40 h-40 fill-current" />
      </router-link>
    </div>

    <!-- AQUÍ VAN LAS VISTAS RENDERIZADAS  -->
    <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
      <slot />
      <!-- HASTA AQUÍ VAN LAS VISTAS RENDERIZADAS -->
    </div>
  </div>
</template>

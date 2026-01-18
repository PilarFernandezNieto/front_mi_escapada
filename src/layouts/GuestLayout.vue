<script setup>
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import NavLink from '../components/NavLink.vue';
import { initFlowbite } from 'flowbite';
import ApplicationLogo from '../components/ApplicationLogo.vue'
import { useAuthStore } from '../stores/auth';

const { isLoggedIn } = useAuthStore();

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div class="min-h-screen bg-sky-50 dark:bg-gray-900">


    <nav class="bg-white w-full z-20 top-0 start-0 border-b border-gray-200">
      <div class="max-w-screen-xl flex flex-col lg:flex-row flex-wrap items-center justify-center md:justify-between mx-auto p-4">
        <RouterLink :to="{ name: 'home' }" class="flex items-center space-x-3 rtl:space-x-reverse">
          <ApplicationLogo class="h-20" />
          <span
            class="self-center text-xl text-gray-900 font-semibold whitespace-nowrap dark:text-white">MiEscapada</span>
        </RouterLink>

        <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div v-if="isLoggedIn">
            <button type="button"
              class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom">
              <span class="sr-only">Open user menu</span>
              <img class="w-8 h-8 rounded-full" src="" alt="user photo">
            </button>
            <!-- Dropdown menu -->
            <div
              class="z-50 hidden  bg-white border border-gray-200 rounded-lg shadow-lg w-44 dark:bg-gray-700 dark:border-gray-600"
              id="user-dropdown">
              <div class="px-4 py-3 text-sm border-b border-gray-200 dark:border-gray-600">
                <span class="block text-gray-900 font-medium dark:text-white">Joseph McFall</span>
                <span class="block text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
              </div>
              <ul class="p-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="user-menu-button">
                <li>
                  <a href="#"
                    class="inline-flex items-center w-full p-2 hover:bg-gray-100 hover:text-gray-900 rounded dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#"
                    class="inline-flex items-center w-full p-2 hover:bg-gray-100 hover:text-gray-900 rounded dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#"
                    class="inline-flex items-center w-full p-2 hover:bg-gray-100 hover:text-gray-900 rounded dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#"
                    class="inline-flex items-center w-full p-2 hover:bg-gray-100 hover:text-gray-900 rounded dark:hover:bg-gray-600 dark:hover:text-white">Sign
                    out</a>
                </li>
              </ul>
            </div>
          </div>
          <template v-else>
            <NavLink :to="{ name: 'login' }">Inicia sesión
            </NavLink>
          </template>
          <button data-collapse-toggle="navbar-user" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1" id="navbar-user">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <NavLink :to="{ name: 'home' }">Home</NavLink>
                
            </li>
            <li>
              <a href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    <!-- AQUÍ VAN LAS VISTAS RENDERIZADAS  -->
    <div class="w-full pt-20 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
      <slot />
      <!-- HASTA AQUÍ VAN LAS VISTAS RENDERIZADAS -->
    </div>
  </div>
</template>

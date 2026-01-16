<template>
  <div class="flex justify-between w-96 mx-auto mt-10">
    <RouterLink :to="{name: 'login'}">Login</RouterLink>
    <RouterLink :to="{name: 'register'}">Registro</RouterLink>

  </div>
</template>

<script setup>
  import { RouterLink } from 'vue-router';

</script>

<style lang="scss" scoped>

</style>
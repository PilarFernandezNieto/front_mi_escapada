<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card v-for="n in 4" :key="n" />
    </div>
</template>

<script setup>

import Card from './Card.vue';

</script>

<style lang="scss" scoped></style>
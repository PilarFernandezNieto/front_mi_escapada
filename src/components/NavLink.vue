<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  active: {
    type: Boolean,
  },
})

const classes = computed(() =>
  props.active
    ? 'block py-2 px-3 text-white bg-sky-700 rounded md:bg-transparent md:text-sky-700 md:p-0 md:dark:text-sky-500'
    : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-700 md:p-0 dark:text-white md:dark:hover:text-sky-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
)
</script>

<template>
  <RouterLink :to="to" :class="classes">
    <slot />
  </RouterLink>
</template>

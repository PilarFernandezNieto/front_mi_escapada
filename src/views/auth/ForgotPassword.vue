<script setup>
import GuestLayout from '../../layouts/GuestLayout.vue'
import InputError from '../../components/InputError.vue'
import InputLabel from '../../components/InputLabel.vue'
import PrimaryButton from '../../components/PrimaryButton.vue'
import TextInput from '../../components/TextInput.vue'
import { ref } from 'vue'
import { useAuthStore } from '../../stores/auth'

const email = ref('')

const processing = ref(false)
const errors = ref({})
const status = ref(null)

const { forgotPassword } = useAuthStore()

const handleForgotPassword = async () =>
  await forgotPassword(processing, errors, status, email.value)
</script>

<template>
  <GuestLayout>
   <h1 class="font-titulares text-base text-center p-4 uppercase font-medium">Recuperar contraseña</h1>
    <div class="mb-4 text-sm text-gray-600">
      ¿Olvidaste tu contraseña? No hay problema. Índícanos tu dirección de correo electrónico y te
      enviaremos un enlace para restablecerla y poder elegir una nueva.
    </div>

    <div v-if="status" class="mb-4 font-medium text-sm text-sky-600">
      {{ status }}
    </div>
    
    <form @submit.prevent="handleForgotPassword()">
      <div>
        <InputLabel for="email" value="Email" />

        <TextInput
          id="email"
          type="email"
          class="mt-1 block w-full"
          v-model="email"
          autofocus
          autocomplete="username"
        />

        <InputError class="mt-2" :message="errors.email?.[0]" />
      </div>

      <div class="flex items-center justify-end mt-4">
        <PrimaryButton class="w-full" :class="{ 'opacity-25': processing }" :disabled="processing">
          Reestablecer contraseña
        </PrimaryButton>
      </div>
    </form>
    <RouterLink :to="{ name: 'home' }" class="mt-4 flex justify-center hover:text-sky-800"
    >Volver</RouterLink>
  </GuestLayout>
</template>

<style scoped></style>

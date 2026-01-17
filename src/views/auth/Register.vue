<script setup>
import AuthLayout from '../../layouts/AuthLayout.vue'
import InputError from '../../components/InputError.vue'
import InputLabel from '../../components/InputLabel.vue'
import PrimaryButton from '../../components/PrimaryButton.vue'
import TextInput from '../../components/TextInput.vue'
import { useAuthStore } from '../../stores/auth'
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

const processing = ref(false)
const errors = ref({})

const { register } = useAuthStore()

const handleRegister = async () => await register(processing, errors, form.value)
</script>

<template>
  <AuthLayout>
<h1 class="font-titulares text-base text-center p-4 uppercase font-medium">Registro</h1>
    <form @submit.prevent="handleRegister()">
      <div>
        <InputLabel for="name" value="Nombre" />

        <TextInput
          id="name"
          type="text"
          class="mt-1 block w-full"
          v-model="form.name"
          autofocus
          autocomplete="username"
        />

        <InputError class="mt-2" :message="errors.name?.[0]" />
      </div>

      <div class="mt-4">
        <InputLabel for="email" value="Email" />

        <TextInput
          id="email"
          type="email"
          class="mt-1 block w-full"
          v-model="form.email"
          autocomplete="username"
        />

        <InputError class="mt-2" :message="errors.email?.[0]" />
      </div>

      <div class="mt-4">
        <InputLabel for="password" value="Contraseña" />

        <TextInput
          id="password"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password"
          autocomplete="current-password"
        />

        <InputError class="mt-2" :message="errors.password?.[0]" />
      </div>

      <div class="mt-4">
        <InputLabel for="password_confirmation" value="Confirmar contraseña" />

        <TextInput
          id="password_confirmation"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password_confirmation"
          autocomplete="new-password"
        />

        <InputError class="mt-2" :message="errors?.password_confirmation?.[0]" />
      </div>

      <div class="flex items-center justify-center my-4">
        <RouterLink
          :to="{ name: 'login' }"
          class="underline text-sm text-gray-600 hover:text-sky-800 rounded-md focus:outline-none"
        >
          ¿Ya tienes cuenta? Inicia sesión
        </RouterLink>
      </div>
      <PrimaryButton class="w-full" :class="{ 'opacity-25': processing }" :disabled="processing">
        Regístrate
      </PrimaryButton>
    </form>
    <RouterLink :to="{ name: 'home' }" class="mt-4 flex justify-center hover:text-sky-800"
      >Volver</RouterLink
    >
  </AuthLayout>
</template>

<style scoped></style>

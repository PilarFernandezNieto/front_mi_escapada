import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import axios from '../utils/axios'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isLoggedIn = computed(() => !!user.value)
  const router = useRouter()

  // -----------------------------------
  // Función para obtener CSRF token
  // -----------------------------------
  const csrf = async () => {
    await axios.get('/sanctum/csrf-cookie')
  }

  // -----------------------------------
  // Obtener usuario autenticado
  // -----------------------------------
  const fetchUser = async () => {
    try {
      const { data } = await axios.get('/api/user')
      user.value = data
    } catch (error) {
      if (error.response?.status === 409) {
        router.push({ name: 'verify-email' })
      } else {
        user.value = null
      }
    }
  }

  // -----------------------------------
  // LOGIN
  // -----------------------------------
  const login = async (processing, errors, formData) => {
    processing.value = true
    errors.value = {}

    try {
      await csrf() // obtiene XSRF-TOKEN

      await axios.post('/login', formData)

       await fetchUser()

      router.push({ name: 'dashboard' })
    } catch (error) {
      if (error.response?.status === 422) {
        errors.value = error.response.data.errors
      }
    } finally {
      processing.value = false
    }
  }

  // -----------------------------------
  // REGISTER
  // -----------------------------------
  const register = async (processing, errors, formData) => {
    processing.value = true
    errors.value = {}

    try {
      await csrf() // obtiene XSRF-TOKEN

      await axios.post('/register', formData)

      await fetchUser()

      router.push({ name: 'dashboard' })
    } catch (error) {
      if (error.response?.status === 422) {
        errors.value = error.response.data.errors
      }
    } finally {
      processing.value = false
    }
  }

  // -----------------------------------
  // LOGOUT
  // -----------------------------------
  const logout = async () => {
    await axios.post('/logout')
    user.value = null
    router.push({ name: 'login' })
  }

  // -----------------------------------
  // RECUPERAR CONTRASEÑA
  // -----------------------------------
  const forgotPassword = async (processing, errors, status, email) => {
    processing.value = true
    errors.value = {}
    status.value = null

    try {
      await csrf()
      const { data } = await axios.post('/forgot-password', { email })
      status.value = data.status
    } catch (error) {
      if (error.response?.status === 422) {
        errors.value = error.response.data.errors
      }
    } finally {
      processing.value = false
    }
  }

  const resetPassword = async (processing, errors, status, formData) => {
    processing.value = true
    errors.value = {}
    status.value = null

    try {
      await csrf()
      const { data } = await axios.post('/reset-password', formData)
      router.push({
        name: 'login',
        query: { reset: btoa(data?.status) },
      })
    } catch (error) {
      if (error.response?.status === 422) {
        errors.value = error.response.data.errors
      }
    } finally {
      processing.value = false
    }
  }

  const resendEmailVerification = async (processing, status) => {
    processing.value = true
    status.value = null

    const { data } = await axios.post('/email/verification-notification')
    status.value = data.status

    processing.value = false
  }

  return {
    user,
    isLoggedIn,
    fetchUser,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
  }
})

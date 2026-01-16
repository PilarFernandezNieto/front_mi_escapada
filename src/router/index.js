import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'Inicio', middleware: [] },
      component: Home,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { title: 'Dashboard', middleware: ['auth', 'verified'] },
      component: () => import('../views/Dashboard.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      meta: { title: 'Auth', middleware: ['guest'] },
      children: [
        {
          path: 'login',
          alias: '/intranet',
          name: 'login',
          meta: { title: 'Inicia sesión', middleware: ['guest'] },
          component: () => import('../views/auth/Login.vue'),
        },
        {
          path: 'register',
          name: 'register',
          meta: { title: 'Registro', middleware: ['guest'] },
          component: () => import('../views/auth/Register.vue'),
        },
        {
          path: 'forgot-password',
          name: 'forgot-password',
          meta: { title: 'Recupera contraseña', middleware: ['guest'] },
          component: () => import('../views/auth/ForgotPassword.vue'),
        },
        {
          path: 'password-reset/:token',
          name: 'password-reset',
          meta: { title: 'Contraseña nueva', middleware: ['guest'] },
          component: () => import('../views/auth/PasswordReset.vue'),
        },
        {
          path: 'verify-email',
          name: 'verify-email',
          meta: { title: 'Verifica email', middleware: ['auth'] },
          component: () => import('../views/auth/VerifyEmail.vue'),
        },
      ],
    },
  ],
})

// router.beforeEach(async (to, from, next) => {
//   const auth = useAuthStore()

//   // 1️⃣ RUTAS PÚBLICAS → no hacemos NADA
//   if (!to.meta.middleware || to.meta.middleware.length === 0) {
//     return next()
//   }

//   // 2️⃣ RUTAS AUTH → comprobamos sesión
//   if (to.meta.middleware.includes('auth')) {
//     try {
//       await auth.fetchUser()
//     } catch {
//       return next({ name: 'login' })
//     }
//   }

//   // 3️⃣ RUTAS GUEST → si está logueado, fuera
//   if (to.meta.middleware.includes('guest') && auth.user) {
//     return next({ name: 'dashboard' })
//   }

//   next()
// })


export default router

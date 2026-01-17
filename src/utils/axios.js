import Axios from 'axios'

const axios = Axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
})

// Interceptor para incluir X-XSRF-TOKEN desde la cookie si existe
axios.interceptors.request.use((config) => {
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('XSRF-TOKEN='))
    ?.split('=')[1];
  if (token) {
    config.headers['X-XSRF-TOKEN'] = decodeURIComponent(token);
  }
  return config;
});

export default axios

      
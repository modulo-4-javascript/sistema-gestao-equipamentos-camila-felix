import axios from 'axios'

// Instância única do Axios usada por todos os services.
// baseURL vem do .env (VITE_API_URL); em dev, o Vite faz proxy para o backend.
export const axiosApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '/api/v1',
})

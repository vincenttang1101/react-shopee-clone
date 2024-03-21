import { http } from '@/utils/http.util'
import { AuthResponse } from '@/types/response.type'

const authApi = {
  register(body: { email: string; password: string }) {
    return http.post<AuthResponse>('/register', body)
  },
  login(body: { email: string; password: string }) {
    return http.post<AuthResponse>('/login', body)
  },
  logout() {
    return http.post('/logout')
  }
}

export default authApi

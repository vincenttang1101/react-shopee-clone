import { AuthResponse } from '@/types/auth.type'
import http from '@/utils/http'

export const authApi = {
  register: (body: { email: string; password: string }) => http.post<AuthResponse>('/register', body)
}

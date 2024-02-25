import http from '@/utils/http.util'
import { AuthResponse } from '@/types/response.type'

export const authApi = {
  register: (body: { email: string; password: string }) => http.post<AuthResponse>('/register', body)
}

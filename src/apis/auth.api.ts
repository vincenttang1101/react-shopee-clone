import http from '@/utils/http'
import { AuthResponse } from '@/types/responseApi.type'

export const authApi = {
  register: (body: { email: string; password: string }) => http.post<AuthResponse>('/register', body)
}

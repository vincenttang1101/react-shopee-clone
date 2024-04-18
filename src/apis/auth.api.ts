import { AuthResponse } from '@/types/response.type'
import { HttpUtil } from '@/utils/http.util'

const AuthApi = {
  register: (body: { email: string; password: string }) => {
    return HttpUtil.post<AuthResponse>('/register', body)
  },
  login: (body: { email: string; password: string }) => {
    return HttpUtil.post<AuthResponse>('/login', body)
  },
  logout: () => {
    return HttpUtil.post('/logout')
  }
}

export default AuthApi

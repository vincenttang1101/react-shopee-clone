import { User } from '@/types/user.type'

export interface ResponseData<Data> {
  message: string
  data?: Data
}

export type AuthResponse = ResponseData<{
  access_token: string
  expires: number
  refresh_token: string
  expires_refresh_token: number
  user: User
}>

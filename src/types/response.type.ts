import { User } from '@/types/user.type'

export type SuccessResponse<Data> = {
  message: string
  data: Data
}

export type ErrorResponse<Data> = {
  message: string
  data?: Data
}

export type AuthResponse = SuccessResponse<{
  access_token: string
  expires: number
  refresh_token: string
  expires_refresh_token: number
  user: User
}>

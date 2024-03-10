import { User } from '@/types/user.type'

export interface SuccessResponse<Data> {
  message: string
  data: Data
}

export interface ErrorResponse<Data> {
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

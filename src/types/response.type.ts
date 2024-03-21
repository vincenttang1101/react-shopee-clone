import { User } from '@/types/user.type'

type SuccessResponse<Data> = {
  message: string
  data: Data
}

type ErrorResponse<Data> = {
  message: string
  data?: Data
}

type AuthResponse = SuccessResponse<{
  access_token: string
  expires: number
  refresh_token: string
  expires_refresh_token: number
  user: User
}>

export type { SuccessResponse, ErrorResponse, AuthResponse }

import { toast } from 'react-toastify'

import axios, { AxiosError, type AxiosInstance, HttpStatusCode } from 'axios'

import PathConstant from '@/constants/path.constant'
import { AuthResponse, ErrorResponse } from '@/types/response.type'
import { User } from '@/types/user.type'
import { AuthUtil } from '@/utils/auth.util'
import { AxiosErrorUtil } from '@/utils/axiosError.util'

type ErrorType = Omit<ErrorResponse<object>, 'data'>

class Http {
  instance: AxiosInstance
  private accessToken: string | null
  private profile: User | null

  constructor() {
    this.accessToken = AuthUtil.getAccessTokenFromLS()
    this.profile = AuthUtil.getProfileFromLS()

    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // Add a request interceptor
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken) {
          config.headers.Authorization = this.accessToken
        }
        return config
      },
      function (error) {
        return Promise.reject(error)
      }
    )

    // Add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === PathConstant.register || url === PathConstant.login) {
          const result = response.data as AuthResponse
          this.accessToken = result.data.access_token
          this.profile = result.data.user
          AuthUtil.setAccessTokenToLS(this.accessToken)
          AuthUtil.setProfileToLS(this.profile)
        } else if (url === PathConstant.logout) {
          this.accessToken = null
          this.profile = null
          AuthUtil.clearLS()
        }
        return response
      },
      function (error: AxiosError) {
        if (!AxiosErrorUtil.isAxiosUnprocessableEntityError<ErrorType>(error)) {
          const message = (error as AxiosError<ErrorType>).response?.data.message || error.message
          toast.error(message)
        }
        if (error.response?.status === HttpStatusCode.Unauthorized) {
          AuthUtil.clearLS()
        }
        return Promise.reject(error)
      }
    )
  }
}

const HttpUtil = new Http().instance

export { HttpUtil }

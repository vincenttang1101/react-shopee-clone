import axios, { AxiosError, type AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import { AuthResponse, ErrorResponse } from '@/types'
import {
  clearAccessTokenFromLS,
  getAccessTokenFromLS,
  isAxiosUnprocessableEntityError,
  saveAccessTokenToLS
} from '@/utils'
import { PATHS } from '@/constants'

type ErrorType = Omit<ErrorResponse<object>, 'data'>

class Http {
  instance: AxiosInstance
  private accessToken: string

  constructor() {
    this.accessToken = getAccessTokenFromLS()
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
        if (url === PATHS.REGISTER || url === PATHS.LOGIN) {
          this.accessToken = (response.data as AuthResponse).data.access_token
          saveAccessTokenToLS(this.accessToken)
        } else if (url === PATHS.LOGOUT) {
          this.accessToken = ''
          clearAccessTokenFromLS()
        }
        return response
      },
      function (error: AxiosError) {
        console.log(error)
        if (!isAxiosUnprocessableEntityError<ErrorType>(error)) {
          const message = (error as AxiosError<ErrorType>).response?.data.message || error.message
          toast.error(message)
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http

import axios, { AxiosError, type AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import { isAxiosUnprocessableEntityError } from '@/utils'
import { ResponseData } from '@/types'

interface ErrorType extends Omit<ResponseData<object>, 'data'> {}

class Http {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // Add a response interceptor
    this.instance.interceptors.response.use(
      function (response) {
        return response
      },
      function (error: AxiosError) {
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

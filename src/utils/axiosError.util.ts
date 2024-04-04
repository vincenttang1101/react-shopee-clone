import axios, { AxiosError, HttpStatusCode } from 'axios'

const AxiosErrorUtil = {
  isAxiosUnprocessableEntityError: <T>(error: unknown): error is AxiosError<T> => {
    return axios.isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
  }
}

export { AxiosErrorUtil }

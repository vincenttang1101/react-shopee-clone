import axios, { AxiosError, HttpStatusCode } from 'axios'

export function isAxiosUnprocessableEntityError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}

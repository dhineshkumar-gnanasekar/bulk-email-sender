import axios, { type AxiosRequestConfig } from 'axios'
import cookie from 'js-cookie'

const requestInterceptor = (request: AxiosRequestConfig) => {
  const access_token = cookie.get('sessCookie')
  if (access_token) {
    request.headers = { Authorization: `Bearer ${access_token}` }
  } else {
    // Authentication().signOut();
  }
  return request
}
const options: AxiosRequestConfig = {}
options.baseURL = '/api'
const axiosInstance = axios.create(options)
axiosInstance.interceptors.request.use(requestInterceptor as any) // Timely Fix
export default axiosInstance

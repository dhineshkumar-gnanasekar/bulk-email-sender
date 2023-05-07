import axios from './rest'

const baseURL = '/auth/'
function login(email: any, password: any) {
  return new Promise<any>((resolve, reject) => {
    try {
      axios
        .post(`${baseURL}login`, { email, password })
        .then((res) => {
          resolve(res.data)
        })
        .catch((error) => {
          if (error.response.data.message === 'Invalid User Name or Password') {
            resolve(error.response.data.message)
          } else {
            reject(error)
          }
        })
    } catch (error) {
      console.log(error, 'error')
    }
  })
}

const UserService = {
  login
}

export default UserService

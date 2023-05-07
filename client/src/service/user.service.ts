import axios from './rest'

const baseURL = '/auth/'
function login(email: any, password: any) {
  return new Promise<any>((resolve, reject) => {
    try {
      axios.post(`${baseURL}login`, { email, password }).then((res) => {
        resolve(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  })
}

const UserService = {
  login
}

export default UserService

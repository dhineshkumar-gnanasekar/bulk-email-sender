import { defineStore } from 'pinia'
import { ref } from 'vue'
import UserService from '../service/user.service'
import cookie from 'js-cookie'

export const useUserStore = defineStore(
  'user',
  () => {
    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')

    async function login(uname: any, password: any) {
      const user = await UserService.login(uname, password)
      if (user !== 'Invalid Login') {
        cookie.set('sessCookie', user.access_token)
        firstName.value = user.firstName
        lastName.value = user.lastName
        email.value = user.email
        return true
      } else {
        return false
      }
    }

    return { firstName, lastName, email, login }
  },
  {
    persist: true
  }
)

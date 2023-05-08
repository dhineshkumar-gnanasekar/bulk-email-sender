import cookie from 'js-cookie'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import UserService from '../service/user.service'
import router from '../router'

export const useUserStore = defineStore(
  'user',
  () => {
    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')

    function reset() {
      firstName.value = ''
      lastName.value = ''
      email.value = ''
    }
    async function login(uname: any, password: any) {
      const user = await UserService.login(uname, password)
      if (user.access_token) {
        cookie.set('sessCookie', user.access_token)
        firstName.value = user.firstName
        lastName.value = user.lastName
        email.value = user.email
        return true
      } else {
        return false
      }
    }

    function logout() {
        cookie.remove('sessCookie');
        reset();
        router.push({ path: '/login' })
    }

    return { firstName, lastName, email, reset, login, logout }
  },
  {
    persist: true
  }
)

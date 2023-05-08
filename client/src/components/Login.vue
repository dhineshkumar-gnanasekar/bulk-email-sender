<template>
  <div class="flex justify-center items-center w-screen h-screen">
    <div
      class="bg-gray-900 border-4 border-blue-900 rounded-3xl px-2 py-2 w-1/3 h-2/6 md:w-1/3 md:h-2/6 overflow-y-auto"
    >
      <div class="text-center text-3xl text-white">Sign in.</div>
      <div class="flex justify-center mx-auto my-4 h-6">
        <div class="w-full" v-show="invalidLogin">
          <div
            class="w-full text-center text-red-600 ease-in duration-1000"
            :class="animationState && 'animate-bounce'"
          >
            User Name or Password Incorrect
          </div>
        </div>
      </div>
      <div class="flex justify-center mx-auto my-4">
        <div class="w-full">
          <input
            class="w-full h-10"
            type="text"
            placeholder="Email"
            v-model="uName"
            @input="invalidLogin = false"
            @focus="invalidLogin = false"
            @keydown.enter.exact.prevent="login()"
          />
        </div>
      </div>
      <div class="flex justify-center mx-auto my-4">
        <div class="w-full">
          <input
            class="w-full h-10"
            type="password"
            placeholder="Password"
            v-model="password"
            @input="invalidLogin = false"
            @focus="invalidLogin = false"
            @keydown.enter.exact.prevent="login()"
          />
        </div>
      </div>
      <div class="flex justify-center mx-auto">
        <button
          class="group relative overflow-hidden rounded bg-sky-400 px-2 py-1 font-sans uppercase shadow ring-sky-500 transition-all after:bg-sky-500 active:shadow-md active:ring-2"
          @click="login()"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const uName = ref('')
const password = ref('')
const userStore = useUserStore()
const invalidLogin = ref(false)
const animationState = ref(false)

async function login() {
  const authenticatedState = await userStore.login(uName.value, password.value)
  if (authenticatedState) {
    router.push({ path: '/home' })
  } else {
    animationState.value = true
    invalidLogin.value = true
    setTimeout(() => {
      animationState.value = false
    }, 3000)
  }
}
</script>

<template>
  <div class="h-[10%] bg-gradient-to-b from-gray-800">
    <div class="flex w-screen h-full justify-between px-2">
      <div class="text-3xl my-auto">Bulk Mail Sender</div>
      <div class="my-auto">
        <button @click="dropdown = !dropdown" class="my-auto flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 border-2 border-gray-400 rounded-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5 my-auto"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div
          class="absolute top-12 right-0 box-border h-28 w-44 py-4 border-2 border-gray-400 shadow shadow-gray-500 bg-gray-800 rounded-md z-10"
          v-if="dropdown"
        >
          <div class="px-4 truncate mb-2">Hello, {{ userStore.firstName }}</div>
          <div class="px-4 hover:bg-gray-600 cursor-pointer mb-1">Profile</div>
          <div class="px-4 hover:bg-gray-600 cursor-pointer mb-1" @click="logout()">Sign out</div>
          <div
            class="absolute right-[23px] top-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-4 h-4 border-l border-t border-b-0 border-r-0 border-gray-400 bg-gray-800"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const dropdown = ref(false)
const userStore = useUserStore()

function logout() {
  userStore.logout()
}
</script>

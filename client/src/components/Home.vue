<template>
  <h1>Home</h1>
</template>
<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

console.log(userStore.email,"user");
</script>

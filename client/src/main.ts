import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import cookie from 'js-cookie'

const app = createApp(App)

app.use(createPinia().use(piniaPluginPersistedState))
app.use(router)
router.beforeEach(async (to, from) => {
  if (
    // make sure the user is authenticated
    !cookie.get('sessCookie') &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'Login'
  ) {
    // redirect the user to the login page
    return { name: 'Login' }
  }
})

app.mount('#app')

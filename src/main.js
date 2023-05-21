import { createApp } from 'vue'
import App from './App.vue'

// https://stackoverflow.com/questions/60114173/vue-js-with-an-external-configuration-file

const app = createApp(App)

fetch(import.meta.env.BASE_URL + "config.json")
  .then((response) => response.json())
  .then((config) => {
    // either use window.config
    window.config = config
    // or use [Vue Global Config][1]
    app.config.globalProperties.config = config
    app.provide('foo2','bar2')
    // FINALLY, mount the app
    app.mount("#app")
  })
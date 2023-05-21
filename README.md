# vue-external-config

This is a Vue3 sample to test loading configuration from external file and add it to global variable to be used anywher in Vue 3 app. 

Inital Vue app was created using Vue CLI. Vite was used. 

4 ways of using global variables implemented in App.vue

    // Usage Option #1.  use window.config global variable
    console.log("window.config: " + window.config.foo);

    // Usage Option #2. use this.config to access global variable assinged in main.js
    console.log("app.config.globalProperties.config: " + this.config.foo);

    // Usage Option #3. use variable from Inject Option #1
    console.log("injected: " + this.foo2);

    // Usage Option #4. use variable from Inject Option #2
    console.log("injected in Setup: " + this.injectedInSetup);


Reference: 

https://stackoverflow.com/questions/60114173/vue-js-with-an-external-configuration-file
https://stackoverflow.com/questions/63100658/add-global-variable-in-vue-js-3

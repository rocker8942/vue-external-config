<script>
import { inject } from 'vue'

export default {

  // Inject Option #1. inject global variable that's provided in main.js
  inject: ['foo2'],

  setup() {
    // Inject Option #2. inject global variable that's provided in main.js
    const injectedInSetup = inject('foo2')
    return {
      injectedInSetup
    }
  },

  data() {
    console.log("in data ---------- ");
    // Usage Option #1.  use window.config global variable
    console.log("window.config: " + window.config.foo);

    // Usage Option #2. use this.config to access global variable assinged in main.js
    console.log("app.config.globalProperties.config: " + this.config.foo);

    // Usage Option #3. use variable from Inject Option #1
    console.log("injected: " + this.foo2);

    // Usage Option #4. use variable from Inject Option #2
    console.log("injected in Setup: " + this.injectedInSetup);

    return {
      someObject: {}
    }
  },

  methods: {
    test() {
      console.log("in method ---------- ");
      console.log("window.config: " + window.config.foo);
      console.log("app.config.globalProperties.config: " + this.config.foo);
    }
  },

  mounted() {
    // console.log("in mounted ---------- ");
    // console.log("window.config: " + window.config.foo);
    // console.log("app.config.globalProperties.config: " + this.config.foo);

    // this.test();
  }

}

</script>

<template>
  <header>
    <div>This is from app.config.globalProperties.config: {{ config.foo }}</div>
  </header>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

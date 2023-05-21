<script>
import { inject } from 'vue'

export default {

  inject: ['foo2'],

  setup() {
    const injectedInSetup = inject('foo2')
    return {
      injectedInSetup
    }
  },

  data() {
    console.log("in data ---------- ");
    console.log("window.config: " + window.config.foo);
    console.log("app.config.globalProperties.config: " + this.config.foo);
    console.log("injected: " + this.foo2);
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

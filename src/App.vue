<template>
  <Nav />
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in" :duration="600">
      <component :is="Component" />
    </transition>
  </router-view>
  <Contact />
  <Footer />
</template>

<script>
import Nav from "./components/Nav.vue"
import Footer from "./components/Footer.vue"
import Contact from "./components/Contact.vue"

export default {
  components: { Nav, Footer, Contact }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.route-enter-from {
  opacity: 0;
}

.route-enter-to {
  opacity: 1;
}

.route-enter-active  {
  transition: opacity .25s ease;
}

.route-enter-active .inner {
  transition-delay: .1s;
}

.route-leave-active  {
  transition: opacity .25s ease;
}

.route-leave-to {
  opacity: 0;
}
</style>

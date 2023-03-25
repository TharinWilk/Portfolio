<template lang="html">
  <article id="home" @mousemove="moveLightEffect">
    <HomeLanding />
    <HomeAbout />
    <HomeProjects />
    <div class="light-effect bg-blue-light-1" ref="light"></div>
  </article>
</template>

<script>
import HomeLanding from "../components/home-components/HomeLanding.vue";
import HomeAbout from "../components/home-components/HomeAbout.vue";
import HomeProjects from "../components/home-components/HomeProjects.vue";

export default {
  components: { HomeLanding, HomeAbout, HomeProjects },
  methods: {
    moveLightEffect(e) {
      this.$refs.light.style.left = `${e.clientX - 32}px`;
      this.$refs.light.style.top = `${e.clientY - 32 + window.scrollY}px`;
    },
  },
};
</script>

<style media="screen"></style>

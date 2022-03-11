<template lang="html">
  <article id="home">
    <HomeLanding />
    <HomeAbout />
    <HomeProjects/>
  </article>
</template>

<script>
import HomeLanding from "../components/home-components/HomeLanding.vue"
import HomeAbout from "../components/home-components/HomeAbout.vue"
import HomeProjects from "../components/home-components/HomeProjects.vue"

export default {
  components: { HomeLanding, HomeAbout, HomeProjects }
}
</script>

<style media="screen">



</style>

<template lang="html">
  <section id="projects-section" class="text-secondary col justify-center">
    <div class="transition">
      <h2 class="font-secondary">Projects</h2>
    </div>

    <div class="project-area row">
      <ProjectWindow :view="view">
        <template #img>
          <img src="@/assets/Flashcard.png" alt="Flashcard website">
        </template>

        <template #name class="project-name">
          <h3>Flashcard App</h3>
        </template>

        <template #description>
          <p>An animated flashcard web app that stores data within the browsers local storage. Built with HTML, CSS, and Vue.js.</p>
        </template>

        <template #links>
          <div class="pr-1">
            <a href="https://github.com/TharinWilk/flashcard-app" target="_blank">Github</a>
          </div>

          <div class="pr-1">
            <a href="https://tharinwilk.github.io/flashcard-app/" target="_blank">Live Site</a>
          </div>
        </template>
      </ProjectWindow>

      <ProjectWindow :view="view">
        <template #img>
          <img src="@/assets/Ice-cream.png" alt="Ice cream shop website">
        </template>

        <template #name class="project-name">
          <h3>Otto's Ice Cream</h3>
        </template>

        <template #description>
          <p>A quick and responsive marketing SPA for an ice cream shop. Designed using HTML, Tailwindcss, and Vue.js.</p>
        </template>

        <template #links>
          <div class="pr-1">
            <a href="https://github.com/TharinWilk/ice-cream-app" target="_blank">Github</a>
          </div>

          <div class="pr-1">
            <a href="https://tharinwilk.github.io/ice-cream-app/" target="_blank">Live Site</a>
          </div>
        </template>

      </ProjectWindow>

      <ProjectWindow :view="view">
        <template #img>
          <img src="@/assets/Signup-login.png" alt="Signup and Login web app">
        </template>

        <template #name class="project-name">
          <h3>Signup and Login App</h3>
        </template>

        <template #description>
          <p>A sign-up and login-in app with a mobile first design approach that utilizes Firebase as its backend. This app was developed using
            <span class="font-bold">HTML</span>,
            <span class="font-bold">CSS</span>, and
            <span class="font-bold">Vue.js</span>.</p>
        </template>

        <template #links>
          <div class="pr-1">
            <a href="https://github.com/TharinWilk/signup-login-app" target="_blank">Github</a>
          </div>

          <div class="pr-1">
            <a href="https://tharinwilk.github.io/signup-login-app/" target="_blank">Live Site</a>
          </div>
        </template>
      </ProjectWindow>
    </div>

    <router-link to="/projects" class="router-btn">
      <button type="button" class="btn-square-outlined-blue text-primary">More Projects</button>
    </router-link>
  </section>
</template>

<script>
import ProjectWindow from './ProjectWindow.vue'

export default {
  components: { ProjectWindow },
  data() {
    return {
      view: "Home"
    }
  }
}
</script>

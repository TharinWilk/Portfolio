JS<template lang="html">
  <article id="projects">
    <section class="projects-title">
      <h1 class="">Projects</h1>
    </section>

    <section class="projects-section row">
      <ProjectWindow :view="view">
        <template #img>
          <img src="@/assets/workout-assistant.png" alt="Workout Assistant">
        </template>

        <template #name class="project-name">
          <h3>Workout Assistant</h3>
        </template>

        <template #description>
          <p>A static web app that generates workouts and provides exercise guidance for users. Additionally it can save your favorite exercises and workouts. This app was developed using
            <span class="font-bold">Nuxt.Js</span> and
            <span class="font-bold">Vuetify</span>.</p>
        </template>

        <template #links>
          <div class="pr-1">
            <a href="https://github.com/TharinWilk/workout-assistant" target="_blank">Github</a>
          </div>

          <div class="pr-1">
            <a href="https://tharinwilk.github.io/workout-assistant/" target="_blank">Live Site</a>
          </div>
        </template>
      </ProjectWindow>

      <ProjectWindow >
        <template #img>
          <img src="@/assets/Ice-cream.png" alt="Ice cream shop website">
        </template>

        <template #name class="project-name">
          <h3>Otto's Ice Cream</h3>
        </template>

        <template #description>
          <p>A quick and responsive marketing SPA for an ice cream shop. Designed using
            <span class="font-bold">HTML</span>,
            <span class="font-bold">Tailwindcss</span>, and
            <span class="font-bold">Vue.js</span>.</p>
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

      <ProjectWindow >
        <template #img>
          <img src="@/assets/Flashcard.png" alt="Flashcard website">
        </template>

        <template #name class="project-name">
          <h3>Flashcard App</h3>
        </template>

        <template #description>
          <p>An animated flashcard web app that stores data within the browser's local storage. Built with
             <span class="font-bold">HTML</span>,
             <span class="font-bold">CSS</span>, and
             <span class="font-bold">Vue.js</span>.</p>
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

      <ProjectWindow >
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

      <ProjectWindow >
        <template #img>
          <img src="@/assets/Welding.png" alt="Corey's welding website">
        </template>

        <template #name class="project-name">
          <h3>Corey's Welding</h3>
        </template>

        <template #description>
          <p>A simple landing page for marketing using
            <span class="font-bold">HTML</span>,
            <span class="font-bold">CSS</span>, and
            <span class="font-bold">javascript</span>.</p>
        </template>

        <template #links>
          <div class="pr-1">
            <a href="https://github.com/TharinWilk/Corey-s-Welding" target="_blank">Github</a>
          </div>

          <div class="pr-1">
            <a href="https://tharinwilk.github.io/Corey-s-Welding/" target="_blank">Live Site</a>
          </div>
        </template>
      </ProjectWindow>

      <ProjectWindow >
        <template #img>
          <img src="@/assets/Spitzer-Pic.png" alt="Spitzer Web App">
        </template>

        <template #name class="project-name">
          <h3>Spitzer</h3>
        </template>

        <template #description>
          <p>This is a web application of a relatively unknown and challenging card game designed with
            <span class="font-bold">HTML</span>,
            <span class="font-bold">CSS</span>, and
            <span class="font-bold">javascript</span>.</p>
        </template>

        <template #links>
          <div class="pr-1">
            <a href="https://github.com/TharinWilk/Spitzer" target="_blank">Github</a>
          </div>

          <div class="pr-1">
            <a href="https://tharinwilk.github.io/Spitzer/" target="_blank">Live Site</a>
          </div>
        </template>
      </ProjectWindow>

      <ProjectWindow >
        <template #img>
          <img src="@/assets/Portfolio.png" alt="Portfolio web app">
        </template>

        <template #name class="project-name">
          <h3>Portfolio</h3>
        </template>

        <template #description>
          <p>A portfolio website that was built to showcase my skills as a front-end developer. Built using
            <span class="font-bold">HTML</span>,
            <span class="font-bold">SASS</span>, and
            <span class="font-bold">Vue.js</span>.</p>
        </template>

        <template #links>
          <div class="pr-1">
            <a href="https://github.com/TharinWilk/Portfolio" target="_blank">Github</a>
          </div>
        </template>
      </ProjectWindow>
    </section>
  </article>
</template>

<script>
import ProjectWindow from '../components/home-components/ProjectWindow.vue'

export default {
  components: { ProjectWindow }
}
</script>

<template lang="html">
  <article id="about" class="article">
    <section class="about-header">
      <h1 class="">About Me</h1>
    </section>

    <section class="about-section">
      <div class="text-container col-12 col-6-lg">
        <h2 class="about-section-title">Who am I</h2>

        <p class="section-text">I am a self-taught Front End Web Developer with a passion for learning and developing my skills. I'm currently proficient with a variety of frontend technologies including Vue.js, Tailwind, Bootstrap, and more. I am continuing to expand my knowledge base and branching out into other developer skill sets.</p>
      </div>

      <svg preserveAspectRatio="none" viewBox="0 0 100 100">
        <polygon points="50 0, 100 0, 50 100, 0 100"/>
      </svg>

      <div class="img-container col-12 col-6-lg">
        <img src="https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80" alt="Forrest with a trail.">
      </div>
    </section>

    <section class="about-section section-two">
      <div class="text-container col-12 col-6-lg order-2-lg">
        <h2 class="about-section-title">Where I began</h2>

        <p class="section-text">My educational background is in exercise science where I have a Bachelors of Science in rehabilitation and preventative exercise programs. I have been fortunate in my career to have helped many people achieve their fitness goals, improve their health, and turn their lives around.</p>
      </div>

      <svg class="svg-two" preserveAspectRatio="none" viewBox="0 0 100 100">
        <polygon points="0 0, 50 0, 100 100, 50 100"/>
      </svg>

      <div class="img-container col-12 col-6-lg">
        <img src="https://i.etsystatic.com/8234181/r/il/bababc/3046511268/il_1588xN.3046511268_ry1z.jpg" alt="Writing on a wall with motivational and descriptive words around the word fitness.">
      </div>
    </section>

    <section class="about-section">
      <div class="text-container col-12 col-6-lg">
        <h2 class="about-section-title">A new beginning</h2>

        <p class="section-text">I have been able to achieve the majority of my career goals in the fitness industry and have been looking for the next career challenge to undertake. When I discovered the world of web development it sparked a curiosity and interest in me that I haven't experienced since beginning my fitness career.</p>
      </div>

      <svg preserveAspectRatio="none" viewBox="0 0 100 100">
        <polygon points="50 0, 100 0, 50 100, 0 100"/>
      </svg>

      <div class="img-container col-12 col-6-lg">
        <img src="https://www.egeniq.nl/sites/default/files/2020-06/frontend_webdeveloper.jpg" alt="A graphic of web development on a variety of screen sizes.">
      </div>
    </section>

    <section class="about-section section-two">
      <div class="text-container col-12 col-6-lg order-2-lg">
        <h2 class="about-section-title">The goal</h2>

        <p class="section-text">Rather than designing workout programs for individuals, I hope to design programs and layouts for the web. Though my goals don't end there, as it seems that there are endless career avenues to expand my skills and progress in this new occupation. If you're looking for a passionate, highly-motivated developer to work on their next project, please feel free to contact me.</p>
      </div>

      <svg class="svg-two" preserveAspectRatio="none" viewBox="0 0 100 100">
        <polygon points="0 0, 50 0, 100 100, 50 100"/>
      </svg>

      <div class="img-container col-12 col-6-lg">
        <img src="https://tms-outsource.com/blog/wp-content/uploads/2019/02/fabian-grohs-423591-unsplash.jpg" alt="A computer with code on the screen">
      </div>
    </section>

    <section id="skills-section">
      <div class="landing-bg">
        <div class="section-title">
          <h2>My Skills</h2>
        </div>

        <div class="skills-area">
          <skill id="html-hex">
            <template #skill>
              <fa :icon="['fab', 'html5']" class="skill-icon html" />
            </template>
          </skill>

          <skill id="css-hex">
            <template #skill>
              <fa :icon="['fab', 'css3']" class="skill-icon css" />
            </template>
          </skill>

          <skill id="js-hex">
            <template #skill>
              <fa :icon="['fab', 'js-square']" class="skill-icon js" />
            </template>
          </skill>

          <skill id="vue-hex">
            <template #skill>
              <fa :icon="['fab', 'vuejs']" class="skill-icon vue" />
            </template>
          </skill>

          <skill id="sass-hex">
            <template #skill>
              <fa :icon="['fab', 'sass']" class="skill-icon sass" />
            </template>
          </skill>

          <skill id="tailwind-hex">
            <template #skill>
              <img class="skill-icon" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="">
            </template>
          </skill>

          <skill id="bootstrap-hex">
            <template #skill>
              <fa :icon="['fab', 'bootstrap']" class="skill-icon bootstrap" />
            </template>
          </skill>

          <skill id="nuxt-hex">
            <template #skill>
              <img class="skill-icon" src="@/assets/nuxt-js.png" alt="">
            </template>
          </skill>

          <skill id="vuetify-hex">
            <template #skill>
              <img class="skill-icon" src="https://iconape.com/wp-content/png_logo_vector/vuetify.png" alt="">
            </template>
          </skill>

          <skill id="typescript-hex">
            <template #skill>
              <img class="skill-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png" alt="">
            </template>
          </skill>

          <skill id="gulp-hex">
            <template #skill>
              <fa :icon="['fab', 'gulp']" class="skill-icon gulp" />
            </template>
          </skill>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import Skill from "../components/Skill.vue"
export default {
  components: { Skill }
}
</script>

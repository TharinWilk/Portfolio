<template lang="html">
  <section id="about" class="relative container pb-6">
    <div class="about-container">
      <div class="hex-container">
        <div class="hexagon-backing bg-blue-light-4">
          <div class="hexagon">
            <img src="/images/portrait1.jpeg" alt="Picture of Tharin Wilk" />
          </div>
        </div>
      </div>

      <div class="about-card card text-center">
        <h2 class="font-resp-md pt-5">
          I am a self-taught Front End Web Developer with a passion for learning
          and developing my skills.
        </h2>

        <router-link to="/about">
          <button type="button" class="btn-square-outlined-blue m-2">
            About Me
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

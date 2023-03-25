<template lang="html">
  <section id="landing">
    <div class="landing-bg" @mousemove="moveLightEffect">
      <div class="landing-content row justify-center">
        <span class="col-12-md" @mouseover="hoverIn">Creative</span>
        <span class="col-6-md" @mouseover="hoverIn">Motivated</span>
        <span class="col-6-md" @mouseover="hoverIn">Adaptable</span>
        <span class="col-3-md" @mouseover="hoverIn">Passionate</span>
        <div class="col-6-md justify-center align-center col">
          <h1>Tharin Wilk</h1>
          <h2>Frontend Web Developer</h2>
          <a
            href="https://docs.google.com/document/d/1W0pXVDqJqbLocPYupvyh94OIJueXrTww/edit?usp=sharing&ouid=106026502383524760600&rtpof=true&sd=true"
            target="_blank"
          >
            <button type="button" class="btn-square-outlined-blue m-2">
              View My Resume
            </button>
          </a>
        </div>
        <span class="col-3-md" @mouseover="hoverIn">Practical</span>
        <span class="col-6-md" @mouseover="hoverIn">Ambitious</span>
        <span class="col-6-md" @mouseover="hoverIn">Innovative</span>
        <span class="col-12-md" @mouseover="hoverIn">Driven</span>
      </div>
    </div>

    <div class="light-effect bg-blue-light-1" ref="light"></div>
  </section>
</template>

<script>
export default {
  methods: {
    moveLightEffect(e) {
      this.$refs.light.style.left = `${e.clientX - 32}px`;
      this.$refs.light.style.top = `${e.clientY - 32 + window.scrollY}px`;
    },
    hoverIn(e) {
      e.target.style.opacity = 1;
    },
  },
};
</script>

<template lang="html">
  <div class="project-container col-3-lg">
    <div class="project-backing">
      <div class="project-window">
        <img :src="project.image" :alt="project.alt" />
        <div class="window-bg" ref="project"></div>
      </div>
    </div>

    <div class="project-info">
      <div class="info-container" ref="info">
        <div class="pb-1 font-bold font-lg">
          <h3>{{ project.title }}</h3>
        </div>

        <div class="project-links row pb-1">
          <div v-for="link in project.links" :key="link" class="pr-1">
            <a :href="link.link" target="_blank">{{ link.name }}</a>
          </div>
        </div>

        <div class="pb-1" v-html="project.description"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["view", "project"],
  created() {
    if (this.view === "Home") {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    fadeInOut(target) {
      target.classList.add("light");
      setTimeout(() => {
        this.fadeOut(target);
        this.fadeIn(target);
        this.$refs.info.classList.add("fade-in-slow");
      }, 750);
    },
    fadeIn(target) {
      target.parentElement.firstElementChild.classList.add("fade-in");
    },
    fadeOut(target) {
      target.classList.add("fade-out");
    },
    handleScroll() {
      let elementTop = this.$refs.project.getBoundingClientRect().top;
      let elementBottom = this.$refs.project.getBoundingClientRect().bottom;
      if (
        elementBottom <=
          (window.innerHeight || document.documentElement.clientHeight) ||
        elementTop <= window.innerHeight / 2
      ) {
        this.fadeInOut(this.$refs.project);
      }
    },
  },
};
</script>

<style lang="css"></style>

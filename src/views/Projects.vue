<template lang="html">
  <article id="projects" @mousemove="moveLightEffect">
    <section class="projects-title">
      <h1 class="">Projects</h1>
    </section>

    <section class="projects-section row">
      <ProjectCards
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </section>

    <div class="light-effect bg-blue-light-1" ref="light"></div>
  </article>
</template>

<script>
import ProjectCards from "../components/home-components/ProjectCards.vue";
import { useProjectStore } from "../store/projects";

export default {
  components: { ProjectCards },
  data() {
    return {
      projectStore: useProjectStore(),
    };
  },
  computed: {
    projects() {
      return this.projectStore.projects;
    },
  },
  methods: {
    moveLightEffect(e) {
      this.$refs.light.style.left = `${e.clientX - 32}px`;
      this.$refs.light.style.top = `${e.clientY - 32 + window.scrollY}px`;
    },
  },
};
</script>

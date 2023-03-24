<template lang="html">
  <article id="projects">
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
};
</script>

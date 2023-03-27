<template lang="html">
  <section id="projects-section" class="text-secondary col justify-center">
    <div class="transition">
      <h2 class="font-secondary">Projects</h2>
    </div>

    <div class="project-area row">
      <ProjectCards
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </div>

    <router-link to="/projects" class="router-btn">
      <button type="button" class="btn-square-outlined-blue text-primary">
        More Projects
      </button>
    </router-link>
  </section>
</template>

<script>
import { useProjectStore } from "../../store/projects";
import ProjectCards from "./ProjectCards.vue";

export default {
  components: { ProjectCards },
  data() {
    return {
      projectStore: useProjectStore(),
    };
  },
  computed: {
    projects() {
      return this.projectStore.projects.slice(0, 3);
    },
  },
};
</script>

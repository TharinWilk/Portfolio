<template lang="html">
  <div class="skill-container">
    <div class="skill">
      <fa
        v-if="skill.icon"
        :icon="skill.icon"
        class="skill-icon"
        :style="{ color: `${skill.iconColor}` }"
      />
      <img v-else :src="skill.image" :alt="skill.name" />
    </div>

    <div class="skill-hex"></div>
  </div>
</template>

<script>
export default {
  props: ["skill"],
};
</script>

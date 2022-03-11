<template lang="html">
  <section id="contact" class="bg-primary text-secondary">
    <h2>Contact me</h2>

    <div class="contact-text">
      <p>Like what you see?</p>
      <p>Have a project you need help with?</p>
      <p>Click any of the links to get in touch with me.</p>
    </div>

    <ul class="contact-icons">
      <li>
        <a href="mailto:tharin.m.wilk@gmail.com" aria-label="Click here to email me" data-link="Email Me" target="_blank">
          <fa :icon="['fa', 'envelope']" class="contact-icon" />
        </a>
      </li>
      <li>
        <a href="https://github.com/TharinWilk" aria-label="Click here to view my Github repository" data-link="Check out my Github" target="_blank">
          <fa :icon="['fab', 'github']" class="contact-icon" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/tharin-wilk-84945622a" aria-label="Click here to view my Linkedin page" data-link="Find me on Linkedin" target="_blank">
          <fa :icon="['fab', 'linkedin']" class="contact-icon" />
        </a>
      </li>
    </ul>

  </section>
</template>

<script>
export default {
}
</script>

<template>
  <header id="navbar" class="navbar font-resp-md" ref="navbar">
    <nav class="sliding-navbar">
      <span class="nav-name" ref="name">Tharin Wilk</span>

      <div class="navbar-links" ref="links">
        <router-link to="/" class="nav-link" data-link="Home">Home</router-link>
        <router-link to="/projects" class="nav-link" data-link="Projects"
          >Projects</router-link
        >
        <router-link to="/about" class="nav-link" data-link="About"
          >About</router-link
        >
        <a href="#contact" class="nav-link" data-link="Contact">Contact</a>
      </div>
    </nav>

    <nav class="responsive-nav">
      <div class="nav-ham" @click="showNav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-2 w-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <div class="nav-links">
        <router-link to="/" class="nav-link" data-link="Home">Home</router-link>
        <router-link to="/projects" class="nav-link" data-link="Projects"
          >Projects</router-link
        >
        <router-link to="/about" class="nav-link" data-link="About"
          >About</router-link
        >
        <a href="#contact" class="nav-link" data-link="Contact">Contact</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    showNav() {
      // nav-name function
      if (this.$refs.name.classList.contains("slide-right-out")) {
        this.$refs.name.classList.remove("slide-right-out");
        this.$refs.name.classList.add("slide-left-in");
      } else if (this.$refs.name.classList.contains("slide-left-in")) {
        this.$refs.name.classList.remove("slide-left-in");
        this.$refs.name.classList.add("slide-right-out");
      } else {
        this.$refs.name.classList.add("slide-right-out");
      }

      // navbar-links function
      if (this.$refs.links.classList.contains("slide-right-in")) {
        this.$refs.links.classList.remove("slide-right-in");
        this.$refs.links.classList.add("slide-left-out");
        setTimeout(() => {
          this.$refs.links.classList.remove("slide-left-out");
        }, 1000);
      } else if (this.$refs.links.classList.contains("slide-left-out")) {
        this.$refs.links.classList.remove("slide-left-out");
        this.$refs.links.classList.add("slide-right-in");
      } else {
        this.$refs.links.classList.add("slide-right-in");
      }
    },
    handleScroll() {
      if (!window.matchMedia("prefers-reduced-motion: no-preference")) return;

      let navbar = this.$refs.navbar;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > this.lastScrollTop) {
        navbar.style.top = "-" + navbar.clientHeight + "px";
      } else {
        navbar.style.top = "0";
      }
      this.lastScrollTop = scrollTop;

      if (scrollTop > 0) {
        navbar.classList.add("bg-secondary-light-7", "shadow");
      } else {
        if (navbar.classList.contains("bg-secondary-light-7", "shadow")) {
          navbar.classList.remove("bg-secondary-light-7", "shadow");
        }
      }
    },
  },
};
</script>

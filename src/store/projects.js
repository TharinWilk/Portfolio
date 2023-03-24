import { defineStore } from "pinia";

export const useProjectStore = defineStore("projects", () => {
  const projects = [
    {
      title: "Workout Assistant",
      description: ` <p>
          A static web app that generates workouts and provides exercise
          guidance for users. Additionally it can save your favorite exercises
          and workouts. This app was developed using
          <span class="font-bold">Nuxt.Js</span> and
          <span class="font-bold">Vuetify</span>.
        </p>`,
      image: "/images/workout-assistant.png",
      alt: "Workout Assistant",
      links: [
        {
          name: "Github",
          link: "https://github.com/TharinWilk/workout-assistant",
        },
        {
          name: "Live Site",
          link: "https://tharinwilk.github.io/workout-assistant/",
        },
      ],
    },
    {
      title: "Otto's Ice Cream",
      description: `<p>
          A quick and responsive marketing SPA for an ice cream shop. Designed
          using <span class="font-bold">HTML</span>,
          <span class="font-bold">Tailwindcss</span>, and
          <span class="font-bold">Vue.js</span>.
        </p>`,
      image: "/images/Ice-cream.png",
      alt: "Ice cream shop website",
      links: [
        {
          name: "Github",
          link: "https://github.com/TharinWilk/ice-cream-app",
        },
        {
          name: "Live Site",
          link: "https://tharinwilk.github.io/ice-cream-app/",
        },
      ],
    },
    {
      title: "Flashcard App",
      description: `<p v-html="rawHtml">
          An animated flashcard web app that stores data within the browser's
          local storage. Built with <span class="font-bold">HTML</span>,
          <span class="font-bold">CSS</span>, and
          <span class="font-bold">Vue.js</span>.
        </p>`,
      image: "/images/Flashcard.png",
      alt: "Flashcard web app",
      links: [
        {
          name: "Github",
          link: "https://github.com/TharinWilk/flashcard-app",
        },
        {
          name: "Live Site",
          link: "https://tharinwilk.github.io/flashcard-app/",
        },
      ],
    },
    {
      title: "Corey's Welding",
      description: `<p>
          A simple landing page for marketing using
          <span class="font-bold">HTML</span>,
          <span class="font-bold">CSS</span>, and
          <span class="font-bold">javascript</span>.
        </p>`,
      image: "/images/Welding.png",
      alt: "Corey's welding website",
      links: [
        {
          name: "Github",
          link: "https://github.com/TharinWilk/Cory-s-Welding",
        },
        {
          name: "Live Site",
          link: "https://tharinwilk.github.io/Corey-s-Welding/",
        },
      ],
    },
    {
      title: "Spitzer",
      description: `<p>
          This is a web application of a relatively unknown and challenging
          card game designed with <span class="font-bold">HTML</span>,
          <span class="font-bold">CSS</span>, and
          <span class="font-bold">javascript</span>.
        </p>`,
      image: "/images/Spitzer-Pic.png",
      alt: "Spitzer web app",
      links: [
        {
          name: "Github",
          link: "https://github.com/TharinWilk/Spitzer",
        },
        {
          name: "Live Site",
          link: "https://tharinwilk.github.io/Spitzer/",
        },
      ],
    },
    {
      title: "Portfolio",
      description: `<p>
          A portfolio website that was built to showcase my skills as a
          front-end developer. Built using
          <span class="font-bold">HTML</span>,
          <span class="font-bold">SASS</span>, and
          <span class="font-bold">Vue.js</span>.
        </p>`,
      image: "/images/Portfolio.png",
      alt: "Portfolio web app",
      links: [
        {
          name: "Github",
          link: "https://github.com/TharinWilk/Portfolio",
        },
      ],
    },
  ];

  return { projects };
});

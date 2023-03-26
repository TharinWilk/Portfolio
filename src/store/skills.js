import { defineStore } from "pinia";

export const useSkillsStore = defineStore("skills", () => {
  const skills = [
    {
      name: "html",
      icon: ["fab", "html5"],
      iconColor: "#f06529",
    },
    {
      name: "css",
      icon: ["fab", "css3"],
      iconColor: "#2965f1",
    },
    {
      name: "js",
      icon: ["fab", "js-square"],
      iconColor: "#f0db4f",
    },
    {
      name: "vue",
      icon: ["fab", "vuejs"],
      iconColor: "#42b883",
    },
    {
      name: "sass",
      icon: ["fab", "sass"],
      iconColor: "#cd6799",
    },
    {
      name: "tailwindcss",
      image:
        "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "bootstrap",
      icon: ["fab", "bootstrap"],
      iconColor: "#563d7c",
    },
    {
      name: "nuxt",
      image: "/images/nuxt-js.png",
    },
    {
      name: "vuetify",
      image: "https://iconape.com/wp-content/png_logo_vector/vuetify.png",
    },
    {
      name: "typescript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
    },
    {
      name: "gulp",
      icon: ["fab", "gulp"],
      iconColor: "#d44a48",
    },
    {
      name: "git",
      icon: ["fab", "git-alt"],
      iconColor: "#e44d31",
    },
    {
      name: "github",
      icon: ["fab", "github"],
      iconColor: "#171515",
    },
    {
      name: "gitLab",
      icon: ["fab", "gitlab"],
      iconColor: "#e44d31",
    },
    {
      name: "php",
      icon: ["fab", "php"],
      iconColor: "#7175aa",
    },
    {
      name: "jest",
      image: "https://image.pngaaa.com/6/3692006-middle.png",
    },
    {
      name: "figma",
      icon: ["fab", "figma"],
      iconColor: "#171515",
    },
    {
      name: "postcss",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/PostCSS_Logo.svg/1200px-PostCSS_Logo.svg.png",
    },
  ];

  return { skills };
});

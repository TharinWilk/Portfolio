import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faHtml5,
  faCss3,
  faJsSquare,
  faSass,
  faVuejs,
  faBootstrap,
  faGulp,
} from "@fortawesome/free-brands-svg-icons";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();

library.add(
  faGithub,
  faLinkedin,
  faEnvelope,
  faHtml5,
  faCss3,
  faJsSquare,
  faSass,
  faVuejs,
  faBootstrap,
  faGulp
);

createApp(App)
  .use(router)
  .use(pinia)
  .component("fa", FontAwesomeIcon)
  .mount("#app");

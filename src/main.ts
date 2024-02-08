import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./router";
import PrimeVueImporter from "./plugins/primevue";

import "./assets/styles/index.css";

/*********************************************
 * FONT AWESOME
 *********************************************/
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faSatelliteDish,
  faMoon,
  faSun,
  faWifi,
  faMagnifyingGlass,
  faCircleXmark,
  faTrophy,
  faFutbol,
  faPeopleGroup,
  faShirt,
  faChevronRight,
  faHome,
  faNoteSticky,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faSatelliteDish,
  faMoon,
  faSun,
  faWifi,
  faMagnifyingGlass,
  faCircleXmark,
  faTrophy,
  faFutbol,
  faPeopleGroup,
  faShirt,
  faChevronRight,
  faHome,
  faNoteSticky,
  faFutbol,
  faCalendar,
  faShirt
);

const app = createApp(App);

app.use(createPinia());
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(PrimeVueImporter);
app.mount("#app");

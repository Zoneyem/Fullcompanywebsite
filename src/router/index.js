import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import carsView from "../views/carsView.vue";
import PokemonsView from "../views/PokemonsView.vue";
import ContactView from "../views/ContactView.vue";
import teamView from "../views/teamView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/carsView",
    name: "cars",
    component: carsView,
  },
  {
    path: "/teamView",
    name: "team",
    component: teamView,
  },
  {
    path: "/ContactView",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/PokemonsView",
    name: "pokemons",
    component: PokemonsView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

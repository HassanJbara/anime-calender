import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
} from "vue-router";

import { useAnimeStore } from "@/stores";
import { seasons } from "@/modules";
import { AnimeListView } from "@/views";

const routes = [
  {
    path: "/",
    component: AnimeListView,
    props: {
      selectedSeason: import.meta.env.VITE_CURRENT_SEASON, // current season
      year: new Date().getFullYear(), // current year
    },
  },
  {
    path: "/:year/:season",
    name: "year-season",
    component: AnimeListView,
    // beforeEnter(to: RouteLocationNormalized) {
    //   const animesStore = useAnimeStore();
    //   const seasonName = seasons.find(
    //     (validName) => validName === to.params.season.toString().toUpperCase()
    //   );
    //   const animesGroup = animesStore.search({
    //     season: seasonName,
    //   });
    //   // if (!destinationHome) {
    //   //   return {
    //   //     name: "not-found-home",
    //   //     params: { id: to.params.id },
    //   //   };
    //   // }
    // },
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "not-found",
  //   component: NotFoundView,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0 }), 300);
      })
    );
  },
});

export default router;

import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
} from "vue-router";

import { useAnimeStore } from "@/stores";
import { AnimeListView, NotFoundView, AiringScheduleView } from "@/views";
import { seasons } from "@/modules";

const routes = [
  {
    path: "/",
    component: AnimeListView,

    beforeEnter() {
      const animeStore = useAnimeStore();
      return animeStore.clearState();
    },
  },
  {
    path: "/:year/:season",
    name: "year-season",
    component: AnimeListView,
    beforeEnter(to: RouteLocationNormalized) {
      const animesStore = useAnimeStore();
      const seasonName = seasons.find(
        (validName) => validName === to.params.season.toString().toUpperCase()
      );

      if (seasonName) animesStore.setSeason(seasonName);
      else
        return {
          name: "not-found",
          params: { year: to.params.year, season: to.params.season },
        };

      animesStore.setYear(Number(to.params.year));
    },
  },
  {
    path: "/airing-schedule",
    name: "schedule",
    component: AiringScheduleView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundView,
  },
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

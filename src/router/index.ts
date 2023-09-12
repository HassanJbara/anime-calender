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
    name: "default",
    component: AnimeListView,
  },
  {
    path: "/:year/:season",
    name: "year-season",
    component: AnimeListView,
    beforeEnter(to: RouteLocationNormalized) {
      const seasonName = seasons.find(
        (validName) => validName === to.params.season.toString().toUpperCase()
      );

      if (!seasonName)
        return {
          name: "not-found",
          params: { year: to.params.year, season: to.params.season },
        };
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

router.afterEach((to: RouteLocationNormalized) => {
  const animeStore = useAnimeStore();

  if (to.name === "default") {
    animeStore.clearState();
  }

  if (to.name === "year-season") {
    const seasonName = seasons.find(
      (validName) => validName === to.params.season.toString().toUpperCase()
    );

    if (seasonName) {
      animeStore.setSeason(seasonName);
      animeStore.setYear(Number(to.params.year));
    }
  }
});

export default router;

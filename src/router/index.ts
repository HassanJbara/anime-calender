import { createRouter, createWebHistory, type RouteLocationNormalized,} from "vue-router";

import {HelloWorld} from '@/components'
import { useAnimeStore } from "@/stores";
import { seasons } from "@/modules";
  
const routes = [
    { path: "/", component: HelloWorld },
    {
      path: "/:year/:season",
      name: "home-detail",
      component: HelloWorld,
      beforeEnter(to: RouteLocationNormalized) {
        const animesStore = useAnimeStore();
        const seasonName = seasons.find((validName) => validName === to.params.season.toString().toUpperCase());
        const animesGroup = animesStore.search(
          {
            season: seasonName,
          }
        );
        // if (!destinationHome) {
        //   return {
        //     name: "not-found-home",
        //     params: { id: to.params.id },
        //   };
        // }
      },
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
  
import { defineStore } from "pinia";
import api from "@/api";
import type { Anime, AnimeSearch } from "@/modules";

interface AnimesStoreState {
  animes: Anime[];
}

const defaultState = (): AnimesStoreState => {
  return {
    animes: [],
  };
};

export const useAnimeStore = defineStore("AnimeStore", {
  state: defaultState,
  actions: {
    async fill() {
      try {
        const data = await api.animes.getAll();
        this.animes = data.data;
        // this.searchedHomes = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async search(searchParams?: AnimeSearch) {
      try {
        const data = await api.animes.getSearch(searchParams);
        this.animes = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    // clearSearch() {
    //   this.searchedHomes = [];
    // },
  },
  getters: {
    getAnimes: (state) => {
      return state.animes;
    },
    // getSearchedHomes: (state) => {
    //   return state.searchedHomes;
    // },
    getAnimeByID:
      (state) =>
      (search_id: number): Anime | undefined =>
        state.animes.find((a) => a.id == search_id),
  },
});

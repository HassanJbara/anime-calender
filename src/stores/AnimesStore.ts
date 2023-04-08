import { defineStore } from "pinia";
import api from "@/api";
import type { Anime, AnimeSearch, season } from "@/modules";

interface AnimesStoreState {
  animes: Anime[];
  season: season | undefined;
  year: number;
}

const defaultState = (): AnimesStoreState => {
  return {
    animes: [],
    season: undefined,
    year: new Date().getFullYear(),
  };
};

export const useAnimeStore = defineStore("AnimeStore", {
  state: defaultState,
  actions: {
    async fill() {
      try {
        const data = await api.animes.getAll();
        this.animes = data.data;
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
    setSeason(newSeason: season) {
      this.season = newSeason;
    },

    setYear(newYear: number) {
      this.year = newYear;
    },

    async clearState() {
      await api.animes
        .getCurrentSeasonName()
        .then(({ data }) => {
          this.season = data.current_season;
        })
        .catch((err) => console.error(err));

      this.year = new Date().getFullYear();
    },
  },
  getters: {
    getAllAnimes: (state) => {
      return state.animes;
    },

    getCurrentAnimes: (state) => {
      return state.animes.filter(
        (a) => a.season === state.season && a.year === state.year
      );
    },

    getYear: (state) => {
      return state.year;
    },

    getSeason: (state) => {
      return state.season;
    },

    getAnimeByID:
      (state) =>
      (search_id: number): Anime | undefined =>
        state.animes.find((a) => a.id == search_id),

    getCurrentSeason: () => {
      api.animes
        .getCurrentSeasonName()
        .then(({ data }) => {
          return data.current_season;
        })
        .catch((err) => {
          console.error(err);
          return undefined;
        });
    },
  },
});

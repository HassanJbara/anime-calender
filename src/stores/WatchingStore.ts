import { defineStore } from "pinia";
// import { useLocalStorage } from "@vueuse/core";

import type { Anime, watchStatus } from "@/modules";

interface WatchingStoreState {
  watching: Anime[];
  unsure: Anime[];
  not_watching: Anime[];
}

const defaultState = (): WatchingStoreState => {
  return {
    watching: [],
    unsure: [],
    not_watching: [],
  };
};

export const useWatchingStore = defineStore("watching", {
  state: defaultState,

  getters: {
    getWatching: (state) => state.watching,
    getUnsure: (state) => state.unsure,
    getNotWatching: (state) => state.not_watching,
  },

  actions: {
    ADD_WATCHING(anime: Anime) {
      this.watching.push(anime);
    },

    ADD_UNSURE(anime: Anime) {
      this.unsure.push(anime);
    },

    ADD_NOT_WATCHING(anime: Anime) {
      this.not_watching.push(anime);
    },

    REMOVE_WATCHING(anime: Anime) {
      this.watching.splice(this.watching.indexOf(anime), 1);
    },

    REMOVE_UNSURE(anime: Anime) {
      this.unsure.splice(this.unsure.indexOf(anime), 1);
    },

    REMOVE_NOT_WATCHING(anime: Anime) {
      this.not_watching.splice(this.not_watching.indexOf(anime), 1);
    },

    find_status(anime: Anime): watchStatus | undefined {
      if (this.watching.includes(anime)) return "watching";
      if (this.unsure.includes(anime)) return "unsure";
      if (this.not_watching.includes(anime)) return "not-watching";
      return undefined;
    },

    clear_status(anime: Anime) {
      switch (this.find_status(anime)) {
        case "watching":
          this.REMOVE_WATCHING(anime);
          break;
        case "unsure":
          this.REMOVE_UNSURE(anime);
          break;
        case "not-watching":
          this.REMOVE_NOT_WATCHING(anime);
          break;
      }
    },

    update_status(anime: Anime, status: watchStatus | undefined) {
      this.clear_status(anime);

      switch (status) {
        case "watching":
          this.ADD_WATCHING(anime);
          break;
        case "unsure":
          this.ADD_UNSURE(anime);
          break;
        case "not-watching":
          this.ADD_NOT_WATCHING(anime);
          break;
        default:
          break;
      }
    },
  },
});

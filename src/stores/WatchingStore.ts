import { defineStore } from "pinia";
import { useLocalStorage, type RemovableRef } from "@vueuse/core";

import type { watchStatus } from "@/modules";

interface WatchingStoreState {
  watching: RemovableRef<number[]>;
  unsure: RemovableRef<number[]>;
  not_watching: RemovableRef<number[]>;
}

const defaultState = (): WatchingStoreState => {
  return {
    watching: useLocalStorage("watching", []),
    unsure: useLocalStorage("unsure", []),
    not_watching: useLocalStorage("not-watching", []),
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
    ADD_WATCHING(animeID: number) {
      this.watching.push(animeID);
    },

    ADD_UNSURE(animeID: number) {
      this.unsure.push(animeID);
    },

    ADD_NOT_WATCHING(animeID: number) {
      this.not_watching.push(animeID);
    },

    REMOVE_WATCHING(animeID: number) {
      this.watching.splice(this.watching.indexOf(animeID), 1);
    },

    REMOVE_UNSURE(animeID: number) {
      this.unsure.splice(this.unsure.indexOf(animeID), 1);
    },

    REMOVE_NOT_WATCHING(animeID: number) {
      this.not_watching.splice(this.not_watching.indexOf(animeID), 1);
    },

    find_status(animeID: number): watchStatus | undefined {
      if (this.watching.includes(animeID)) return "watching";
      if (this.unsure.includes(animeID)) return "unsure";
      if (this.not_watching.includes(animeID)) return "not-watching";
      return undefined;
    },

    clear_status(animeID: number) {
      switch (this.find_status(animeID)) {
        case "watching":
          this.REMOVE_WATCHING(animeID);
          break;
        case "unsure":
          this.REMOVE_UNSURE(animeID);
          break;
        case "not-watching":
          this.REMOVE_NOT_WATCHING(animeID);
          break;
      }
    },

    update_status(animeID: number, status: watchStatus | undefined) {
      this.clear_status(animeID);

      switch (status) {
        case "watching":
          this.ADD_WATCHING(animeID);
          break;
        case "unsure":
          this.ADD_UNSURE(animeID);
          break;
        case "not-watching":
          this.ADD_NOT_WATCHING(animeID);
          break;
        default:
          break;
      }
    },
  },
});

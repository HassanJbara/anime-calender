import type { AxiosPromise } from "axios";
import { axiosAPI } from "@/api/axios";
import type { Anime, AnimeSearch, season } from "@/modules";

const animes = {
  getAll: (): AxiosPromise<Array<Anime>> => {
    return axiosAPI.get("animes/");
  },
  getSearch: (data?: AnimeSearch): AxiosPromise<Array<Anime>> => {
    return axiosAPI.get("animes/", { params: data });
  },
  getCurrentSeasonName: (): AxiosPromise<{ current_season: season }> => {
    return axiosAPI.get("animes/what-current-season/");
  },
};

export default animes;

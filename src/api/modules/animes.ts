import type { AxiosPromise } from "axios";
import { axiosAPI } from "@/api/axios";
import type { Anime, AnimeSearch } from "@/modules";
import axios from "axios";

const animes = {
  getAll: (): AxiosPromise<Array<Anime>> => {
    return axiosAPI.get("animes/");
  },
  getSearch: (data?: AnimeSearch): AxiosPromise<Array<Anime>> => {
    return axiosAPI.get("animes/", { params: data });
  },
};

export default animes;

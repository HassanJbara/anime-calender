export const seasons = ["FALL", "SUMMER", "SPRING", "WINTER"] as const;
export const formats = ["TV", "SHORT", "ONGOING", "MOVIE", "OTHER"] as const;
export const adaptations = [
  "MANGA",
  "LIGHTNOVEL",
  "GAME",
  "ORIGINAL",
  "OTHER",
] as const;
export const genres = [
  "COMEDY",
  "ACTION",
  "SHOUNEN",
  "ISEKAI",
  "SHOUJO",
  "DRAMA",
  "ROMANCE",
  "SCHOOL",
  "ADVENTURE",
  "SLICE_OF_LIFE",
  "MYSTERY",
  "FANTASY",
  "HAREM",
  "MECHA",
  "SCI-FI",
  "SPORTS",
  "ECCHI",
  "SEINEN",
] as const;
export const weekdays = [
  "Monday",
  "Thursday",
  "Wednsday",
  "Tuseday",
  "Firday",
  "Saturday",
  "Sunday",
];

export type season = (typeof seasons)[number];
export type format = (typeof formats)[number];
export type adaptaion = (typeof adaptations)[number];
export type genre = (typeof genres)[number];
export type watchStatus = "not-watching" | "unsure" | "watching";

export interface Anime {
  id: number;
  next_episode: string;
  year: number;
  name: string;
  studio: string;
  format: format;
  story: string;
  genres: genre[];
  adaptation: adaptaion;
  cover_image: string;
  season: season;
  start_date: string;
  next_episode_modifier_days: number;
}

export interface AnimeSearch {
  id?: number;
  name?: string;
  season?: season;
}

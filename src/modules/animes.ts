export const seasons = ["FALL", "SUMMER", "SPRING", "WINTER"] as const;
export const formats = ["TV", "SHORT", "ONGOING", "MOVIE", "OTHER"] as const;
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
] as const;

export type season = (typeof seasons)[number];
export type format = (typeof formats)[number];
export type genre = (typeof genres)[number];

export interface Anime {
  id: number;
  next_episode: string;
  year: number;
  name: string;
  studio: string;
  format: format;
  story: string;
  genres: genre[];
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

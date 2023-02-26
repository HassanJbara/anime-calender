export const seasons = ["WINTER", "SPRING", "SUMMER", "FALL"] as const;
export type season = (typeof seasons)[number];

export interface Anime {
    id: number;
    next_episode: string;
    year: number;
    name: string;
    story: string;
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
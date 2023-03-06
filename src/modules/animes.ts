export const seasons = ["WINTER", "SPRING", "SUMMER", "FALL"] as const;
export const formats = ["TV", "OVA", "MOVIE", "SPECIAL"] as const;
export const genres = ['COMEDY', 'ACTION', 'SHOUNEN', 'ISEKAI', 'SHOUJO', 'DRAMA', 'ROMANCE', 'SCHOOL', 'ADVENTURE', 
                        'SLICE_OF_LIFE', 'MYSTERY', 'FANTASY', 'HAREM', 'MECHA', 'SCI-FI', 'SPORTS', 'ECCHI']


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
    genre: genre[];
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
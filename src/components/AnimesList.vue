<script lang="ts" setup>
import { AnimeCard } from "@/components";
import { Anime, formats } from "@/modules";
import { getFormatName } from "@/utils";

const animeList: Anime[] = [
  {
    name: "Steins;Gate",
    cover_image: "",
    format: "TV",
    genres: ["COMEDY", "ACTION", "DRAMA", "ECCHI", "HAREM", "FANTASY"],
    id: 0,
    next_episode: "",
    next_episode_modifier_days: 0,
    season: "FALL",
    start_date: "",
    story: "",
    studio: "",
    year: 2000,
  },
  {
    name: "Steins;Gate",
    cover_image: "",
    format: "TV",
    genres: ["COMEDY", "ACTION", "DRAMA", "ECCHI", "HAREM", "FANTASY"],
    id: 0,
    next_episode: "",
    next_episode_modifier_days: 0,
    season: "FALL",
    start_date: "",
    story: "",
    studio: "",
    year: 2000,
  },
  {
    name: "Steins;Gate",
    cover_image: "",
    format: "TV",
    genres: ["COMEDY", "ACTION", "DRAMA", "ECCHI", "HAREM", "FANTASY"],
    id: 0,
    next_episode: "",
    next_episode_modifier_days: 0,
    season: "FALL",
    start_date: "",
    story: "",
    studio: "",
    year: 2000,
  },
  {
    name: "Steins;Gate",
    cover_image: "",
    format: "TV",
    genres: ["COMEDY", "ACTION"],
    id: 0,
    next_episode: "",
    next_episode_modifier_days: 0,
    season: "FALL",
    start_date: "",
    story: "",
    studio: "",
    year: 2000,
  },
];
</script>

<template>
  <div class="w-full">
    <div
      v-for="format in formats.values()"
      :key="format"
      class="flex flex-col w-full mt-16"
    >
      <div
        class="font-medium text-3xl text-format-text text-right items-center"
      >
        <div v-if="format === 'TV'" class="flex flex-row justify-between">
          <div class="flex flex-row gap-9">
            <img src="/sort.svg" width="20" />
            <img src="/search.svg" width="28" />
            <img src="/share.svg" width="31" />
          </div>
          {{ getFormatName(format) }}
        </div>

        <div v-else>
          {{ getFormatName(format) }}
        </div>
      </div>

      <div class="flex flex-wrap justify-between w-full mt-11 gap-14">
        <AnimeCard v-for="anime in animeList" :key="anime.id" :anime="anime" />
      </div>
    </div>
  </div>
</template>

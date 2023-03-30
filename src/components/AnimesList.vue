<script lang="ts" setup>
import { AnimeCard } from "@/components";
import { Anime, formats } from "@/modules";
import { getFormatName } from "@/utils";

const animeList: Anime[] = [
  {
    name: "Tatoeba Last Dungeon Mae no Mura no Shounen ga Joban no Machi de Kurasu Youna Monogatari",
    cover_image: "",
    format: "TV",
    genres: ["COMEDY", "ACTION", "DRAMA", "ECCHI", "HAREM", "FANTASY"],
    id: 0,
    next_episode: "4",
    next_episode_modifier_days: 0,
    season: "FALL",
    start_date: "",
    story:
      "أعضاء عشيرة كريمسون ماجيك ميجومين و يونيون في قمة فصولهم و لكن لا يزال لديهم الكثير ليتعلموه، بدأت يونيون في تعلم السحر المتقدم و لكن ميجومين سلكت مسارًا مختلفًا وهو مسار سحر الانفجار! على الرغم من تحذيرها من فائدته المحدودة، تعتقد ميجومين أن سحر الانفجار هو السبيلها الوحيد لتصبح ساحرة عظيمة ومليئة بالحيوية، ولن تقتنع بخلاف ذلك! أعضاء عشيرة كريمسون ماجيك ميجومين و يونيون في قمة فصولهم و لكن لا يزال لديهم الكثير ليتعلموه، بدأت يونيون في تعلم السحر المتقدم و لكن ميجومين سلكت مسارًا مختلفًا وهو مسار سحر الانفجار! على الرغم من تحذيرها من فائدته المحدودة، تعتقد ميجومين أن سحر الانفجار هو السبيلها الوحيد لتصبح ساحرة عظيمة ومليئة بالحيوية، ولن تقتنع بخلاف ذلك!",
    studio: "A-1 Pictures",
    adaptation: "MANGA",
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
    season: "SPRING",
    start_date: "",
    story: "",
    studio: "A-1 Pictures",
    adaptation: "MANGA",
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
    season: "WINTER",
    start_date: "",
    story: "",
    studio: "A-1 Pictures",
    adaptation: "MANGA",
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
    studio: "A-1 Pictures",
    adaptation: "MANGA",
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

      <div class="flex flex-wrap justify-between w-full mt-11 gap-y-14">
        <AnimeCard v-for="anime in animeList" :key="anime.id" :anime="anime" />
      </div>
    </div>
  </div>
</template>

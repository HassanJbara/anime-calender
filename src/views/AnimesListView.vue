<script lang="ts" setup>
import { AnimeCard } from "@/components";
import { formats, seasons } from "@/modules";
import { useAnimeStore } from "@/stores";
import { getFormatName } from "@/utils";

import { onBeforeRouteUpdate, useRouter } from "vue-router";
import type { RouteLocationNormalized } from "vue-router";

const animeStore = useAnimeStore();
const router = useRouter();

onBeforeRouteUpdate((to: RouteLocationNormalized) => {
  const animesStore = useAnimeStore();
  const seasonName = seasons.find(
    (validName) => validName === to.params.season.toString().toUpperCase()
  );

  if (seasonName) animesStore.setSeason(seasonName);
  else
    return {
      name: "not-found",
      params: { year: to.params.year, season: to.params.season },
    };

  animesStore.setYear(Number(to.params.year));

  router.push(to.path);
});
</script>

<template>
  <div class="w-full mb-10">
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
        <AnimeCard
          v-for="anime in animeStore.getCurrentAnimes.filter(
            (a) => a.format === format
          )"
          :key="anime.id"
          :anime="anime"
        />
      </div>
    </div>
  </div>
</template>

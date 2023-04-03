<script lang="ts" setup>
import { formats, seasons } from "@/modules";
import { useAnimeStore } from "@/stores";
import { getFormatName } from "@/utils";
import { AnimeCard } from "@/components";

import { onBeforeRouteUpdate, useRouter } from "vue-router";
import type { RouteLocationNormalized } from "vue-router";
import { computed, ref } from "vue";

const animeStore = useAnimeStore();
const router = useRouter();
const showSearch = ref<boolean>(false);
const searchValue = ref<string | undefined>(undefined);

const animes = computed(() => {
  if (searchValue.value) {
    const realValue = searchValue.value;
    return animeStore.getCurrentAnimes.filter(
      (a) =>
        a.name.toLowerCase().includes(realValue.toLowerCase()) ||
        a.studio.toLowerCase().includes(realValue.toLowerCase())
    );
  } else return animeStore.getCurrentAnimes;
});

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
            <!-- <img src="/sort.svg" width="20" /> -->

            <div class="flex flex-row">
              <img
                src="/search.svg"
                width="28"
                class="cursor-pointer"
                @click="showSearch = !showSearch"
              />

              <Transition
                enter-active-class="duration-300 ease-out"
                enter-from-class="transform opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="duration-200 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="transform opacity-0"
              >
                <input
                  v-if="showSearch"
                  type="text"
                  placeholder="ابحث باسم الأنمي أو الاستديو"
                  class="text-lg placeholder:text-right placeholder:text-base rounded w-60 h-9 p-2 shadow-menu absolute ml-10"
                  v-model="searchValue"
                />
              </Transition>
            </div>

            <!-- <img src="/share.svg" width="31" /> -->
          </div>

          {{ getFormatName(format) }}
        </div>

        <div v-else>
          {{ getFormatName(format) }}
        </div>
      </div>

      <div class="flex flex-wrap justify-between w-full mt-11 gap-y-14">
        <AnimeCard
          v-for="anime in animes.filter((a) => a.format === format)"
          :key="anime.id"
          :anime="anime"
        />
      </div>
    </div>
  </div>
</template>

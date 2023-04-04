<script lang="ts" setup>
import { seasons } from "@/modules";
import { getSeasonName, getSeasonTextColor, getSeasonBgColor } from "@/utils";
import { BurgerMenu } from "@/components";
import { useAnimeStore } from "@/stores";

import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const animeStore = useAnimeStore();
const selectedSeason = computed(() => {
  return animeStore.getSeason;
});
const selectedYear = computed(() => {
  return animeStore.getYear;
});

const logoSVG = computed(() => {
  if (router.currentRoute.value.name === "schedule")
    return "/logo-schedule.svg";

  switch (selectedSeason.value) {
    case "FALL":
      return "/logo-fall.svg";
    case "SPRING":
      return "/logo-spring.svg";
    case "WINTER":
      return "/logo-winter.svg";
    case "SUMMER":
      return "/logo-summer.svg";
    default:
      return "";
  }
});
</script>

<template>
  <div class="flex flex-row justify-between">
    <BurgerMenu
      :accent-color="
        router.currentRoute.value.name === 'schedule'
          ? 'bg-format-text'
          : getSeasonBgColor(selectedSeason)
      "
    />

    <div
      v-if="router.currentRoute.value.name === 'schedule'"
      class="flex flex-col"
    >
      <span class="text-4xl text-format-text font-main font-semibold">
        جدول العرض
      </span>

      <div class="mt-1.5 w-4/5 h-0.5 self-center rounded-md bg-format-text" />
    </div>

    <!-- Seasons List -->
    <div class="flex flex-row gap-10" v-else>
      <router-link
        v-for="season in seasons.values()"
        :key="season"
        :to="'/' + selectedYear.toString() + '/' + season.toLowerCase()"
        class="flex flex-col font-main font-semibold text-4xl"
      >
        <span
          :class="
            selectedSeason === season
              ? getSeasonTextColor(season)
              : 'text-default-gray'
          "
        >
          {{ getSeasonName(season) }}
        </span>

        <div
          class="mt-1.5 w-4/5 h-0.5 self-center rounded-md"
          :class="
            selectedSeason === season
              ? getSeasonBgColor(season)
              : 'bg-default-gray'
          "
        />

        <span
          v-show="season === selectedSeason"
          class="mt-1.5 self-center text-2xl"
          :class="
            selectedSeason === season
              ? getSeasonTextColor(season)
              : 'text-default-gray'
          "
        >
          {{ animeStore.getYear }}
        </span>
      </router-link>
    </div>

    <!-- Logo -->
    <router-link to="/" class="self-center">
      <img
        height="100"
        width="150"
        :src="logoSVG"
        @click="() => animeStore.clearState()"
      />
    </router-link>
  </div>
</template>

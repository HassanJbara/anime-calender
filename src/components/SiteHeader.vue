<script lang="ts" setup>
import { seasons } from "@/modules";
import { getSeasonName, getSeasonTextColor, getSeasonBgColor } from "@/utils";
import { BurgerMenu } from "@/components";
import { useAnimeStore } from "@/stores";

import { computed, inject } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const animeStore = useAnimeStore();
const selectedSeason = computed(() => {
  return animeStore.getSeason;
});
const selectedYear = computed(() => {
  return animeStore.getYear;
});

const mobile = inject<boolean>("isMobile", false);

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
      return "/logo-schedule.svg";
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
      class="flex flex-col self-center"
    >
      <span
        class="text-format-text font-main font-semibold"
        :class="mobile ? 'text-xl' : ' text-4xl'"
      >
        جدول العرض
      </span>

      <div class="mt-1.5 w-4/5 h-0.5 self-center rounded-md bg-format-text" />
    </div>

    <!-- Seasons List -->
    <div
      class="flex flex-row"
      :class="
        mobile ? 'container overflow-auto max-w-[60%] justify-around' : 'gap-10'
      "
      v-else
    >
      <router-link
        v-for="season in seasons.values()"
        :key="season"
        :to="'/' + selectedYear.toString() + '/' + season.toLowerCase()"
        class="flex flex-col font-main font-semibold"
        :class="mobile ? 'text-sm gap-[1px]' : 'text-4xl gap-1.5'"
      >
        <span
          :class="
            selectedSeason === season
              ? getSeasonTextColor(season)
              : 'text-default-gray'
          "
        >
          <span :class="selectedSeason !== season && mobile ? 'text-xs' : ''">
            {{ getSeasonName(season) }}
          </span>
        </span>

        <div
          class="w-4/5 h-0.5 self-center rounded-md"
          :class="
            selectedSeason === season
              ? getSeasonBgColor(season)
              : 'bg-default-gray'
          "
        />

        <span
          v-show="season === selectedSeason"
          class="self-center font-sans"
          :class="
            mobile
              ? 'text-mobile ' + getSeasonTextColor(season)
              : 'text-2xl ' + getSeasonTextColor(season)
          "
        >
          {{ animeStore.getYear }}
        </span>
      </router-link>
    </div>

    <!-- Logo -->
    <router-link to="/" class="self-center">
      <img
        :height="mobile ? 20 : 100"
        :width="mobile ? 50 : 150"
        :src="logoSVG"
        @click="() => animeStore.clearState()"
      />
    </router-link>
  </div>
</template>

<style>
.container {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.container::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>

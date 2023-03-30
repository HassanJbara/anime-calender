<script lang="ts" setup>
import { seasons } from "@/modules";
import type { season } from "@/modules";
import { getSeasonName, getSeasonTextColor, getSeasonBgColor } from "@/utils";
import { BurgerMenu } from "@/components";

import { computed } from "vue";

interface Props {
  selectedSeason: season;
  year: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "changeSeason", s: season): void;
}>();

const logoSVG = computed(() => {
  switch (props.selectedSeason) {
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
    <BurgerMenu :accent-color="getSeasonBgColor(selectedSeason)" />

    <!-- Seasons List -->
    <div class="flex flex-row gap-10">
      <div
        v-for="season in seasons.values()"
        :key="season"
        class="flex flex-col cursor-pointer"
        @click="emit('changeSeason', season)"
      >
        <span
          class="text-4xl font-medium"
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
          {{ year }}
        </span>
      </div>
    </div>

    <!-- Logo -->
    <img height="100" width="150" :src="logoSVG" />
  </div>
</template>

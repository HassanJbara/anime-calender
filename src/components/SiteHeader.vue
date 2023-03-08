<script lang="ts" setup>
import { seasons } from "@/modules";
import type { season } from "@/modules";
import { getSeasonName } from "@/utils";

import { computed } from "vue";
import { BurgerMenu } from ".";

interface Props {
  selectedSeason: season | null;
  year: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "changeSeason", s: season): void;
}>();

function getSeasonColor(s: season | null, bar: boolean) {
  if (s !== props.selectedSeason) {
    return bar ? "bg-default-gray" : "text-default-gray";
  } else {
    switch (s) {
      case "FALL":
        return bar ? "bg-fall-blue" : "text-fall-blue";
      case "SPRING":
        return bar ? "bg-spring-wine" : "text-spring-wine";
      case "WINTER":
        return bar ? "bg-winter-torq" : "text-winter-torq";
      case "SUMMER":
        return bar ? "bg-summer-red" : "text-summer-red";
    }
  }
}

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
    <BurgerMenu :accent-color="getSeasonColor(selectedSeason, true)" />

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
          :class="getSeasonColor(season, false)"
        >
          {{ getSeasonName(season) }}
        </span>
        <div
          class="mt-1.5 w-4/5 h-0.5 self-center rounded-md"
          :class="getSeasonColor(season, true)"
        />
        <span
          v-show="season === selectedSeason"
          class="mt-1.5 self-center text-2xl"
          :class="getSeasonColor(season, false)"
        >
          {{ year }}
        </span>
      </div>
    </div>

    <!-- Logo -->
    <img height="100" width="150" :src="logoSVG" />
  </div>
</template>

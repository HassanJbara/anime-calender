<script lang="ts" setup>
import { seasons } from "@/modules";
import type { season } from "@/modules";
import { getSeasonName } from "@/utils";

interface Props {
  selectedSeason: season | null;
  year: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "changeSeason", s: season): void;
}>();

function getSeasonColor(s: season) {
  if (s !== props.selectedSeason) {
    return "default-gray";
  } else {
    switch (s) {
      case "FALL":
        return "fall-blue";
      case "SPRING":
        return "spring-wine";
      case "WINTER":
        return "winter-torq";
      case "SUMMER":
        console.log("test");
        return "summer-red";
    }
  }
}
</script>

<template>
  <div class="flex flex-row justify-between">
    <div>logo</div>
    <div class="flex flex-row gap-10">
      <div
        v-for="season in seasons.values()"
        :key="season"
        class="flex flex-col cursor-pointer"
        @click="emit('changeSeason', season)"
      >
        <span
          class="text-4xl font-medium"
          :class="'text-' + getSeasonColor(season)"
        >
          {{ getSeasonName(season) }}
        </span>
        <div
          class="mt-1.5 w-4/5 h-0.5 self-center rounded-md"
          :class="'bg-' + getSeasonColor(season)"
        />
        <span
          v-show="season === selectedSeason"
          class="mt-1.5 self-center text-2xl"
          :class="'text-' + getSeasonColor(season)"
        >
          {{ year }}
        </span>
      </div>
    </div>
    <div>burger</div>
  </div>
</template>

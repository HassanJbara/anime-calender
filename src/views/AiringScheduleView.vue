<script lang="ts" setup>
import { weekdays } from "@/modules";
import { useAnimeStore } from "@/stores";
import { AnimeCardMini } from "@/components";
import { getWeekdayName } from "@/utils";

import { computed, onMounted, inject } from "vue";

const animeStore = useAnimeStore();
const mobile = inject<boolean>("isMobile", false);

const animes = computed(() => {
  return animeStore.getCurrentAnimes.filter(
    (a) => a.format === "TV" || a.format === "ONGOING" || a.format === "SHORT"
  );
});

onMounted(() => {
  animeStore.clearState();
});
</script>

<template>
  <div
    v-for="weekday in weekdays.values()"
    :key="weekday"
    class="flex flex-col w-full mt-16 mb-10"
  >
    <div
      class="w-full font-main font-semibold text-3xl text-format-text text-right"
    >
      {{ getWeekdayName(weekday) }}
    </div>

    <div class="flex flex-wrap w-full gap-9 mt-8">
      <AnimeCardMini
        v-for="anime in animes.filter((a) => a.weekday === weekday)"
        :key="anime.id"
        :anime="anime"
        :class="mobile ? 'w-full' : ''"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Anime } from "@/modules";
import { getAiredEpisodeCount } from "@/utils";

interface Props {
  anime: Anime;
}

defineProps<Props>();
</script>

<template>
  <div
    class="w-[480px] h-24 bg-card-bg rounded-md shadow-anime-card flex flex-row justify-between text-right"
  >
    <!-- Content -->

    <div
      class="flex flex-col justify-center gap-4 w-[85%] max-h-full py-2 px-4"
    >
      <p class="text-watch-text text-lg font-semibold">
        {{ anime.name }}
      </p>

      <div
        class="font-medium text-sm text-watch-text text-justify"
        style="direction: rtl"
        v-if="anime.next_episode"
      >
        الحلقة {{ getAiredEpisodeCount(anime.start_date) + 1 }} تعرض بعد

        {{
          anime.next_episode
            .replaceAll("month", "شهر")
            .replaceAll("days", "يوم")
            .replaceAll("and ", "و")
            .replaceAll("hours", "ساعة")
        }}
      </div>
    </div>

    <!-- Cover -->

    <div class="h-full w-[15%] rounded-r-md relative">
      <img
        :src="anime.cover_image"
        class="w-full h-full rounded-r-md"
        width="277"
      />
    </div>
  </div>
</template>

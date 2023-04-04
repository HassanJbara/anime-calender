<script lang="ts" setup>
import type { Anime } from "@/modules";
import { getAiredEpisodeCount } from "@/utils";

import { NEllipsis } from "naive-ui";

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
      class="flex flex-col justify-center gap-4 w-[85%] max-h-full py-2 px-4 text-watch-text font-main"
    >
      <n-ellipsis class="max-w-full text-lg font-semibold">
        {{ anime.name }}
      </n-ellipsis>

      <!-- <p class="text-lg font-semibold">
          {{ anime.name }}
        </p> -->

      <div class="font-medium text-sm text-justify" style="direction: rtl">
        الحلقة {{ getAiredEpisodeCount(anime.start_date) + 1 }} تعرض بعد

        {{ anime.next_episode }}
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

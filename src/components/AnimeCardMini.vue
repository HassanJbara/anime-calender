<script lang="ts" setup>
import type { Anime } from "@/modules";
import { useWatchingStore } from "@/stores";
import { getAiredEpisodeCount } from "@/utils";

import { NEllipsis } from "naive-ui";

interface Props {
  anime: Anime;
}

const props = defineProps<Props>();

const watchingStore = useWatchingStore();

function cardBorder() {
  const watchingStatus = watchingStore.find_status(props.anime.id);

  switch (watchingStatus) {
    case "watching":
      return "border border-green-500";
    case "unsure":
      return "border border-yellow-500";
    case "not-watching":
      return "border border-red-500";
    default:
      return;
  }
}
</script>

<template>
  <div
    class="w-[480px] h-24 bg-card-bg rounded-md shadow-anime-card flex flex-row justify-between text-right"
    :class="cardBorder()"
  >
    <!-- Content -->

    <div
      class="flex flex-col justify-center gap-4 w-[85%] max-h-full py-2 px-4 text-watch-text font-main"
    >
      <n-ellipsis class="max-w-full text-lg font-semibold">
        {{ anime.name }}
      </n-ellipsis>

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

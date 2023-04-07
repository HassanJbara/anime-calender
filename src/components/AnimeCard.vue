<script lang="ts" setup>
import type { watchStatus, Anime } from "@/modules";
import { useWatchingStore } from "@/stores";
import {
  getGenreName,
  getSeasonColor,
  getAdaptationName,
  getAiredEpisodeCount,
} from "@/utils";

import { onMounted, type VNodeChild } from "vue";
import { ref, computed, h, inject } from "vue";
import { NTag, NDropdown } from "naive-ui";
import type { DropdownOption } from "naive-ui";
import { dragscroll as vDragscroll } from "vue-dragscroll";

interface Props {
  anime: Anime;
}

const props = defineProps<Props>();

const watchingStore = useWatchingStore();
const mobile = inject<boolean>("isMobile", false);

const watchingStatus = computed(() => {
  return watchingStore.find_status(props.anime.id);
});

const statusIcon = computed(() => {
  switch (watchingStatus.value) {
    case "not-watching":
      return "/not-watching.svg";

    case "unsure":
      return "/unsure.svg";

    case "watching":
      return "/watching.svg";

    default:
      return "/add-status.svg";
  }
});

const options = ref<DropdownOption[]>([
  {
    label: "سأشاهده",
    key: "watching",
    icon: () =>
      h("img", {
        src: "/watching.svg",
        width: mobile ? "11" : "24",
        height: mobile ? "11" : "24",
      }),
  },
  {
    label: "ربما أشاهده",
    key: "unsure",
    icon: () =>
      h("img", {
        src: "/unsure.svg",
        width: mobile ? "11" : "24",
        height: mobile ? "11" : "24",
      }),
  },
  {
    label: "لن أشاهده",
    key: "not-watching",
    icon: () =>
      h("img", {
        src: "/not-watching.svg",
        width: mobile ? "11" : "24",
        height: mobile ? "11" : "24",
      }),
  },
]);

const deleteOption = {
  label: "مسح",
  key: undefined,
};

function changeWatchStatus(key: watchStatus | undefined) {
  watchingStore.update_status(props.anime.id, key);

  setTimeout(() => {
    if (options.value.length < 4 && watchingStatus.value)
      options.value.push(deleteOption);
    if (!watchingStatus.value)
      options.value.splice(options.value.length - 1, 1);
  }, 400);
}

function renderDropdownLabel(option: DropdownOption) {
  return h(
    "span",
    {
      class: mobile
        ? "text-watch-text text-xs font-medium font-main"
        : "text-watch-text text-xl font-medium font-main",
    },
    {
      default: () => option.label as VNodeChild,
    }
  );
}

onMounted(() => {
  if (watchingStatus.value) options.value.push(deleteOption);
});
</script>

<template>
  <div
    class="bg-card-bg rounded-md shadow-anime-card flex flex-row justify-between text-right"
    :class="mobile ? 'w-[350px] h-48' : 'w-[750px] h-96'"
  >
    <!-- Content -->

    <div class="flex flex-col justify-between w-[62%] max-h-full font-main">
      <div
        class="mb-2 mx-5 flex flex-col font-medium text-watch-text text-justify"
        :class="mobile ? 'text-mobile mt-4' : 'text-base mt-8 gap-2'"
        style="direction: rtl"
      >
        <p v-if="anime.format === 'MOVIE'">الفيلم يعرض بعد</p>
        <p v-else>
          الحلقة {{ getAiredEpisodeCount(anime.start_date) + 1 }} تعرض بعد
        </p>

        <p
          class="text-next-episode"
          :class="
            mobile ? 'text-xs font-bold my-2' : 'text-[26px] font-medium my-3'
          "
        >
          {{ anime.next_episode }}
        </p>
        <p :class="mobile ? 'mb-2' : 'my-2'">
          مقتبس من: {{ getAdaptationName(anime.adaptation) }}
        </p>

        <p
          class="overflow-auto container"
          :class="mobile ? 'max-h-[72px]' : 'max-h-36'"
        >
          {{ anime.story }}
        </p>
      </div>

      <!-- Footer -->
      <div
        class="bg-card-footer w-full flex flex-row justify-between items-center"
        :class="mobile ? 'h-8 p-2.5' : 'h-16 p-5'"
      >
        <n-dropdown
          :options="options"
          :size="mobile ? 'small' : 'huge'"
          placement="top"
          @select="changeWatchStatus"
          :render-label="renderDropdownLabel"
        >
          <img
            :src="statusIcon"
            :height="mobile ? '18' : '39'"
            :width="mobile ? '18' : '39'"
            class="mr-2 cursor-pointer"
          />
        </n-dropdown>

        <div
          class="flex flex-row w-fit overflow-x-scroll container"
          :class="mobile ? 'gap-2' : 'gap-4'"
          v-dragscroll
        >
          <n-tag
            v-for="genre in anime.genres"
            :key="genre"
            round
            :size="mobile ? 'tiny' : 'large'"
            :bordered="false"
            :color="{ color: getSeasonColor(anime.season), textColor: 'white' }"
          >
            <span :class="mobile ? 'text-mobile' : 'text-lg'">
              {{ getGenreName(genre) }}
            </span>
          </n-tag>
        </div>
      </div>
    </div>

    <!-- Cover -->

    <div class="h-full w-[38%] rounded-r-md relative">
      <img
        :src="anime.cover_image"
        class="w-full h-full rounded-r-md"
        :width="mobile ? '128' : '277'"
      />
      <div
        class="absolute bottom-0 w-full bg-card-cover-bg/80 text-left rounded-br-md"
        :class="mobile ? 'min-h-[2rem] p-2' : 'min-h-[4rem] p-4'"
      >
        <p
          class="text-white font-semibold"
          :class="mobile ? 'text-xs' : 'text-xl'"
        >
          {{ anime.name }}
        </p>
        <p
          class="font-normal"
          :class="
            anime.season === 'FALL' || anime.studio === 'SPRING'
              ? 'text-spring-wine'
              : 'text-winter-torq'
          "
        >
          <span :class="mobile ? 'text-mobile' : 'text-lg'">
            {{ anime.studio }}
          </span>
        </p>
      </div>
    </div>
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

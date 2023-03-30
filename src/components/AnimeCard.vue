<script lang="ts" setup>
import { Anime } from "@/modules";
import type { watchStatus } from "@/modules";
import { getGenreName, getSeasonColor, getAdaptationName } from "@/utils";

import type { VNodeChild } from "vue";
import { ref, computed, h } from "vue";
import { NTag, NDropdown } from "naive-ui";
import type { DropdownOption } from "naive-ui";
import { dragscroll as vDragscroll } from "vue-dragscroll";

interface Props {
  anime: Anime;
}

defineProps<Props>();

const watchingStatus = ref<watchStatus | undefined>(undefined);

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
    icon: () => h("img", { src: "/watching.svg", width: "24", height: "24" }),
  },
  {
    label: "ربما أشاهده",
    key: "unsure",
    icon: () => h("img", { src: "/unsure.svg", width: "24", height: "24" }),
  },
  {
    label: "لن أشاهده",
    key: "not-watching",
    icon: () =>
      h("img", { src: "/not-watching.svg", width: "24", height: "24" }),
  },
]);

const deleteOption = {
  label: "مسح",
  key: undefined,
};

function changeWatchStatus(key: watchStatus | undefined) {
  console.log("test");
  watchingStatus.value = key;

  setTimeout(() => {
    if (options.value.length === 3) options.value.push(deleteOption);
    else options.value.splice(options.value.length - 1, 1);
  }, 400);
}

function renderDropdownLabel(option: DropdownOption) {
  if (option.type === "group") {
    return option.label as VNodeChild;
  }

  return h(
    "span",
    {
      class: "text-watch-text text-xl font-medium",
    },
    {
      default: () => option.label as VNodeChild,
    }
  );
}
</script>

<template>
  <div
    class="w-[750px] h-96 bg-card-bg rounded-md shadow-anime-card flex flex-row justify-between text-right"
  >
    <!-- Content -->

    <div class="flex flex-col justify-between w-[62%] max-h-full">
      <div
        class="mt-8 mb-2 mx-5 flex flex-col gap-2 font-medium text-base text-watch-text text-justify"
        style="direction: rtl"
      >
        <p>الحلقة 2 تعرض بعد</p>
        <p class="font-medium text-next-episode text-[26px] my-3">
          24 يوم، 21 ساعة
        </p>
        <p class="my-2">مقتبس من: {{ getAdaptationName(anime.adaptation) }}</p>

        <p class="max-h-36 overflow-auto container">{{ anime.story }}</p>
      </div>

      <!-- Footer -->
      <div
        class="bg-card-footer w-full h-16 flex flex-row justify-between items-center p-5"
      >
        <n-dropdown
          :options="options"
          size="huge"
          placement="top"
          @select="changeWatchStatus"
          :render-label="renderDropdownLabel"
        >
          <img
            :src="statusIcon"
            height="39"
            width="39"
            class="mr-2 cursor-pointer"
          />
        </n-dropdown>

        <div
          class="flex flex-row w-fit gap-4 overflow-x-scroll container"
          v-dragscroll
        >
          <n-tag
            v-for="genre in anime.genres"
            :key="genre"
            round
            size="large"
            :bordered="false"
            :color="{ color: getSeasonColor(anime.season), textColor: 'white' }"
          >
            <span class="text-lg">{{ getGenreName(genre) }}</span>
          </n-tag>
        </div>
      </div>
    </div>

    <!-- Cover -->

    <div class="h-full w-[38%] rounded-r-md relative">
      <img
        src="/media/steins;gate.jpg"
        class="w-full h-full rounded-r-md"
        width="277"
      />
      <div
        class="absolute bottom-0 w-full bg-card-cover-bg/80 p-4 text-left min-h-[4rem] rounded-br-md"
      >
        <p class="text-white text-xl font-semibold">
          {{ anime.name }}
        </p>
        <p
          class="text-lg font-normal"
          :class="
            anime.season === 'FALL' || anime.studio === 'SPRING'
              ? 'text-spring-wine'
              : 'text-winter-torq'
          "
        >
          {{ anime.studio }}
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

<script lang="ts" setup>
import { Anime } from "@/modules";
import { getGenreName } from "@/utils";

import type { VNodeChild } from "vue";
import type { DropdownOption } from "naive-ui";
import { NTag, NDropdown } from "naive-ui";
import { ref, computed, h } from "vue";

interface Props {
  anime: Anime;
}

defineProps<Props>();

type watchStatus = "not-watching" | "unsure" | "watching";

const watchingStatus = ref<null | watchStatus>(null);

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

const options = [
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
];

function changeWatchStatus(key: watchStatus | null) {
  watchingStatus.value = key;
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
    class="w-[48%] h-96 bg-card-bg rounded-sm shadow-anime-card flex flex-row justify-between text-right"
  >
    <div class="flex flex-col justify-between w-[62%] max-h-full">
      <div class="my-8 mx-5">
        <span>{{ anime.name }} </span>
      </div>
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

        <div class="flex flex-row w-fit gap-4 overflow-x-scroll container">
          <n-tag
            v-for="genre in anime.genres"
            :key="genre"
            round
            size="large"
            :bordered="false"
            :color="{ color: '#38a6a7', textColor: 'white' }"
          >
            <span class="text-lg">{{ getGenreName(genre) }}</span>
          </n-tag>
        </div>
      </div>
    </div>

    <img
      src="/media/steins;gate.jpg"
      class="h-full w-[38%] rounded-r-sm"
      width="277"
    />
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

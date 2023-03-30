<script setup lang="ts">
import { useAnimeStore } from "@/stores";
import { season } from "@/modules";
import { SiteHeader } from "@/components";

import { onMounted, ref } from "vue";

const animesStore = useAnimeStore();

const selectedSeason = ref<season>("FALL");

onMounted(() => {
  animesStore.fill();
});
</script>

<template>
  <div class="mx-44 mt-14">
    <SiteHeader
      :selected-season="selectedSeason"
      :year="2010"
      @change-season="(s) => (selectedSeason = s)"
    />

    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useAnimeStore } from "@/stores";
import { SiteHeader } from "@/components";

import { onMounted } from "vue";

document.title = "رزنمي";

const animesStore = useAnimeStore();

onMounted(() => {
  animesStore.fill();
});
</script>

<template>
  <div class="mx-44 mt-14">
    <SiteHeader />

    <router-view />
  </div>
</template>

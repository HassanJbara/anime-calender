<script setup lang="ts">
import { useAnimeStore } from "@/stores";
import { SiteHeader } from "@/components";

import { onBeforeMount } from "vue";

document.title = "رزنمي";

const animeStore = useAnimeStore();

onBeforeMount(() => {
  animeStore.fill();
});
</script>

<template>
  <transition name="fade" mode="out-in">
    <div class="mx-44 mt-14" :key="$route.path">
      <SiteHeader />

      <router-view />
    </div>
  </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

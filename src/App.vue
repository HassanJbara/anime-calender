<script setup lang="ts">
import { useAnimeStore } from "@/stores";
import { SiteHeader } from "@/components";

import { onBeforeMount, inject } from "vue";

const animeStore = useAnimeStore();

const mobile = inject<boolean>("isMobile", false);

onBeforeMount(() => {
  animeStore.fill();
});
</script>

<template>
  <transition name="fade" mode="out-in">
    <div
      :class="mobile ? 'mx-6 mt-8' : 'xl:mx-44 mx-16 mt-14'"
      :key="$route.path"
    >
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

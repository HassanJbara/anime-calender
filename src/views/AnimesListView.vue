<script lang="ts" setup>
import { formats } from "@/modules";
import { useAnimeStore } from "@/stores";
import { getFormatName, getSeasonColor } from "@/utils";
import { AnimeCard, ComingSoon } from "@/components";

import { computed, ref, inject, onBeforeMount } from "vue";
import { NSpin } from "naive-ui";

const animeStore = useAnimeStore();
const showSearch = ref<boolean>(false);
const searchValue = ref<string | undefined>(undefined);
const mobile = inject<boolean>("isMobile", false);

const animes = computed(() => {
  if (searchValue.value && showSearch.value) {
    const realValue = searchValue.value;
    return animeStore.getCurrentAnimes.filter(
      (a) =>
        a.name.toLowerCase().includes(realValue.toLowerCase()) ||
        a.studio.toLowerCase().includes(realValue.toLowerCase())
    );
  } else return animeStore.getCurrentAnimes;
});

const loading = ref(true);

onBeforeMount(() => {
  animeStore.fill().then(() => {
    loading.value = false;
  });
});
</script>

<template>
  <Transition name="fade" mode="out-in">
    <n-spin
      v-if="loading"
      :size="300"
      desctiption="...جارٍ التحميل"
      :stroke="animeStore.getSeason ? getSeasonColor(animeStore.getSeason) : ''"
      :show="loading"
      class="w-full mt-20"
    />

    <ComingSoon v-else-if="animes.length === 0" />

    <div v-else class="w-full mb-10">
      <div
        v-for="format in formats.values()"
        :key="format"
        class="flex flex-col w-full"
        :class="mobile ? 'mt-11' : 'mt-16'"
      >
        <div
          class="font-semibold font-main text-format-text text-right items-center"
          :class="mobile ? 'text-sm' : 'text-3xl'"
        >
          <div v-if="format === 'TV'" class="flex flex-row justify-between">
            <div class="flex flex-row gap-9">
              <!-- <img src="/sort.svg" width="20" /> -->

              <div class="flex flex-row">
                <img
                  src="/search.svg"
                  :width="mobile ? '16' : '28'"
                  class="cursor-pointer"
                  @click="showSearch = !showSearch"
                />

                <Transition
                  enter-active-class="duration-300 ease-out"
                  enter-from-class="transform opacity-0"
                  enter-to-class="opacity-100"
                  leave-active-class="duration-200 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="transform opacity-0"
                >
                  <input
                    v-if="showSearch"
                    type="text"
                    placeholder="ابحث باسم الأنمي أو الاستديو"
                    class="placeholder:text-right placeholder:font-main font-main rounded p-2 shadow-menu absolute"
                    :class="
                      mobile
                        ? 'w-44 h-5 ml-6 placeholder:text-xs text-xs'
                        : 'w-60 h-9 ml-10 placeholder:text-base text-lg'
                    "
                    v-model="searchValue"
                  />
                </Transition>
              </div>

              <!-- <img src="/share.svg" width="31" /> -->
            </div>

            {{ getFormatName(format) }}
          </div>

          <div v-else>
            {{ getFormatName(format) }}
          </div>
        </div>

        <div
          class="flex flex-wrap justify-between w-full"
          :class="mobile ? 'mt-5 gap-y-5' : 'mt-11 gap-y-14 gap-x-2'"
        >
          <AnimeCard
            v-for="anime in animes.filter((a) => a.format === format)"
            :key="anime.id"
            :anime="anime"
          />
        </div>
      </div>
    </div>
  </Transition>
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

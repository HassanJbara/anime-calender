<script lang="ts" setup>
import { ref, inject } from "vue";
import { vOnClickOutside } from "@vueuse/components";

interface Props {
  accentColor: string | undefined;
}

defineProps<Props>();

const showMenu = ref<boolean>(false);
const mobile = inject<boolean>("isMobile", false);
</script>

<template>
  <!-- First div is a trick  -->
  <div :class="mobile ? 'h-8 w-8 ' : 'h-20 w-20'" style="visibility: hidden" />

  <Transition
    mode="out-in"
    enter-active-class="duration-75 ease-out transition-all"
    enter-from-class="opacity-0"
    leave-active-class="duration-75 ease-out transition-all"
    leave-to-class="opacity-0"
    v-on-click-outside="() => (showMenu = false)"
  >
    <div
      v-if="!showMenu"
      @click="showMenu = true"
      class="rounded flex flex-col items-center shadow-default cursor-pointer absolute"
      :class="
        mobile
          ? 'h-8 w-8 gap-1 ' + accentColor
          : 'h-20 w-20  gap-2 ' + accentColor
      "
    >
      <div
        class="w-3/5 bg-white rounded-md"
        :class="mobile ? 'mt-2 h-[3px]' : 'mt-5 h-2'"
      />
      <div
        class="w-3/5 bg-white rounded-md"
        :class="mobile ? 'h-[3px]' : 'h-2'"
      />
      <div
        class="w-3/5 bg-white rounded-md"
        :class="mobile ? 'h-[3px]' : 'h-2'"
      />
    </div>

    <div
      v-else
      class="flex flex-col rounded shadow-menu absolute z-10 h-fit"
      :class="mobile ? 'w-[88%] min-h-[140px]' : 'w-80'"
    >
      <div class="flex flex-row rounded" :class="accentColor">
        <img
          src="/cross.svg"
          width="25"
          height="25"
          class="my-6 ml-6 cursor-pointer"
          @click="showMenu = false"
        />
      </div>

      <div
        class="flex flex-col bg-[#fcfcfc] h-full w-full px-7 py-10 items-center text-burger-text font-main font-semibold text-3xl"
      >
        <router-link
          to="/airing-schedule"
          class="flex flex-row w-11/12 items-center justify-between"
          @click="showMenu = false"
        >
          <span class="w-9/12 text-right"> جدول العرض </span>
          <img src="/calender.svg" height="35" class="float-right w-9" />
        </router-link>

        <!-- <div class="bg-burger-text self-center h-px w-4/5 my-4 opacity-60" />

        <div class="flex flex-row w-11/12 items-center justify-between">
          <span class="w-8/12 text-right"> أرشيف </span>
          <img src="/archive.svg" height="35" class="float-right w-9" />
        </div>

        <div class="bg-burger-text self-center h-px w-4/5 my-4 opacity-60" />

        <div class="flex flex-row w-11/12 items-center justify-between">
          <span class="w-8/12 text-right"> قادمة </span>
          <img src="/next.svg" height="35" class="float-right w-9" />
        </div>

        <div class="bg-burger-text self-center h-px w-4/5 my-4 opacity-60" />

        <div class="flex flex-row w-11/12 items-center justify-between">
          <span class="w-8/12 text-right"> الإعدادات </span>
          <img src="/settings.svg" height="35" class="float-right w-9" />
        </div> -->
      </div>
    </div>
  </Transition>
</template>

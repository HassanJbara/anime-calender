<script lang="ts" setup>
import { ref } from "vue";

interface Props {
  accentColor: string | undefined;
}

defineProps<Props>();

const showMenu = ref<boolean>(false);
</script>

<template>
  <!-- First div is a trick  -->
  <div
    class="h-20 w-20 rounded items-center gap-2 shadow-default"
    style="visibility: hidden"
  />

  <Transition
    mode="out-in"
    enter-active-class="duration-75 ease-out transition-all"
    enter-from-class="opacity-0"
    leave-active-class="duration-75 ease-out transition-all"
    leave-to-class="opacity-0"
  >
    <div
      v-if="!showMenu"
      @click="showMenu = true"
      class="h-20 w-20 rounded flex flex-col items-center gap-2 shadow-default cursor-pointer absolute"
      :class="accentColor"
    >
      <div class="w-3/5 h-2 bg-white mt-5 rounded-md" />
      <div class="w-3/5 h-2 bg-white rounded-md" />
      <div class="w-3/5 h-2 bg-white rounded-md" />
    </div>

    <div
      v-else
      class="flex flex-col w-80 h-[400px] rounded shadow-menu absolute"
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
        class="flex flex-col bg-[#fcfcfc] h-full w-full px-7 py-10 items-center"
      >
        <div class="flex flex-row w-11/12 items-center justify-between">
          <span class="text-burger-text font-medium text-3xl w-8/12 text-right">
            جدول العرض
          </span>
          <img src="/calender.svg" height="35" class="float-right w-9" />
        </div>

        <div class="bg-burger-text self-center h-px w-4/5 my-4 opacity-60" />

        <div class="flex flex-row w-11/12 items-center justify-between">
          <span class="text-burger-text font-medium text-3xl w-8/12 text-right">
            أرشيف
          </span>
          <img src="/archive.svg" height="35" class="float-right w-9" />
        </div>

        <div class="bg-burger-text self-center h-px w-4/5 my-4 opacity-60" />

        <div class="flex flex-row w-11/12 items-center justify-between">
          <span class="text-burger-text font-medium text-3xl w-8/12 text-right">
            قادمة
          </span>
          <img src="/next.svg" height="35" class="float-right w-9" />
        </div>

        <div class="bg-burger-text self-center h-px w-4/5 my-4 opacity-60" />

        <div class="flex flex-row w-11/12 items-center justify-between">
          <span class="text-burger-text font-medium text-3xl w-8/12 text-right">
            الإعدادات
          </span>
          <img src="/settings.svg" height="35" class="float-right w-9" />
        </div>
      </div>
    </div>
  </Transition>
</template>

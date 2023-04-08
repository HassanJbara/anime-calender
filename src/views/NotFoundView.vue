<script lang="ts" setup>
import { NResult } from "naive-ui";
</script>

<template>
  <Transition name="fade" mode="out-in">
    <n-result
      status="error"
      title="غير موجودة"
      description="لم نعثر على الصفحة التي تبحث عنها!"
      class="h-[60vh] p-10 flex flex-col items-center justify-center"
      style="direction: rtl"
    >
      <template #icon>
        <figure>
          <img
            src="/images/not-found-haruhi.gif"
            alt="haruhi staring at pc"
            width="600"
            height="600"
            class="rounded-md shadow-anime-card"
            style="direction: ltr"
          />
          <figcaption class="text-mobile">
            ©: Kyoto Animation, Kadokawa
          </figcaption>
        </figure>
      </template>
    </n-result>
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

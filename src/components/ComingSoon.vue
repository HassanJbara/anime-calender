<script setup lang="ts">
import { NResult } from "naive-ui";
</script>

<template>
  <n-result
    status="error"
    title="قريباً"
    description="حماسك أسرع من عملنا، نتمنى أن تعود لاحقاً بعد انتهائنا من تجهيز هذه الصفحة."
    class="flex flex-col gap-2 items-center justify-center h-[60vh] p-10"
    style="direction: rtl"
  >
    <template #icon>
      <figure>
        <img
          src="/images/coming-soon-haruhi.gif"
          alt="haruhi staring at pc"
          width="600"
          height="600"
          class="rounded-md shadow-anime-card"
        />
        <figcaption class="text-mobile">
          ©: Kyoto Animation, Kadokawa
        </figcaption>
      </figure>
    </template>
  </n-result>
</template>

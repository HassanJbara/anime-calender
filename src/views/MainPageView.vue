<script lang="ts" setup>
import { SiteHeader } from "@/components";
import { season } from "@/modules";
import { ref } from "vue";

const selectedSeason = ref<season | null>(null);
</script>

<template>
  <div class="mx-48 mt-14">
    <SiteHeader
      :selected-season="selectedSeason"
      :year="2010"
      @change-season="(s) => (selectedSeason = s)"
    />
  </div>
</template>

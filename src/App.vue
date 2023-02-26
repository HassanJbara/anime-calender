<script setup lang="ts">
import { useAnimeStore } from '@/stores'

import { onMounted } from 'vue'

const animesStore = useAnimeStore()

onMounted(() => {
  animesStore.fill()
})

</script>

<template>
  <router-view />
</template>

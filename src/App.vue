<script setup lang="ts">
import { HelloWorld } from '@/components'
import { useAnimeStore } from '@/stores'

import { onMounted } from 'vue'

const animesStore = useAnimeStore()

onMounted(() => {
  animesStore.fill()
})

</script>

<template>
  <HelloWorld />
</template>

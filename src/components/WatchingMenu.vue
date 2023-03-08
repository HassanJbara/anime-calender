<script lang="ts" setup>
import type { DropdownOption, DropdownGroupOption } from "naive-ui";

interface Props {
  option: DropdownOption | DropdownGroupOption;
}

const props = defineProps<Props>();

function renderIcon() {
  if (props.option.icon) return props.option.icon();
}
</script>

<template>
  <div class="flex flex-row justify-between w-48 p-8">
    <span> {{ option.label }} </span>
    <component :is="renderIcon()" />
  </div>
</template>

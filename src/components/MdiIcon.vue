<script setup>
import { computed } from "vue";

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  size: {
    type: [String, Number],
    default: null,
  },
});

const iconSize = computed(() => props.size ?? 16);
</script>

<template>
  <span class="inline-flex justify-center items-center">
    <svg
      viewBox="0 0 24 24"
      :width="iconSize"
      :height="iconSize"
      class="inline-block"
    >
      <path fill="currentColor" :d="path" />
    </svg>
    <slot />
  </span>
</template>

<script setup>
import { ref, computed, useSlots, onMounted, watch } from "vue";

const props = defineProps({
  isActive: Boolean
});

const emit = defineEmits([]);

onMounted(() => {})
</script>

<template>
  <div :class="['p-4', {'hidden':!isActive}]">
    <slot></slot>
  </div>
</template>
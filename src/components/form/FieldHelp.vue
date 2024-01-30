<script setup>
const props = defineProps({
  text: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: null
  },
});

const textColor = computed( () => {
  if(props.type === 'error') {
    return colorsText.danger
  }
  if(props.type === 'success') {
    return colorsText.success
  }
  return 'text-gray-500 dark:text-slate-400'
})
</script>

<template>
<div v-if="text" :class="['text-xs mt-1', textColor]">
    {{ text }}
</div>
</template>

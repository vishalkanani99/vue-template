<script setup>
const props = defineProps({
  vertical: {
    type: Boolean,
    default: false
  },
});

const emit = defineEmits([]);

const defaultClass = computed(() => {
  const base = [
    'shadow-md', 
    props.vertical ? 'col-span-12 sm:col-span-9' : 'col-span-12'
  ]
  return base
})

onMounted(() => {})
</script>

<template>
  <div :class="defaultClass" >
    <slot></slot>
  </div>
</template>
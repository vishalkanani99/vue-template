<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  index: {
    type: Number,
    default: 0
  },
  icon: {
    type: String,
    default: null,
  },
  iconSize: {
    type: [String, Number],
    default: null,
  },
  as: {
    type: String,
    default: null,
  },
  to: {
    type: String,
    default: null
  },
  vertical: Boolean,
  isActive: Boolean,
  disabled: Boolean
});

const emit = defineEmits([]);

onMounted(() => {})
</script>

<template>
  <Button
    :as="as"
    :to="to"
    :class="[
      'w-full',
      {'md:w-auto': !vertical}
    ]"
    :color="isActive ? '' : 'whiteDark'"
    :label="label" 
    :icon="icon" 
    :icon-size="iconSize"
    :disabled="disabled" />
</template>
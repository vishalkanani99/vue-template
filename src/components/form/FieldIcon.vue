<script setup>
defineProps({
  icon: {
    type: String,
    default: null,
  },
  isRight: Boolean,
  clickable: Boolean,
  textColor: {
      type: String,
      default: "text-gray-500"
  }
});

const emit = defineEmits(["icon-click"]);

const iconClick = e => {
  emit("icon-click", e)
}

</script>

<template>
  <MdiIcon
    :path="icon"
    :class="[
      'absolute top-0 z-10 w-10',
      isRight ? 'right-0' : 'left-0', 
      clickable ? 'cursor-pointer' : 'pointer-events-none', 
      textColor
    ]"
    size="20"
    @click="iconClick"
  />
</template>

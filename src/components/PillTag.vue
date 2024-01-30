<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: null,
  },
  iconPosition: {
    type: String,
    default: 'left',
  },
  small: Boolean,
  outline: Boolean,
  hasClickableIcon: Boolean,
});

const emit = defineEmits(["onIconClick"]);
const onIconClick = (e) => {
  emit("onIconClick", e)
}

const componentClass = computed(() => [
  props.small ? "py-1 px-3" : "py-1.5 px-4",
  props.outline ? colorsOutline[props.color] : colorsBgLight[props.color],
]);
</script>

<template>
  <div
    class="inline-flex items-center capitalize leading-none border rounded-full"
    :class="[componentClass, small ? 'text-xs' : 'text-sm']"
  >
    <MdiIcon
      v-if="icon && iconPosition === 'left'"
      :path="icon"
      h="h-4"
      w="w-4"
      :class="[small ? 'mr-1' : 'mr-2', {'cursor-pointer' : hasClickableIcon}]"
      :size="small ? 14 : null"
      @click="onIconClick"
    />
    <span>{{ label }}</span>
    <MdiIcon
      v-if="icon && iconPosition === 'right'"
      :path="icon"
      h="h-4"
      w="w-4"
      :class="[small ? 'ml-1' : 'ml-2', {'cursor-pointer' : hasClickableIcon}]"
      :size="small ? 14 : null"
      @click="onIconClick"
    />
  </div>
</template>

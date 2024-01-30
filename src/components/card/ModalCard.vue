<script setup>
import { mdiStar, mdiCart, mdiPlus, mdiHeart, mdiClose } from '@mdi/js';
const props = defineProps({
  title: String,
  height: {
    type: String,
    default: 'h-screen',
  },
  width: String,
  position: String,
  spacing: String,
  leftBtnLabel: {
    type: String,
    default: 'Save',
  },
  rightBtnLabel: {
    type: String,
    default: 'Close',
  },
});

const emit = defineEmits(['leftBtnClick', 'rightBtnClick', 'close']);

</script>
<template>
  <Card 
    :class="['!absolute z-[100] max-w-full', height, width, position, spacing]"
    contentClass="overflow-x-hidden overflow-y-auto"
    :headerClass="['flex', 'flex-row', 'justify-between', 'items-center']"
    :footerClass="['flex', 'flex-row', 'justify-between', 'items-center']">
    <template #header>
      <h2>{{ title }}</h2>
      <Button  :icon="mdiClose" roundedFull @click="$emit('close')" />
    </template>
    <slot></slot>
    <template #footer>
      <Button :label="leftBtnLabel" @click="$emit('leftBtnClick')" />
      <Button class="ml-2" color="whiteDark" :label="rightBtnLabel" @click="$emit('rightBtnClick')" />
    </template>
  </Card>
</template>
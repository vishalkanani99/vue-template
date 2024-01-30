<script setup>
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
const props = defineProps({
  title: String,
  icon: String,
  isCompact: Boolean,
});
</script>
<template>
  <li>
    <Collapse plain>
      <template #header="{ expand }">
        <div 
          class="flex items-center w-full cursor-pointer py-3 px-6 theme-hover border-b border-stone-600"
          :class="[ isCompact ? 'justify-center' : 'justify-between' ]">
          <div class="inline-flex justify-start items-center space-x-4">
            <MdiIcon v-if="icon" class="!flex-none" :path="icon" size="28" />
            <span v-if="!isCompact" class="text-ellipsis line-clamp-1">{{ title }}</span>
          </div>
          <div v-if="!isCompact" class="inline-flex justify-end items-center space-x-4">
            <Button overrideClass="flex justify-center items-center p-1" :icon="expand ? mdiChevronUp : mdiChevronDown" iconSize="24" />
          </div>
        </div>
      </template>
      <ul>
        <slot></slot>
      </ul>
    </Collapse>
  </li>
</template>
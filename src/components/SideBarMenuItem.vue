<script setup>
import { RouterLink } from 'vue-router/auto';

const props = defineProps({
  title: String,
  as: String,
  to: String,
  href: String,
  icon: String,
  isCompact: Boolean,
});

const is = computed(() => {
  if (props.as) {
    return props.as
  }
  if(props.to) {
    return RouterLink;
  }
  if(props.href) {
    return 'a';
  }
  return 'button';
});
</script>
<template>
  <li class="theme-hover border-b border-stone-600">
    <component :is="is" :to="to" :href="href" class="flex items-center cursor-pointer py-3 px-6 space-x-4" :class="{ 'justify-center' : isCompact }">
      <MdiIcon class="!flex-none" :path="icon" size="28"/>
      <span v-if="!isCompact" class="grow text-ellipsis line-clamp-1">{{ title }}</span>
    </component>
  </li>
</template>
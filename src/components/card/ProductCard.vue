<script setup>
import { mdiStar, mdiCart, mdiPlus, mdiHeart } from '@mdi/js';
const props = defineProps({
  image: String,
  title: String,
  subTitle: String,
  badgeLabel: String,
  rating: String,
  price: String,
  discountPrice: String,
});

const emit = defineEmits(['addToCart', 'addToWatchList']);

</script>
<template>
  <Card class="bg-light !rounded-xl hover:shadow-xl">
      <div class="relative flex justify-center items-center overflow-hidden rounded-xl">
        <img :src="image" />
        <span v-if="badgeLabel" class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
          {{ badgeLabel }}
        </span>
        <div v-if="rating" class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
          <MdiIcon class="w-4 h-4 text-yellow-400" :path="mdiStar" />
          <span class="ml-1 text-xs">{{ rating }}</span>
        </div>
      </div>
      
      <div class="py-4">
        <h4>{{ title }}</h4>
        <p>{{ subTitle }}</p>
      </div>

      <div class="flex items-end justify-between">
        <div class="inline-flex items-center">
          <h4>{{ price }}</h4>
          <p class="text-xs line-through">{{ discountPrice }}</p>
        </div>
        <div class="inline-flex items-center space-x-2">
          <Button :icon="mdiHeart" iconSize="24" @click="emit('addToWatchList')" />
          <Button :icon="mdiCart" iconSize="24" hasBadge @click="emit('addToCart')">
            <template #badge>
              <MdiIcon :path="mdiPlus" />
            </template>
          </Button>
        </div>
      </div>
  </Card>
</template>
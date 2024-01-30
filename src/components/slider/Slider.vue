<script setup>
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

const props = defineProps({
  slides: {
    type: Array,
    default: () => [],
  },
  hasThumbnailSelector: Boolean,
  hasIndicator: {
    type: Boolean,
    default: true,
  },
  hasAutoSlideShow: {
    type: Boolean,
    default: true,
  },
  imageHeight: {
    type: Array,
    default: () => [ 'h-[200px]', 'md:h-[500px]' ],
  },
});

let slideInterval;
const { addSwiperEvents, romoveSwiperEvents } = useSwiperEvent();
const containerRef = ref();
const contentRefs = ref([]);

const slides = ref(props.slides);
const currentSlide = shallowRef(0);
const lastSlide = shallowRef(0);

const isLastSlide = computed(() => ( currentSlide.value + 1 ) === slides.value.length);

const prevSlide = () => {
  const slide = currentSlide.value - 1;
  changeSlide(slide);
}

const nextSlide = () => {
  if(isLastSlide.value) {
    changeSlide(0);
    return;
  }
  const slide = currentSlide.value + 1;
  changeSlide(slide);
}

const clearSlideInterval = () => {
  if(slideInterval) {
    clearInterval(slideInterval);
  }
}

const changeSlide = (n) => {
  clearSlideInterval();
  
  lastSlide.value = currentSlide.value;
  currentSlide.value = n;

  if(props.hasAutoSlideShow) {
    autoSlidesShow();
  }
}

const stopDragging = (value) => {
  if( value < -50  && !isLastSlide.value ) {
    nextSlide();
  } 
  
  if( value > 50  && currentSlide.value > 0 ) {
    prevSlide();
  } 
}

const autoSlidesShow = () => {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 4000);
}

onMounted(() => {
  changeSlide(0);
  addSwiperEvents(containerRef.value, () => {}, stopDragging);
})

onUnmounted(() =>{
  clearSlideInterval();
  romoveSwiperEvents(containerRef.value);
})
</script>
<template>
  <div class="relative">
    <div ref="containerRef" class="relative flex items-center w-full h-auto overflow-hidden select-none">

      <!-- slides start -->
      <div
        ref="contentRefs" 
        v-for="(slide, index) in slides" 
        :key="index" 
        :class="[ 
          currentSlide === index ? 'block' : 'hidden',
          { 'animate-fade-in-left-fast' : lastSlide > index && currentSlide !== lastSlide },
          { 'animate-fade-in-right-fast' : lastSlide < index && currentSlide !== lastSlide },
          'w-full' 
        ]">
        <img :class="['w-full align-middle', imageHeight]" :src="slide.image" />
        <span class="absolute bottom-6 w-full py-3 px-4 text-center text-white">{{ slide.caption }}</span>
      </div>
      <!-- slides end -->

      <!-- Next and previous buttons -->
      <Button v-if="currentSlide > 0" class="absolute left-0" :icon="mdiChevronLeft" :iconSize="24" roundedFull @click="prevSlide()" />
      <Button v-if="!isLastSlide" class="absolute right-0" :icon="mdiChevronRight" :iconSize="24" roundedFull @click="nextSlide()" />
      <!-- Next and previous buttons end -->

      <!-- Indicators start -->
      <ul v-if="hasIndicator" class="absolute flex right-0 left-0 bottom-3 list-none text-white justify-center items-center">
        <li
          v-for="(slide, index) in slides" 
          :class="[ 
            'relative w-8 h-1 mx-2 grow-0 shrink-1 basis-auto cursor-pointer',
            currentSlide === index ? 'bg-light' : 'bg-dark'
          ]"
          @click="changeSlide(index)">
        </li>
      </ul>
      <!-- Indicators end -->
    </div>
    <!-- Thumbnail images -->
    <ContentSlider class="py-1" v-if="hasThumbnailSelector" :content="slides" contentWidth="w-1/3 md:w-1/5" :hasAutoSlideShow="false">
      <template #default="{item, index}">
        <div
        :class="[
          'cursor-pointer', 
          { 'opacity-50 hover:opacity-100' : currentSlide !== index }
        ]"
        @click="changeSlide(index)" >
          <img class="w-full align-middle" :src="item.image" />
        </div>
      </template>
    </ContentSlider>
    <!-- Thumbnail images end -->
  </div>
</template>
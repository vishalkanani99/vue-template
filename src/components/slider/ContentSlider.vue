<script setup>
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

const props = defineProps({
  content: {
    type: Array,
    default: () => [],
  },
  contentWidth: [String, Number ],
  scrollingValue: Number,
  hasAutoSlideShow: {
    type: Boolean,
    default: true,
  },
});

let slideInterval;
const { initSwiper, clearSwiper } = useSwiper();
const contentRefs = ref([]);
const containerRef = ref();

const position = shallowRef(0);
const scrollWidth = shallowRef(0);
const offsetWidth = shallowRef(0);
const blockWidth = shallowRef(0);

const hasMaxScrolled = computed(() => ( offsetWidth.value + position.value ) >= scrollWidth.value );
const hasMinScrolled = computed(() => position.value <= 0 );

const initSlider = () => {
  blockWidth.value = props.scrollingValue || (contentRefs.value.length > 0 ? contentRefs.value[0].offsetWidth : 0);
  offsetWidth.value = containerRef.value.offsetWidth;
  scrollWidth.value = containerRef.value.scrollWidth;

  if(props.hasAutoSlideShow) {
    autoSlideShow();
  }
}

const clearSlideInterval = () => {
  if(slideInterval) {
    clearInterval(slideInterval);
  }
}

const validatePosition = () => {
  if(hasMaxScrolled.value) {
    position.value = scrollWidth.value - offsetWidth.value;
  }
  if(hasMinScrolled.value) {
    position.value = 0;
  }
}

const dragging = (value) => {
  clearSlideInterval();
  containerRef.value.scrollLeft = position.value - value;
}

const stopDragging = (value) => {
  position.value = position.value - Math.round(value/blockWidth.value) * blockWidth.value;
  changeSlide();
}

const nextSlide = () => {
  position.value = hasMaxScrolled.value ? 0 : position.value + blockWidth.value;
  changeSlide();
}

const prevSlide = () => {
  position.value = hasMinScrolled.value ? 0 : position.value - blockWidth.value;
  changeSlide();
}

const changeSlide = () => {
  clearSlideInterval();
  validatePosition();
  containerRef.value.scrollLeft = position.value;
  
  if(props.hasAutoSlideShow) {
    autoSlideShow();
  }
}

const autoSlideShow = () => {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 4000);
}

onMounted(() => {
  initSlider();
  initSwiper(containerRef.value, dragging, stopDragging);
})

onUnmounted(() =>{
  clearSlideInterval();
  clearSwiper(containerRef.value);
})
</script>
<template>
  <div class="relative flex items-center">
    
    <!-- Next and previous buttons -->
    <Button v-show="!hasMinScrolled" class="absolute left-0 z-10" :icon="mdiChevronLeft" :iconSize="24" roundedFull @click="prevSlide()" />
    <Button v-show="!hasMaxScrolled" class="absolute right-0 z-10" :icon="mdiChevronRight" :iconSize="24" roundedFull @click="nextSlide()" />
    <!-- Next and previous buttons end -->

    <div 
      ref="containerRef" 
      :class="[
        [ 
         !contentWidth 
            ? 'grid grid-flow-col auto-cols-[100%] md:auto-cols-[calc(100%/3)] lg:auto-cols-[calc(100%/5)]'
              : 'flex flex-row flex-nowrap items-center',
        ],
        'overflow-hidden select-none scroll-smooth cursor-pointer',
      ]">
      <div
        :class="[contentWidth ? `shrink-0 ${contentWidth}` : 'w-full']"
        ref="contentRefs" 
        v-for="(item, index) in content" >
          <slot :item="item" :index="index" ></slot>
      </div>
    </div>

  </div>
</template>
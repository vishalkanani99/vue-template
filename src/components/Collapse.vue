<script setup>
import { mdiPlus, mdiMinus } from '@mdi/js';

const props = defineProps({
  expanded: {
    type: Boolean,
    default: false,
  },
  plain: Boolean,
  title: String,
});

const emit = defineEmits(["toggle"]);

const containerRef = ref(null);
const wrapperRef = ref(null);
const contentRef = ref(null);
const expand = shallowRef(false);

const toggle = () => {
  expand.value = !expand.value;
  emit("toggle", containerRef.value);

  setMaxHeight(0);
  if( expand.value ) {
    setMaxHeight(contentRef.value.offsetHeight);
  }
}

const setMaxHeight = (height) => {
  wrapperRef.value.style.maxHeight = `${height}px`;
}

defineExpose({
  containerRef,
  setMaxHeight,
  expand,
})

onMounted(() => {
  if(props.expanded){
    toggle();
  }
})

</script>
<template>
  <div
    ref="containerRef" 
    :class="{ 'border-2 shadow-md block' : !plain }">
    <!-- header start -->
    <div 
      :class="[
        'flex flex-row flex-wrap justify-between items-center cursor-pointer',
        { 'border-b-2 py-3 px-6' : !plain },
      ]"
      @click="toggle()">
      <slot name="header" :expand="expand">
        <div class="order-first">
          <slot name="title">
            <h4>{{ title }}</h4>
          </slot>
        </div>
        <div class="order-last">
          <slot name="button" :expand="expand">
            <Button class="focus:!ring-0 !bg-light hover:bg-stone-200" color="white" :icon="expand ? mdiMinus : mdiPlus" />
          </slot>
        </div>
      </slot>
    </div>
    <!-- header end -->
    <!-- content start -->
    <div
      ref="wrapperRef"
      class="max-h-0 transition-[max-height] delay-0 duration-500 ease-in-out overflow-hidden">
      <div 
        ref="contentRef">
        <slot></slot>
      </div>
    </div>
    <!-- content end -->
  </div>
</template>
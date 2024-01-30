<script setup>
  import { mdiClose } from '@mdi/js';

  const props = defineProps({
    modelValue: Boolean,
    immortal: {
      type: Boolean,
      default: true,
    },
    hasCloseBtn: Boolean,
    closeBtnPosition: {
      type: String,
      default: 'left',
      validator(value) {
        // The value must match one of these strings
        return ['left', 'right'].includes(value)
      }
    },
  })

  const emit = defineEmits(["update:modelValue"]);

  const showOverLayer = computed({
    get: () => props.modelValue,
    set: (value) => {
      emit('update:modelValue', value);
    }
  });

  const close = (type = 'overlayer') => {
    if(props.immortal && type === 'overlayer') {
      return;
    }
    showOverLayer.value = false;
  }

  const btnPosition = computed(() => {
    let position = 'left-0';
    if( props.closeBtnPosition === 'right' ) {
      position = 'right-0';
    }
    return position;
  })
</script>
<template>
  <div
    v-show="showOverLayer" 
    class="fixed flex flex-col z-[90] justify-center items-center inset-0 overflow-hidden">
      <div 
        :class="['absolute inset-0 bg-light opacity-80', { 'cursor-pointer': !immortal }]" 
        @click="close()">
      </div>
      <slot></slot>
      <Button 
        v-if="hasCloseBtn" 
        :class="[
          'fixed top-0 z-[100] m-2 p-2',
          btnPosition,
        ]" 
        :icon="mdiClose" roundedFull 
        @click="close('button')" 
      />
  </div>
</template>
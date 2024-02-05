<script setup>
const props = defineProps({
  modelValue: Boolean,
  immortal: Boolean,
  from: {
    type: String,
    default: 'top',
    validator(value) {
      // The value must match one of these strings
      return ['left', 'right', 'top', 'bottom'].includes(value)
    }
  },
  height: {
    type: [String, Array],
    default: 'h-dvh',
  },
  width: [String, Array],
  position: [String, Array],
  spacing: [String, Array],
  title: String,
  leftBtnLabel: {
    type: String,
    default: 'Save',
  },
  rightBtnLabel: {
    type: String,
    default: 'Close',
  },
});

const emit = defineEmits(["update:modelValue", "leftBtnClick"])

const showModal = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value);
  }
});

const transformClasses = computed(() => {
  let position = showModal.value ? 'translate-x-0' : '-translate-x-full';
  if( props.from === 'right' ) {
    position = showModal.value ? 'translate-x-0' : 'translate-x-full';
  }
  if( props.from === 'top' ) {
    position = showModal.value ? 'translate-y-0' : '-translate-y-full';
  }
  if( props.from === 'bottom' ) {
    position = showModal.value ? 'translate-y-0' : 'translate-y-full';
  }
  return position;
});

const closeModal = (type = 'overlayer') => {
  if(props.immortal && type === 'overlayer') {
    return;
  }
  showModal.value = false;
};
</script>
<template>
  <div
    :class="transformClasses" 
    class="fixed flex flex-col z-[90] justify-center items-center inset-0 overflow-hidden transition-all">
      <div 
        :class="['absolute inset-0 bg-light opacity-80', { 'cursor-pointer': !immortal }]" 
        @click="closeModal()">
      </div>
      <ModalCard
        :title="title"
        :leftBtnLabel="leftBtnLabel"
        :rightBtnLabel="rightBtnLabel"
        :height="height" 
        :width="width" 
        :position="position" 
        :spacing="spacing" 
        @close="closeModal()" 
        @rightBtnClick="closeModal()" 
        @leftBtnClick="emit('leftBtnClick')">
        <slot></slot>
      </ModalCard>
  </div>
</template>
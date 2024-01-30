<script setup>
const props = defineProps({
  headerClass: [String, Array],
  footerClass: [String, Array],
  contentClass: [String, Array],
});
const slots = useSlots();
const hasHeader = computed(() => slots.header);
const hasFooter = computed(() => slots.footer);
</script>
<template>
  <div class="relative flex flex-col bg-white border min-w-0 rounded-md shadow-md">
    <!-- card header -->
    <div v-if="hasHeader" :class="['relative bg-transparent border-b rounded-t-md p-4', headerClass]">
      <slot name="header"></slot>
    </div>
    <!-- card header end -->

    <!-- card body -->
    <div :class="['relative flex-auto bg-transparent p-4', contentClass]">
      <slot></slot>
    </div>
    <!-- card body end -->

    <!-- card footer -->
    <div v-if="hasFooter" :class="['relative bg-transparent border-t rounded-b-md p-4', footerClass]">
      <slot name="footer"></slot>
    </div>
    <!-- card footer end -->
  </div>
</template>
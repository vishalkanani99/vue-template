<script setup>
  const props = defineProps({
    content: {
      type: Array,
      default: () => [],
    }, 
  });

  const CollapseRefs = ref([]);
  const close = (value) => {
    CollapseRefs.value.forEach((e) => {
      if( !(e.containerRef === value) ){
        if(e.expand) {
          e.setMaxHeight(0);
          e.expand = false;
        }
      }
    })
  }
</script>
<template>
  <Collapse
    ref="CollapseRefs"
    v-for="(data, index) in content"
    :key="index"
    :expanded="data?.expanded"
    @toggle="close" 
  >
    <template #title>
      <slot name="title" :data="data" :index="index"></slot>
    </template>
    <div class="py-3 px-6">
      <slot :data="data" :index="index" ></slot>
    </div>
  </Collapse>
</template>
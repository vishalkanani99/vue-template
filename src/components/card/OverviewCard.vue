<script setup>
const props = defineProps({
  title: String,
  subTitle: String,
  note: String,
  imageSrc: String,
  status: String,
  statusColor: String,
});
</script>
<template>
  <Card class="hover:shadow-lg transition-shadow duration-500">
    <div class="flex flex-row flex-wrap md:flex-nowrap justify-center md:justify-start items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
      <div class="flex flex-col items-center w-full md:w-auto">
        <slot name="image">
          <div class="w-20 h-20">
            <img class="w-full h-full" :src="imageSrc" />
          </div>
        </slot>
      </div>
      <div class="flex flex-col w-full md:w-1/2 justify-center md:justify-start items-center md:items-start self-start text-justify">
        <slot>
          <h4>{{ title }}</h4>
          <h6>{{ subTitle }}</h6>
          <p>{{ note }}</p>
        </slot>
      </div>
      <div class="grow flex flex-col md:flex-row justify-end items-center space-x-0 md:space-x-2 space-y-2 md:space-y-0">
        <slot name="action">
          <PillTag :label="status" :color="statusColor" />
          <div class="flex justify-start items-center space-x-2">
            <slot name="actionButtons"></slot>
          </div>
        </slot>
      </div>
    </div>
  </Card>
</template>
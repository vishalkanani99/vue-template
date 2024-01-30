<script setup>
import { mdiClose } from "@mdi/js";

const props = defineProps({
  lifetime: {
    type: Number,
    required: true,
    validator(value) {
      return value >= 0
    }
  },
  timestamp: {
    type: Number,
    required: true
  },
  icon: {
    type: String,
    default: null
  },
  title: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true,
    validator(value) {
      return ["contrast", "info", "success", "warning", "danger"].indexOf(value) > -1
    }
  },
  position: {
    type: String,
    default: 'left',
    validator(value) {
      return ["left", "center", "right"].indexOf(value) > -1
    }
  },
  hasCancelBtn: {
    type: Boolean,
    default: true,
  },
  html: Boolean,
});

const emit = defineEmits(["cancel"]);

const showSnackbarItem = ref(true)

const defaultClass = computed(() => {
  let position = { left: 'self-start', center: 'self-center', right: 'self-end' }
  const defaultClass = [
    colorsBgLight[props.color],
    'relative shadow-lg w-96 max-w-full text-sm pointer-events-auto rounded-lg mb-3',
    position[props.position]
  ]
  return defaultClass
})

setTimeout(() => {
  cancel()
}, props.lifetime)

const cancel = () => {
  showSnackbarItem.value = false
  setTimeout(() => {
    emit("cancel", props.timestamp)
  }, 250)
}

onMounted(() => { })
</script>

<template>
  <div v-if="showSnackbarItem" :class="defaultClass">
    <div class="absolute right-0 top-0 m-1">
      <Button v-if="hasCancelBtn" :color="color" :icon="mdiClose" roundedFull @click.prevent="cancel" />
    </div>
    <div v-if="title" class="flex justify-between items-center py-2 px-3 border-b rounded-t-lg">
      <h4 class="text-white flex items-center">
        <MdiIcon v-if="icon" :path="icon" />
        {{ title }}
      </h4>
    </div>
    <div v-if="html" v-html="text" class="p-3 rounded-b-lg break-words text-white"></div>
    <div v-else v-text="text" class="p-3 rounded-b-lg break-words text-white"></div>
  </div>
</template>

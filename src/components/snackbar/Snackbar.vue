<script setup>
const props = defineProps({
  launchFrom: {
    type: String,
    default: 'bottom',
    validator(value) {
      return ["top", "bottom"].indexOf(value) > -1
    }
  },
});

const emit = defineEmits([]);

const { messages, cancel: cancelSnackbarMessage } = useSnackbar();
const snackbarItems = computed(() => messages[props.launchFrom])

const defaultClass = computed(() => {
    let launchFrom = { top:'flex-col', bottom:'flex-col-reverse'}
    const defaultClass = [
      "fixed inset-0 flex p-9 overflow-hidden z-[100] pointer-events-none",
      launchFrom[props.launchFrom]
    ]
    return defaultClass
})

const cancel = (timestamp) => {
  cancelSnackbarMessage(timestamp, props.launchFrom)
}

onMounted(() => {})
</script>

<template>
  <div :class="defaultClass">
      <SnackbarItem
          :class="[launchFrom === 'top' ? 'animate-fade-in-down-fast' : 'animate-fade-in-up-fast']"
          v-for="v in snackbarItems" 
          :key="v.timestamp"
          :title="v.title"
          :icon="v.icon"
          :hasCancelBtn="v.hasCancelBtn"
          :timestamp="v.timestamp"
          :lifetime="v.lifetime"
          :text="v.text"
          :color="v.color"
          :position="v.position"
          :html="v.html"
          @cancel="cancel">
      </SnackbarItem>
  </div>
</template>
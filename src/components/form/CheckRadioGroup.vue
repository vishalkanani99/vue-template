<script setup>
const props = defineProps({
  options: {
    type: Object,
    default: () => {},
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "checkbox",
    validator: (value) => ["checkbox", "radio", "switch"].includes(value),
  },
  isColumn: Boolean,
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
    default: null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div
    class="flex justify-start flex-wrap"
    :class="{ 'flex-col': isColumn }"
  >
    <CheckRadio
      v-for="(value, key) in options"
      :key="key"
      v-model="computedValue"
      :type="type"
      :name="name"
      :value="value"
      :label="key"
      class="mr-6 mb-3 last:mr-0 last:mb-0"
    />
  </div>
</template>

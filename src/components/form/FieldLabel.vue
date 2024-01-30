<script setup>
const props = defineProps({
  label: {
    type: String,
    default: null
  },
  labelFor: {
    type: String,
    default: null,
  },
  help: {
    type: String,
    default: null
  },
  horizontal: Boolean,
  addons: Boolean,
  grouped: Boolean,
  multiline: Boolean,
  errors: {
    type: Array,
    default: []
  },
  error: {
    type: String,
    default: null
  },
  success: {
    type: String,
    default: null
  },
  baseClass: {
    type: Array,
    default: []
  },
  wrapperClass: {
    type: Array,
    default: []
  },
  labelClass: {
    type: Array,
    default: []
  },
});

const slots = useSlots();

const baseClass = computed(() => {
  const baseClass = [
    'last:mb-0',
    props.multiline ? "-mb-3" : "mb-6"
  ]
  if(props.horizontal){
    baseClass.push("grid grid-cols-1 lg:gap-6 lg:grid-cols-5")
  }
  return props.baseClass.length > 0 ? props.baseClass : baseClass
});

const wrapperClass = computed(() => {
  const base = [];
  const slotsLength = slots.default().length;

  if(props.horizontal){
    base.push("lg:col-span-4")
    if(props.label){
      base.push("lg:col-start-2")
    }
  }

  if(props.grouped){
    base.push("space-x-3")
  }

  if(props.multiline){
    base.push("flex-wrap")
  }

  if(props.addons || props.grouped || props.multiline)
  {
    base.push("flex justify-start")
    return base;
  }

  if (slotsLength > 1) {
    base.push("grid grid-cols-1 gap-3");
  }

  if (slotsLength === 2) {
    base.push("md:grid-cols-2");
  }

  if (slotsLength >= 3) {
    base.push("md:grid-cols-3");
  }

  return props.wrapperClass.length > 0 ? props.wrapperClass : base;
});

const labelClass = computed(() => {
  const labelClass = ['block font-bold mb-2']
  if(props.horizontal){
    labelClass.push("lg:mb-0")
  }
  if(props.errors.length > 0 || props.error){
    labelClass.push(colorsText.danger)
  }
  if(props.success){
    labelClass.push(colorsText.success)
  }
  return props.labelClass.length > 0 ? props.labelClass : labelClass
});

</script>

<template>
  <div 
    :class="baseClass">
    <label v-if="label" :for="labelFor" :class="labelClass">{{
      label
    }}</label>
    <div :class="wrapperClass">
      <slot v-if="slots.leftAddon" name="leftAddon"></slot>
      <slot />
      <slot v-if="slots.rightAddon" name="rightAddon"></slot>
    </div>
    <FieldHelp :text="error" type="error" :class="[{'lg:col-start-2 lg:col-span-4 lg:-mt-5' : horizontal}, 'has-error']"/>
    <FieldHelp v-for="(err, i) in errors" :key="i" :text="err" type="error" :class="[{'lg:col-start-2 lg:col-span-4 lg:-mt-5' : horizontal}, 'has-error']"/>
    <FieldHelp :text="success" type="success" :class="[{'lg:col-start-2 lg:col-span-4 lg:-mt-5' : horizontal}, 'has-success']"/>
    <FieldHelp :text="help" :class="[{'lg:col-start-2 lg:col-span-4 lg:-mt-5' : horizontal}, 'has-help']"/>
  </div>
</template>

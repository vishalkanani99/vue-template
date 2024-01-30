<script setup>
const props = defineProps({
  firstAddon: Boolean,
  middleAddon: Boolean,
  lastAddon: Boolean,
  expanded: Boolean,
  iconLeftClickable: Boolean,
  iconRightClickable: Boolean,
  inputW: {
    type: String,
    default: "w-full"
  },
  help: {
    type: String,
    default: null
  },
  name: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: null,
  },
  min: {
    type: [String, Number],
    default: null
  },
  max: {
    type: [String, Number],
    default: null
  },
  required: Boolean,
  autocomplete: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
  iconLeft: {
    type: String,
    default: null
  },
  iconRight: {
    type: String,
    default: null
  },
  error: {
    type: String,
    default: null
  },
  errors: {
    type: Array,
    default: []
  },
  success: {
    type: String,
    default: null
  },
  inputmode: {
    type: String,
    default: null,
  },
  options: {
    type: Array,
    default: null,
  },
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object],
    default: "",
  },
  buttonLabel: {
    type: String,
    default: null
  },
  buttonIcon: {
    type: String,
    default: null
  },
  buttonIconSize: {
    type: [String, Number],
    default: 20,
  },
  buttonColor: String,
  borderless: Boolean,
  tipLeft: {
    type: String,
    default: null
  },
  tipRight: {
    type: String,
    default: null
  },
  transparent: Boolean,
  disabled: Boolean,
  hasError: [Boolean, String, Number],
});

const emit = defineEmits(["update:modelValue", "input", "iconRightClick", "iconLeftClick", "click"]);

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});

const hasError = computed(() => props.errors.length > 0 || props.error || props.hasError);
const borderColor = computed(() => {
  if( hasError.value ) {
    return "border-red-600";
  }
  if( props.success ) {
    return "border-emerald-600";
  }
  return "border-stone-700"; 
})

const placeholderColor = computed(() => {
  if(hasError.value) {
    return "placeholder-red-300";
  }
  if(props.success) {
    return "placeholder-emerald-300";
  }
  return 'placeholder-stone-400'; 
})

const iconColor = computed(() => { 
  if(hasError.value) {
    return colorsText.danger;
  }
  if(props.success) {
    return colorsText.success;
  }
  return 'text-stone-600';
})

const isAddon = computed(() => props.firstAddon || props.lastAddon || props.middleAddon);
const borderClass = computed(() => {
    const borderClass = [ borderColor.value ];
    
    if( props.borderless || props.type === 'textarea' ){
      return borderClass;
    }

    borderClass.push("border-t border-b");

    if( !isAddon.value ){
      borderClass.push("rounded border-l border-r");
      return borderClass;
    } 

    if( props.firstAddon ) {
      borderClass.push("rounded-l border-l")
    }

    if( props.lastAddon ) {
      borderClass.push("rounded-r border-r")
    }

    return borderClass
})

const inputClass = computed(() => {

  const height = "h-10";
  const padding = "px-3 py-2";
  
  if( props.type === 'button' ) {
    return [ 
      "!border-0 !rounded-none focus:!ring", 
      height, 
      padding 
    ];
  }

  const base = [
    "max-w-full focus:ring ring-stone-300 focus:outline-none",
    padding,
    props.inputW,
    props.type === "textarea" ? "h-24" : height,
    props.borderless || props.type !== 'textarea' ? "border-0" : "border",
    props.borderless ? "bg-stone-50" : "",
    props.transparent ? "bg-transparent" : "bg-light",
  ];

  if(hasError.value){
    base.push(colorsText.danger)
  }

  if(props.success){
    base.push(colorsText.success)
  }

  if(placeholderColor.value){
    base.push(placeholderColor.value)
  }

  if( !isAddon.value ){
    base.push("rounded")
  } 

  if(props.firstAddon) {
    base.push("rounded-l")
  }

  if(props.lastAddon) {
    base.push("rounded-r")
  }

  if(props.iconLeft){
    base.push("pl-10");
  }

  if(props.iconRight){
    base.push("pr-10");
  }

  return base;
});

const controlIconH = computed(() =>
  props.type === "textarea" ? "h-full" : "h-10"
);

const customEvent = (mode, e) => {
  emit(mode, e)
}
</script>

<template>
  <div :class="[ expanded ? 'grow shrink' : '' ]">
    <div :class="['relative', borderClass]">
      <div
        v-if="type === 'static'"
        :id="id"
        :class="[inputClass, 'inline-flex items-center whitespace-nowrap']"
      >
        <slot name="static">
          {{placeholder}}
        </slot>
      </div>
      <Button
        v-else-if="type === 'button'"
        :id="id"
        :class="inputClass"
        :color="buttonColor"
        :icon-size="buttonIconSize"
        :icon="buttonIcon"
        :label="buttonLabel"
        :disabled="disabled"
        @click="customEvent('click', $event)"
      />
      <select
        v-else-if="type === 'select'"
        :id="id"
        v-model="computedValue"
        :name="name"
        :class="inputClass"
        :disabled="disabled"
        @input="customEvent('input', $event)"
      >
        <slot name="options">
          <option
            v-for="option in options"
            :key="option.id ?? option"
            :value="option"
          >
            {{ option.label ?? option }}
          </option>
        </slot>
      </select>
      <textarea
        v-else-if="type === 'textarea'"
        :id="id"
        v-model="computedValue"
        :class="inputClass"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        @input="customEvent('input', $event)"
      />
      <input
        v-else
        :id="id"
        v-model="computedValue"
        :name="name"
        :inputmode="inputmode"
        :autocomplete="autocomplete"
        :required="required"
        :placeholder="placeholder"
        :type="type"
        :class="inputClass"
        :min="min"
        :max="max"
        :disabled="disabled"
        @input="customEvent('input', $event)"
      />
      <FieldIcon
        v-if="iconLeft"
        :class="controlIconH" 
        :icon="iconLeft"
        :clickable="iconLeftClickable" 
        @iconClick="customEvent('iconLeftClick', $event)"
        :textColor="iconColor"
      />
      <FieldIcon 
        v-if="iconRight"
        :class="controlIconH" 
        :icon="iconRight" 
        is-right 
        :clickable="iconRightClickable"
        @iconClick="customEvent('iconRightClick', $event)"
        :textColor="iconColor"
      />
      <TipTag v-if="tipLeft" :tip="tipLeft" left/>
      <TipTag v-if="tipRight" :tip="tipRight" right/>
    </div>
    <FieldHelp :text="error" type="error" class="has-error"/>
    <FieldHelp v-for="(err, i) in errors" :key="i" :text="err" type="error" class="has-error"/>
    <FieldHelp :text="success" type="success" class="has-success"/>
    <FieldHelp :text="help" class="has-help"/>
  </div>
</template>

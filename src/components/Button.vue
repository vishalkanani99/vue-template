<script setup>
import { RouterLink } from 'vue-router/auto';

const props = defineProps({
  overrideClass: [String, Array],
  label: [String, Number],
  icon: String,
  iconRight: String,
  iconSize: [String, Number],
  href: String,
  target: String,
  to: String,
  type: String,
  color: String,
  badgeColor: String,
  badgeLabel: String,
  as: String,
  hasBadge: Boolean,
  small: Boolean,
  outline: Boolean,
  active: Boolean,
  disabled: Boolean,
  roundedFull: Boolean,
});

const is = computed(() => {
  if (props.as) {
    return props.as
  }

  if (props.to) {
    return RouterLink
  }

  if (props.href) {
    return 'a'
  }

  return 'button'
})

const computedType = computed(() => {
  if (is.value === "button") {
    return props.type ?? "button";
  }

  return null;
});

const labelClass = computed(() => {
  let labelClass = [
    props.small && props.icon ? "px-1" : "px-2"
  ]
  return labelClass
});

const defaultClass = computed(() => {
  const base = [
    "inline-flex",
    "justify-center",
    "items-center",
    "whitespace-nowrap",
    "focus:outline-none",
    "transition-colors",
    "focus:ring-1",
    "duration-150",
    "border",
    props.disabled ? "cursor-not-allowed" : "cursor-pointer",
    props.roundedFull ? "rounded-full" : "rounded",
    props.color ? 
      getButtonColor(props.color, props.outline, !props.disabled, props.active) : 
        'theme-btn',
  ];

  if (!props.label && props.icon) {
    base.push("p-1");
  } else if (props.small) {
    base.push("text-sm", props.roundedFull ? "px-3 py-1" : "p-1");
  } else {
    base.push("py-2", props.roundedFull ? "px-6" : "px-3");
  }

  if (props.disabled) {
    base.push(props.outline ? "opacity-50" : "opacity-70");
  }

  if (props.hasBadge) {
    base.push('relative');
  }

  return base;
});

const badgeClasses = computed(() => {
  let classes = ['absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full -top-2 -end-2'];
  if(props.badgeColor) {
    classes.push(getButtonColor(props.badgeColor, false, true, false));
    return classes;
  }
  classes.push('theme-btn');
  return classes;
})
</script>

<template>
  <component
    :is="is"
    :class="overrideClass ? overrideClass : defaultClass"
    :to="to"
    :href="href"
    :type="computedType"
    :target="target"
    :disabled="disabled"
  >
    <MdiIcon v-if="icon" :path="icon" :size="iconSize" />
    <span v-if="label" :class="labelClass">{{ label }}</span>
    <MdiIcon v-if="iconRight" :path="iconRight" :size="iconSize" />
    <div v-if="hasBadge" :class="badgeClasses">
      <slot name="badge">{{ badgeLabel }}</slot>
    </div>
  </component>
</template>

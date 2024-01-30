<script setup>
const props = defineProps({
    tip: {
        type: String,
        default: null
    },
    left: Boolean,
    right: Boolean,
    top: Boolean
});

const emit = defineEmits([]);

const defaultClass = computed(() => {
    const defaultClass = [
        "absolute z-20 flex flex-col pt-1 animate-fade-in",
        props.top ? "bottom-full flex-col-reverse" : "top-full",
        {
            "inset-x-auto": !props.left && !props.right,
            "left-0": props.left,
            "right-0": props.right
        }
    ]

    return defaultClass
})

const wrapperClass = computed(() => {
    const wrapperClass = [
        "text-black text-opacity-80 h-3 dark:text-gray-800",
        {
            "mx-auto": !props.left && !props.right,
            "ml-auto mr-1.5": props.right,
            "mr-auto ml-1.5": props.left
        }
    ]

    return wrapperClass
})

onMounted(() => {})
</script>

<template>
  <div :class="defaultClass">
    <div :class="wrapperClass">
        <svg viewBox="0 0 100 50" width="100" height="50" class="w-auto h-3">
            <polygon fill="currentColor" :points="top ? '0,0 100,0 50,50' : '50,0 100,50 0,50'"></polygon>
        </svg>
    </div>
    <div class="bg-black bg-opacity-80 text-white text-sm rounded px-3 py-1 shadow-lg dark:bg-slate-800">
        {{ tip }}
    </div>
  </div>
</template>
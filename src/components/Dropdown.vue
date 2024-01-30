<script setup>
import { mdiMenuDown, mdiMenuUp } from '@mdi/js'

const props = defineProps({
  btnLabel: String,
  items: {
    type: Array,
    default: () => [],
  },
  btnColor: String,
});

const { useThrottle } = useLodash();

const dropdownRef = ref(null);
const selectorRef = ref(null);
const showList = shallowRef(false);

const toggle = useThrottle(() => {
  showList.value = !showList.value;
})

const trackClickEvent = (el) => {
  const isSelectorRefAsTargetEl = selectorRef.value && selectorRef.value.contains(el.target);
  const isDropdownRefContainTargetEl = dropdownRef.value && dropdownRef.value.contains(el.target);
  if(isSelectorRefAsTargetEl || isDropdownRefContainTargetEl) {
    return;
  }
  showList.value = false;
}

const btnIcon = computed(() => showList.value ? mdiMenuUp : mdiMenuDown );

onMounted(() => {
  document.addEventListener('click', trackClickEvent);
})
</script>
<template>
  <div class="relative select-none">
    <div ref="selectorRef" @click="toggle()">
      <slot name="selector" :btnIcon="btnIcon">
        <Button :label="btnLabel" :color="btnColor" :iconRight="btnIcon" />
      </slot>
    </div>
    <Transition name="fade" mode="out-in">
      <div
        v-if="showList"
        ref="dropdownRef"
        class="absolute top-full right-0 xl:left-0 min-w-max bg-light z-10 shadow-md rounded-md mt-1">
        <slot>
          <ul class="p-1 w-56">
            <li 
              v-for="(item, index) in items" :key="index" 
              class="flex items-center">
              <slot name="items" :item="item" :key="index">
                <Button :to="item.route" overrideClass="grow bg-transparent p-2 theme-hover" :label="item.label" />
              </slot>
            </li>
          </ul>
        </slot>
      </div>
    </Transition>
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
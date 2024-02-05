<script setup>
import { 
  mdiHomeOutline, 
  mdiStore,
  mdiShopping, 
  mdiCartOutline, 
  mdiHeart, 
  mdiFormatListText,
  mdiAccount,
  mdiMapMarker,
  mdiBookOpenPageVariantOutline,
  mdiAccountKey,
  mdiWebCancel, 
  mdiClose, 
  mdiChevronDoubleRight, 
  mdiChevronDoubleLeft 
} from '@mdi/js';

const props = defineProps({
  modelValue: Boolean,
  immortal: Boolean,
  position: {
    type: String,
    default: 'left',
    validator(value) {
      // The value must match one of these strings
      return ['left', 'right'].includes(value)
    }
  }
});

const emit = defineEmits(["update:modelValue"])
const compact = shallowRef(false);

const showSideBar = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value);
  }
});

const toggleBaseClasses = computed(() => {
  let position = showSideBar.value ? 'left-0' : '-left-full -translate-x-full';
  if( props.position === 'right' ) {
    position = showSideBar.value ? 'right-0' : '-right-full translate-x-full';
  }
  return position;
});

const closeBtnPosition = computed(() => props.position === 'right' ? '-left-8' : '-right-8' );

const closeSideBar = () => {
  showSideBar.value = false;
}
</script>

<template>
  <div>
    <OverLayer 
      v-model="showSideBar"
      :immortal="immortal"
       @update:modelValue="closeSideBar()" />
    <aside
      :class="[
        toggleBaseClasses,
        compact ? 'w-28 xs:w-32' : 'w-52 xs:w-72'
      ]" 
      class="flex items-center fixed inset-y-0 z-[100] max-h-dvh max-w-full transition-all px-2 md:px-4">
      <div 
        :class="[
          'flex flex-col h-screen py-2 md:py-4',
          compact ? 'w-24 xs:w-28' : 'w-48 xs:w-64'
        ]">
        <!-- header start-->
        <div class="relative flex flex-row h-14 items-center bg-dark rounded-t-md">
          <slot name="header">
            <h4 class="flex-1 text-center" :class="{'text-sm' : compact}">Dmantu</h4>
          </slot>
          <Button
            :class="[
              closeBtnPosition,
              'absolute w-8 h-8'
            ]"
            :icon="mdiClose"
            roundedFull 
            @click="closeSideBar()" 
          />
        </div>
        <!-- header end-->
        
        <!-- content start-->
        <div class="flex-1 overflow-y-auto overflow-x-hidden bg-light">
          <slot>
            <ul>
              <SideBarMenuItem to="/" :icon="mdiHomeOutline" title="Home" :isCompact="compact" />
              <SideBarMenuItem to="/shop" :icon="mdiStore" title="Shop" :isCompact="compact" />
              <SidebarDropdown :icon="mdiShopping" title="Ecommerce" :isCompact="compact" >
                <SideBarMenuItem to="/shop/single" :icon="mdiFormatListText" title="Product Detail" :isCompact="compact" />
                <SideBarMenuItem to="/cart" :icon="mdiCartOutline" title="Cart" :isCompact="compact" />
                <SideBarMenuItem to="/wishlist" :icon="mdiHeart" title="Whishlist" :isCompact="compact" />
              </SidebarDropdown>
              <SidebarDropdown :icon="mdiAccount" title="Account" :isCompact="compact" >
                <SideBarMenuItem to="/orders" :icon="mdiAccount" title="Orders" :isCompact="compact" />
                <SideBarMenuItem to="/address" :icon="mdiMapMarker" title="Address" :isCompact="compact" />
              </SidebarDropdown>
              <SidebarDropdown :icon="mdiBookOpenPageVariantOutline" title="Pages" :isCompact="compact" >
                <SideBarMenuItem to="/login" :icon="mdiAccountKey" title="Login" :isCompact="compact" />
                <SideBarMenuItem to="/404" :icon="mdiWebCancel" title="404" :isCompact="compact" />
              </SidebarDropdown>
            </ul>
          </slot>
        </div>
        <!-- content end-->

        <!-- footer start-->
        <div class="relative flex flex-row h-14 items-center bg-dark rounded-b-md">
          <slot name="footer">
            <div class="grow flex flex-row justify-center separator">
              <Button
                class="mx-2" 
                color="white" 
                :icon="compact ? mdiChevronDoubleLeft : mdiChevronDoubleRight" 
                roundedFull 
                @click="compact = !compact" />
            </div>
          </slot>
        </div>
        <!-- footer end-->
      </div>
    </aside>
  </div>
</template>
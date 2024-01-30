<script setup>
import { mdiCircleOpacity, mdiCart, mdiMenu, mdiMagnify, mdiAccountLockOutline, mdiDotsVertical } from '@mdi/js';

const { create } = useSnackbar();

const emit = defineEmits(["sidebarLeftBtnClick", "sidebarRightBtnClick"]);
const search = ref('');
const showSearchField = shallowRef(false);
const emitEvent = (event) => {
  emit(event)
}
const createMessage = () => {
  create( {color: 'contrast',  text: 'You have done it..'} );
  create( {color: 'success', title: 'Top', launchFrom:'top', text: 'You have done it..'} );
  create( {color: 'info', title: 'Left', position: 'left', text: 'You have done it..'} );
  create( {color: 'danger', title: 'Right', position: 'right', text: 'You have done it..'} );
}
</script>
<template>
  <div>
    <nav class="flex items-center fixed top-0 insect-x-0 z-30 w-full bg-dark text-white px-4 md:px-8 h-20">
      <div class="flex-1">
        <div class="wrapper-flex-between">

          <div class="wrapper-flex-start">
            <Button class="md:hidden" :icon="mdiMenu" :iconSize="24" @click="emitEvent('sidebarLeftBtnClick')" />
            <div class="wrapper-flex sm:w-[168px]">
              <a>
                <div class="wrapper-flex-center">
                  <MdiIcon :path="mdiCircleOpacity" size="24" />
                  <h4>Dmantu</h4>
                </div>
              </a>
            </div>
            <NavBarMenu />
          </div>

          <div class="hidden lg:wrapper-flex-end">
            <Field v-model="search" placeholder="Search"  :iconLeft="mdiMagnify" class="text-black" />
          </div>
          
          <div class="lg:hidden wrapper-flex-end">
            <Button :icon="mdiMagnify" :iconSize="24" @click="showSearchField = !showSearchField" />
          </div>

          <div class="hidden md:wrapper-flex-end">
            <Button 
              class="!border-0" 
              :icon="mdiCart" 
              :iconSize="24" 
              hasBadge 
              badgeColor="white" 
              @click="createMessage()">
              <template #badge>
                <span class="text-stone-600">5</span>
              </template>
            </Button>
            <Button to="/login" class="!border-0" :icon="mdiAccountLockOutline" :iconSize="24" />
            <Button class="!border-0" :icon="mdiDotsVertical" :iconSize="24" @click="emitEvent('sidebarRightBtnClick')" />
          </div>

        </div>
      </div>
    </nav>
    <Modal v-model="showSearchField" from="top" position="top-0" width="w-full" height="h-auto" left-btn-label="Search">
      <Field v-model="search" placeholder="Search"  :iconLeft="mdiMagnify" class="text-black" />
    </Modal>
  </div>
</template>
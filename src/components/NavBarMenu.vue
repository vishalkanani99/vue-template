<script setup>
</script>
<template>
  <ul class="hidden md:wrapper-flex-start">
    <li class="wrapper-flex-start" v-for="(menuItem, i) in menu" :key="i">
      <Dropdown v-if="menuItem.submenu" :items="menuItem.submenu">
        <template #selector="{ btnIcon }">
          <Button overrideClass="flex items-center bg-transparent p-2 theme-hover" :iconRight="btnIcon" :label="menuItem.label" />
        </template>
      </Dropdown>
      <Button v-else :to="menuItem.route" overrideClass="bg-transparent p-2 theme-hover" :label="menuItem.label" />
    </li>
  </ul>
</template>
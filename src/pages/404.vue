<script setup>
  import { mdiWebOff } from "@mdi/js";
</script>
<template>
  <div class="flex flex-col flex-wrap justify-center items-center text-center bg-light p-24">
    <MdiIcon :path="mdiWebOff" size="64" />
    <h2 class="mt-2">Ooops! Error 404</h2>
    <p class="mt-2">Sorry, this page does not exist or temporarily unavailable.</p>
    <Button class="mt-8" label="Back to home" />
  </div>
</template>
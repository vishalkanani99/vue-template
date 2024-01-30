<script setup>
import { mdiPlus, mdiClose, mdiPencil } from '@mdi/js';
</script>
<template>
  <div class="wrapper-padding">
    <div class="flex flex-col md:flex-row justify-center md:justify-between items-center px-8 pb-8 md:px-0">
      <h2 >Address</h2>
      <Button class="mt-4" :icon="mdiPlus" label="Add new" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card class="hover:shadow-lg transition-shadow duration-500">
        <template #header>
          <div class="flex flex-row justify-between">
            <h4>Default Address</h4>
            <div class="flex items-center space-x-2">
              <Button :icon="mdiPencil" roundedFull />
              <Button color="danger" :icon="mdiClose" roundedFull />
            </div>
          </div>
        </template>
        <h4 >John Doe</h4>
        <div class="pt-2">
          <p>C-404, Dummy Society</p>
          <p>Nr. Dummy Hotel, Dummy Road</p>
          <p>City: Dummy, Post Code: 40404</p>
          <p>Country: Dummy, State: Dummy</p>
          <p>Phone: (+11) 4144 4444 21</p>
        </div>
      </Card>
      <Card class="hover:shadow-lg transition-shadow duration-500">
        <template #header>
          <div class="flex flex-row justify-between">
            <h4>Home Address</h4>
            <div class="flex items-center space-x-2">
              <Button :icon="mdiPencil" roundedFull />
              <Button color="danger" :icon="mdiClose" roundedFull />
            </div>
          </div>
        </template>
        <h4 >John Doe</h4>
        <div class="pt-2">
          <p>C-404, Dummy Society</p>
          <p>Nr. Dummy Hotel, Dummy Road</p>
          <p>City: Dummy, Post Code: 40404</p>
          <p>Country: Dummy, State: Dummy</p>
          <p>Phone: (+11) 4144 4444 21</p>
        </div>
      </Card>
      <Card class="hover:shadow-lg transition-shadow duration-500">
        <template #header>
          <div class="flex flex-row justify-between">
            <h4>Office Address</h4>
            <div class="flex items-center space-x-2">
              <Button :icon="mdiPencil" roundedFull />
              <Button color="danger" :icon="mdiClose" roundedFull />
            </div>
          </div>
        </template>
        <h4 >John Doe</h4>
        <div class="pt-2">
          <p>C-404, Dummy Society</p>
          <p>Nr. Dummy Hotel, Dummy Road</p>
          <p>City: Dummy, Post Code: 40404</p>
          <p>Country: Dummy, State: Dummy</p>
          <p>Phone: (+11) 4144 4444 21</p>
        </div>
      </Card>
    </div>
  </div>
</template>
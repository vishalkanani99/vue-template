<script setup>
import { mdiListBox, mdiDownload } from '@mdi/js';
</script>
<template>
  <div class="wrapper-padding">
    <div class="flex flex-col md:flex-row justify-center md:justify-between items-center px-8 pb-8 md:px-0">
      <h2 >Orders</h2>
      <Field class="pt-4" type="select" transparent>
        <template #options>
          <option>Last month</option>
          <option>Last 6 months</option>
          <option>Last Year</option>
          <option>All</option>
        </template>
      </Field>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <OverviewCard 
        title="Product 1" 
        subTitle="5 months ago"
        note="Purchased on sale"
        :imageSrc="publicPath('images',  'baby.jpg')"
        status="Delivered"
        statusColor="success" 
        >
        <template #actionButtons>
          <Button :icon="mdiListBox" />
          <Button :icon="mdiDownload" />
        </template>
      </OverviewCard>
      <OverviewCard 
        title="Product 2" 
        subTitle="5 months ago"
        note="You have retured twice"
        :imageSrc="publicPath('images',  'shopping-3.jpg')"
        status="Shipped"
        statusColor="info" 
        >
        <template #actionButtons>
          <Button :icon="mdiListBox" />
          <Button :icon="mdiDownload" />
        </template>
      </OverviewCard>
      <OverviewCard 
        title="Product 3" 
        subTitle="5 months ago"
        note="You have exceed maximum attempt"
        :imageSrc="publicPath('images',  'shopping-2.jpg')"
        status="Failed to delivered"
        statusColor="danger" 
        >
        <template #actionButtons>
          <Button :icon="mdiListBox" />
          <Button :icon="mdiDownload" />
        </template>
      </OverviewCard>
      <OverviewCard 
        title="Product 4" 
        subTitle="5 months ago"
        :imageSrc="publicPath('images',  'shopping.jpg')"
        note="You have exceed maximum attempt"
        status="Canceled"
        statusColor="warning" 
        >
        <template #actionButtons>
          <Button :icon="mdiListBox" />
          <Button :icon="mdiDownload" />
        </template>
      </OverviewCard>
    </div>
  </div>
</template>
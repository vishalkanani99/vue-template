<script setup>
import { mdiFilterMenu } from '@mdi/js';

const content = [
  {
    image: publicPath('images',  'shopping-2.jpg'),
    title: 'Product 1',
    subTitle: '',
    price: '$700',
    discountPrice: '$1400',
  },
  {
    image: publicPath('images',  'shopping-3.jpg'),
    title: 'Product 2',
    subTitle: '',
    price: '$300',
    discountPrice: '$1100',
  },
  {
    image: publicPath('images',  'group-shopping.jpg'),
    title: 'Product 3',
    subTitle: '',
    price: '$340',
    discountPrice: '$700',
  },
  {
    image: publicPath('images',  'shopping-2.jpg'),
    title: 'Product 4',
    subTitle: '',
    price: '$700',
    discountPrice: '$1400',
  },
  {
    image: publicPath('images',  'group-shopping.jpg'),
    title: 'Product 5',
    subTitle: '',
    price: '$300',
    discountPrice: '$1100',
  },
  {
    image: publicPath('images',  'shopping-3.jpg'),
    title: 'Product 6',
    subTitle: '',
    price: '$340',
    discountPrice: '$700',
  },
];

const categories = [
  { title: 'Gender', items: { Male:'Male', Female:'Female' } },
  { title: 'Size', items: { 10:'10', 20:'20', 24:'24', 28:'28', 30:'30', 32:'32', 36:'36', 40:'40' }, expanded: true },
  { title: 'Color', items: { Red:'Red', Green:'Green', Blue:'Blue', Gray:'Gray', Purple:'Purple', Pink:'Pink', Black:'Black', White:'White' } },
  { title: 'Fit', items: { Slim:'Slim', Skiny:'Skiny', Regular:'Regular', Tampared:'Tampared',} },
  { title: 'Material', items: { Cotton:'Cotton', 'Cotton Blend':'Cotton Blend', Licra:'Licra',} },
]

const showFilterMenu = shallowRef(false);
</script>
<template>
  <div class="flex flex-wrap flex-row w-full wrapper-padding">
    <div class="hidden md:block w-1/4">
      <Card class="bg-light">
        <template #header><h4>Filter By:</h4></template>
        <CollapseGroup 
          :content="categories" >
          <template #title="{ data }">
            {{ data.title }}
          </template>
          <template #default="{ data }">
            <CheckRadioGroup :name="data.title" :options="data.items" isColumn />
          </template>
        </CollapseGroup>
      </Card>
    </div>
    <div class="md:w-3/4 md:p-4">
      <div class="flex flex-wrap items-center w-full px-2">
        <div class="flex justify-center md:hidden w-full mb-4">
          <Button :icon="mdiFilterMenu" @click="showFilterMenu = !showFilterMenu" />
        </div>
        <div class="flex flex-col md:flex-row justify-center md:justify-end items-center w-full">
          <label class="pr-2">Sort By:</label>
          <select class="font-sm">
            <option>Lowest price</option>
            <option>Highest price</option>
            <option>Ratings</option>
            <option>New</option>
          </select>
        </div>
      </div>
      <div class="flex flex-wrap flex-row w-full mt-4 md:-px-2 md:-mb-4">
        <div
          v-for="(item, index) in content"
          :key="index" 
          class="md:w-1/3 xl:w-1/4 px-2 mb-4">
          <ProductCard
            :image="item.image"
            :title="item.title"
            :subTitle="item.subTitle"
            :price="item.price" 
            :discountPrice="item.discountPrice" />
        </div>
      </div>
      <div class="mt-8">
        <Pagination class="md:pl-3" :limit="5" :page="1" :recordsTotal="150" />
      </div>
    </div>
    <Modal v-model="showFilterMenu" title="Filter By:" from="right" position="right-0">
      <CollapseGroup 
        :content="categories" >
        <template #title="{ data }">
          {{ data.title }}
        </template>
        <template #default="{ data }">
          <CheckRadioGroup :name="data.title" :options="data.items" isColumn />
        </template>
      </CollapseGroup>
    </Modal>
  </div>
</template>
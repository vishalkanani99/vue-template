<script setup>
const slides = [
  {
    image: publicPath('images',  'group-shopping-2.jpg'),
    caption: 'slide 1'
  },
  {
    image: publicPath('images',  'couple-shopping.jpg'),
    caption: 'slide 1'
  },
  {
    image: publicPath('images',  'group-shopping.jpg'),
    caption: 'slide 2'
  },
  {
    image: publicPath('images',  'shopping.jpg'),
    caption: 'slide 3'
  },
  {
    image: publicPath('images',  'shopping-3.jpg'),
    caption: 'slide 3'
  },
  {
    image: publicPath('images',  'baby.jpg'),
    caption: 'slide 3'
  }
];

const content = [
  {
    image: publicPath('images',  'shopping-2.jpg'),
    title: 'Product 1',
    subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: '$700',
    discountPrice: '$1400',
  },
  {
    image: publicPath('images',  'shopping-3.jpg'),
    title: 'Product 2',
    subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: '$300',
    discountPrice: '$1100',
  },
  {
    image: publicPath('images',  'group-shopping.jpg'),
    title: 'Product 3',
    subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: '$340',
    discountPrice: '$700',
  },
  {
    image: publicPath('images',  'shopping-2.jpg'),
    title: 'Product 4',
    subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: '$700',
    discountPrice: '$1400',
  },
  {
    image: publicPath('images',  'group-shopping.jpg'),
    title: 'Product 5',
    subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: '$300',
    discountPrice: '$1100',
  },
  {
    image: publicPath('images',  'shopping-3.jpg'),
    title: 'Product 6',
    subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    price: '$340',
    discountPrice: '$700',
  },
];

</script>
<template>
  <div>
    <Slider class="px-8 pt-8" :slides="slides" />
    <Heading class="mx-8" title="Featured Product" />
    <ContentSlider class="bg-stone-200 mx-8 border rounded-xl" :content="content" hasContentTypeGrid>
      <template v-slot="{ item, index }">
        <div class="p-2">
          <ProductCard
            :image="item.image"
            :title="item.title"
            :subTitle="item.subTitle"
            :price="item.price" 
            :discountPrice="item.discountPrice" />
        </div>
      </template>
    </ContentSlider>
    <NewsLetter />
  </div>
</template>

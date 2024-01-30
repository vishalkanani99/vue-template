<script setup>
import { mdiCart, mdiCircle, mdiHeart, mdiMinus, mdiPlus, mdiStar } from '@mdi/js';
const slides = [
  {
    image: publicPath('images',  'group-shopping-2.jpg'),
  },
  {
    image: publicPath('images',  'couple-shopping.jpg'),
  },
  {
    image: publicPath('images',  'group-shopping.jpg'),
  },
  {
    image: publicPath('images',  'shopping.jpg'),
  },
  {
    image: publicPath('images',  'shopping-3.jpg'),
  },
  {
    image: publicPath('images',  'baby.jpg'),
  },
  {
    image: publicPath('images',  'shopping.jpg'),
  },
  {
    image: publicPath('images',  'shopping-3.jpg'),
  },
  {
    image: publicPath('images',  'baby.jpg'),
  }
];

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
</script>
<template>
  <div class="wrapper-padding wrapper-space-y">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <Slider :slides="slides" hasThumbnailSelector :imageHeight="['h-[200px]', 'md:h-[300px]']" :hasIndicator="false" :hasAutoSlideShow="false" />
      <div class="pl-0 md:pl-8 mt-4 md:mt-0">
        <h2>Product title</h2>
        <div class="flex justify-start items-center space-x-2 text-lg mt-4 mb-2">
          <p>Price:</p>
          <del class="text-sm">$100</del>
          <span class="font-bold text-xl">$90</span>
        </div>
        <div class="flex justify-start items-center space-x-2 text-lg mb-2">
          <p>Availability</p>
          <span class="font-bold text-xl">In stock</span>
        </div>
        <div class="flex justify-start space-x-4 items-center text-lg mb-2">
          <p>Color: </p>
          <Button overrideClass="bg-blue-600 text-blue-600 rounded-full w-5 h-5" :icon="mdiCircle" />
          <Button overrideClass="bg-red-600 text-red-600 rounded-full w-5 h-5" :icon="mdiCircle" />
          <Button overrideClass="bg-green-600 text-green-600 rounded-full w-5 h-5" :icon="mdiCircle" />
          <Button overrideClass="bg-slate-600 text-slate-600 rounded-full w-5 h-5" :icon="mdiCircle" />
          <Button overrideClass="bg-orange-600 text-orange-600 rounded-full w-5 h-5" :icon="mdiCircle" />
        </div>
        <div class="flex justify-start space-x-2 items-center text-lg">
          <p>Size: </p>
          <Button color="lightDark" label="S" small />
          <Button color="lightDark" label="M" small />
          <Button color="lightDark" label="L" small />
          <Button color="lightDark" label="Xl" small />
        </div>

        <p class="my-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
          <FieldLabel class="!mb-0 col-span-2 xs:col-auto" addons>
            <Field type="button" :buttonIcon="mdiPlus" firstAddon/>
            <Field type="number" transparent middleAddon/>
            <Field type="button" :buttonIcon="mdiMinus" lastAddon/>
          </FieldLabel>
          <Button class="col-span-2 xs:col-auto" :icon="mdiCart" label="Add to cart" />
          <Button label="Buy now" />
          <Button :icon="mdiHeart" label="Watch" />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1">
      <TabGroup>
        <TabList>
          <Tab label="Description"></Tab>
          <Tab label="Specification"></Tab>
          <Tab label="Review"></Tab>
          <Tab label="Post Review"></Tab>
        </TabList>
        <TabPanels class="p-4">
          <TabPanel>
            <p class="mb-4">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          </TabPanel>
          <TabPanel>
            <ul>
              <li><span class="w-24 font-bold inline-block">Fit:</span> Slim fit</li>
              <li><span class="w-24 font-bold inline-block">Material:</span> Cotton</li>
            </ul>
          </TabPanel>
          <TabPanel class="space-y-8">
            <div class="flex flex-row flex-wrap md:flex-nowrap justify-center md:justify-start">
              <div class="flex flex-col items-center pr-0 md:pr-4 pb-4 md:pb-0">
                <div class="w-28 h-28 border p-1 rounded-full shadow-md">
                  <img class="w-full h-full rounded-full" src="/public/images/group-shopping-2.jpg" />
                </div>
              </div>
              <div class="flex flex-wrap flex-row justify-center md:justify-start">
                <div class="flex flex-row items-center space-x-4">
                  <span class="font-bold">John Doe</span>
                  <div class="flex flex-row justify-start space-x-2">
                    <MdiIcon class="!items-start" :path="mdiStar" />
                    <MdiIcon class="!items-start" :path="mdiStar" />
                    <MdiIcon class="!items-start" :path="mdiStar" />
                    <MdiIcon class="!items-start" :path="mdiStar" />
                    <MdiIcon class="!items-start" :path="mdiStar" />
                  </div>
                </div>
                <div class="flex flex-row items-center">
                  <p class="mt-4">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </div>
              </div>
            </div>

            <div class="flex flex-row flex-wrap md:flex-nowrap justify-center md:justify-start">
              <div class="flex flex-col items-center pr-0 md:pr-4 pb-4 md:pb-0">
                <div class="w-28 h-28 border p-1 rounded-full shadow-md">
                  <img class="w-full h-full rounded-full" src="/public/images/group-shopping-2.jpg" />
                </div>
              </div>
              <div class="flex flex-wrap flex-row justify-center md:justify-start">
                <div class="flex flex-row items-center space-x-4">
                  <span class="font-bold">John Doe</span>
                  <div class="flex flex-row justify-start space-x-2">
                    <MdiIcon class="!items-start" :path="mdiStar" />
                    <MdiIcon class="!items-start" :path="mdiStar" />
                    <MdiIcon class="!items-start" :path="mdiStar" />
                    <MdiIcon class="!items-start" :path="mdiStar" />
                    <MdiIcon class="!items-start" :path="mdiStar" />
                  </div>
                </div>
                <div class="flex flex-row items-center">
                  <p class="mt-4">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel class="flex flex-wrap justify-center">
            <Card class="p-4">
              <div class="flex flex-col justify-center space-y-4">
                <div class="flex flex-row flex-wrap justify-start items-center space-y-2 md:space-y-0 md:space-x-8">
                  <span class="font-bold">Your Ratings:</span>
                  <div class="flex flex-row justify-start space-x-2">
                    <MdiIcon class="!items-start" :path="mdiStar" size="24"/>
                    <MdiIcon class="!items-start" :path="mdiStar" size="24" />
                    <MdiIcon class="!items-start" :path="mdiStar" size="24" />
                    <MdiIcon class="!items-start" :path="mdiStar" size="24" />
                    <MdiIcon class="!items-start" :path="mdiStar" size="24" />
                  </div>
                </div>
                <FieldLabel label="Review">
                  <Field type="textarea" transparent />
                </FieldLabel>
                <Button label="Post Review" />
              </div>
            </Card>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
    <div class="grid grid-cols-1">
      <Heading class="!hidden md:!flex -mt-4" title="Related Products" />
      <h2 class="visible md:hidden text-center mt-4 mb-8">Related Products</h2>
      <ContentSlider :content="content" hasContentTypeGrid>
        <template v-slot="{ item, index }">
          <div class="px-2">
            <ProductCard
              :image="item.image"
              :title="item.title"
              :subTitle="item.subTitle"
              :price="item.price" 
              :discountPrice="item.discountPrice" />
          </div>
        </template>
      </ContentSlider>
    </div>
  </div>
</template>
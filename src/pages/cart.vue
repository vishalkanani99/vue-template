<script setup>
import { mdiClose, mdiMinus, mdiPlus } from '@mdi/js';
const data = [
  {
    image: publicPath('images',  'shopping.jpg'),
    product: 'Shopping 1',
    price: '$100.00',
    quantity: '5',
    total: '$500.00',
    action: '',
  },
  {
    image: publicPath('images',  'shopping-2.jpg'),
    product: 'Shopping 2',
    price: '$20.00',
    quantity: '1',
    total: '$20.00',
    action: '',
  },
  {
    image: publicPath('images',  'shopping-3.jpg'),
    product: 'Shopping 3',
    price: '$50.00',
    quantity: '2',
    total: '$100.00',
    action: '',
  },
];
</script>
<template>
  <div class="wrapper-padding">
    <div class="grid grid-cols-1">
      <Card>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in data" :key="index">
              <td data-label="Image">
                <img class="w-24 h-24" :src="row.image" />
              </td>
              <td data-label="Product">
                {{ row.product }}
              </td>
              <td data-label="Price">
                {{ row.price }}
              </td>
              <td data-label="Quantity">
                <FieldLabel class="w-36 md:w-48" addons>
                  <Field type="button" :buttonIcon="mdiPlus" firstAddon/>
                  <Field type="number" transparent middleAddon/>
                  <Field type="button" :buttonIcon="mdiMinus" lastAddon/>
                </FieldLabel>
              </td>
              <td data-label="Total">
                {{ row.total }}
              </td>
              <td data-label="">
                <Button color="danger" :icon="mdiClose" roundedFull />
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <Card>
        <h4 class="p-4">Have a coupon?</h4>
        <div class="grid grid-cols-1 px-4 pb-4">
          <FieldLabel addons>
            <Field class="w-full" placeholder="Apply coupon" transparent firstAddon />
            <Field type="button" buttonLabel="Apply" lastAddon />
          </FieldLabel>
        </div>
        <h4 class="px-4">Calculate Shipping</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 p-4 gap-2">
          <FieldLabel>
            <Field type="select" transparent>
              <template #options>
                <option>Select Country</option>
                <option>India</option>
                <option>Australia</option>
                <option>New Zeland</option>
              </template>
            </Field>
          </FieldLabel>
          <FieldLabel>
            <Field type="select" transparent>
              <template #options>
                <option>Select State</option>
                <option>Gujrat</option>
                <option>Rajsthan</option>
                <option>Maharashtra</option>
              </template>
            </Field>
          </FieldLabel>
          <FieldLabel>
            <Field placeholder="Postal code/Zip" transparent />
          </FieldLabel>
          <Button label="Estimate" />
        </div>
      </Card>
      <Card class="bg-light">
        <div class="p-8 space-y-6">
          <div class="flex flex-col xs:flex-row justify-center xs:justify-between items-center">
            <span class="font-bold">Product</span>
            <span class="font-bold">Total</span>
          </div>
          <div class="flex flex-col xs:flex-row justify-center xs:justify-between items-center">
            <span class="font-bold">Shipping</span>
            <span class="font-bold">Free shipping</span>
          </div>
          <hr>
          <div class="flex flex-col xs:flex-row justify-center xs:justify-between items-center">
            <span class="font-bold">Total</span>
            <span class="font-bold">$500.00</span>
          </div>
        </div>
        <template #footer>
          <div class="flex flex-row justify-end">
            <Button class="w-full xs:w-auto" label="Checkout" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
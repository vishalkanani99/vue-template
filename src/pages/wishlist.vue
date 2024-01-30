<script setup>
import { mdiClose, mdiCart, mdiPlus, mdiMinus } from '@mdi/js';
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
                <div class="flex justify-end items-center space-x-2">
                  <Button color="danger" :icon="mdiClose" iconSize="24" />
                  <Button :icon="mdiCart" iconSize="24" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  </div>
</template>
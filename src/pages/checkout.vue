<script setup>
import { mdiCreditCard } from '@mdi/js';
</script>
<template>
  <div class="wrapper-padding">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <Card>
        <h4 class="p-4">Billing Address</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 p-4 gap-2">
          <FieldLabel label="First Name">
            <Field class="w-full" placeholder="First Name" transparent />
          </FieldLabel>
          <FieldLabel label="Last Name">
            <Field class="w-full" placeholder="Last Name" transparent />
          </FieldLabel>
          <FieldLabel label="Phone">
            <Field class="w-full" placeholder="Phone" transparent />
          </FieldLabel>
          <FieldLabel label="Email">
            <Field class="w-full" placeholder="Email" transparent />
          </FieldLabel>
          <FieldLabel class="md:col-span-2" label="Company Name">
            <Field class="w-full" placeholder="Company Name" transparent />
          </FieldLabel>
          <FieldLabel class="md:col-span-2" label="Address">
            <Field class="w-full" placeholder="House number, name or building name, society name" transparent />
          </FieldLabel>
          <FieldLabel class="md:col-span-2" label="">
            <Field class="w-full" placeholder="Area, Nearby, Street name" transparent />
          </FieldLabel>
          <FieldLabel label="Select State">
            <Field type="select" transparent>
              <template #options>
                <option>Select State</option>
                <option>Gujrat</option>
                <option>Rajsthan</option>
                <option>Maharashtra</option>
              </template>
            </Field>
          </FieldLabel>
          <FieldLabel label="Select Country">
            <Field type="select" transparent>
              <template #options>
                <option>Select Country</option>
                <option>India</option>
                <option>Australia</option>
                <option>New Zeland</option>
              </template>
            </Field>
          </FieldLabel>
          <FieldLabel label="Town/City">
            <Field class="w-full" placeholder="Town/City" transparent />
          </FieldLabel>
          <FieldLabel label="Postal code/Zip">
            <Field placeholder="Postal code/Zip" transparent />
          </FieldLabel>
          <FieldLabel class="md:col-span-2" label="Order Notes">
            <Field type="textarea" placeholder="Order notes for delivery" transparent />
          </FieldLabel>
        </div>
      </Card>
      <Card class="bg-light">
        <div class="p-4 space-y-4">
          <div class="flex flex-col xs:flex-row justify-center xs:justify-between items-center">
            <span class="font-bold">Product</span>
            <span class="font-bold">Total</span>
          </div>
          <hr>
          <div class="flex flex-col xs:flex-row justify-center xs:justify-between items-center">
            <span>Product name * 2</span>
            <span>$100.20</span>
          </div>
          <div class="flex flex-col xs:flex-row justify-center xs:justify-between items-center">
            <span>Product name * 2</span>
            <span>$96.00</span>
          </div>
          <div class="flex flex-col xs:flex-row justify-center xs:justify-between items-center">
            <span>Product name * 3</span>
            <span>$296.00</span>
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
          <hr>
        </div>
        <div class="p-4 space-y-4">
          <span class="font-bold">Payment Options</span>
          <div class="grid grid-cols-1">
            <div class="flex flex-col xs:flex-row flex-wrap justify-between items-center">
              <FieldLabel class="w-full xs:w-9/12 -mb-4" label="UPI" addons>
                <Field class="w-9/12" placeholder="UPI Id" transparent firstAddon />
                <Field class="w-1/4" type="select" transparent lastAddon>
                  <template #options>
                    <option>@okabc</option>
                    <option>@okdef</option>
                    <option>@okghi</option>
                    <option>@okxyz</option>
                  </template>
                </Field>
              </FieldLabel>
              <Button class="w-full mb-6 xs:mb-0 xs:w-auto" color="contrast" label="Verify" />
            </div>
            <FieldLabel label="Credit Card">
              <Field class="w-full" placeholder="Credit Card" :iconRight="mdiCreditCard" transparent />
            </FieldLabel>
            <FieldLabel label="Debit Card">
              <Field class="w-full" placeholder="Debit Card" :iconRight="mdiCreditCard" transparent />
            </FieldLabel>
          </div>
        </div>
        <template #footer>
          <div class="p-4">
            <Button class="w-full" label="Place Order" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
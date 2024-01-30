<script setup>
import { mdiEmail, mdiFacebook, mdiInstagram, mdiLinkedin, mdiTwitter, mdiYoutube } from '@mdi/js';

</script>
<template>
  <div class="bg-light py-8 md:py-16">
    <div class="max-w-[600px] mx-auto px-8">
      <h2 class="text-center py-4">Subcribe</h2>
      <p class="text-justify py-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
      <div class="flex flex-row justify-center items-center py-4">
        <FieldLabel addons>
            <Field type="email"  placeholder="Email Address"  :iconLeft="mdiEmail" firstAddon />
            <Field type="button"  buttonLabel="Subscribe" lastAddon />
        </FieldLabel>
      </div>
      <div class="flex flex-wrap justify-center items-center gap-4 py-4">
        <Button :icon="mdiFacebook" :iconSize="36" roundedFull />
        <Button :icon="mdiInstagram" :iconSize="36" roundedFull />
        <Button :icon="mdiTwitter" :iconSize="36" roundedFull />
        <Button :icon="mdiYoutube" :iconSize="36" roundedFull />
        <Button :icon="mdiLinkedin" :iconSize="36" roundedFull />
      </div>
    </div>
  </div>
</template>
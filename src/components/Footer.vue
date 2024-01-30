<script setup>
</script>

<template>
  <!-- component -->
  <footer class="flex flex-row flex-wrap bg-dark">
    <div class="flex flex-row flex-wrap w-full p-4 md:p-8">
      <div class="w-full md:w-1/4 shrink-0 mb-8 md:mb-0">
        <h4>Quick Links</h4>
        <ul class="mt-4 space-y-2">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/">Shop</RouterLink></li>
          <li><RouterLink to="/">Pages</RouterLink></li>
        </ul>
      </div>
      <div class="w-full md:w-1/4 shrink-0 mb-8 md:mb-0">
        <h4>Popular Categories</h4>
        <ul class="mt-4 space-y-2">
          <li><RouterLink to="/">Electronics</RouterLink></li>
          <li><RouterLink to="/">Home Appliance</RouterLink></li>
          <li><RouterLink to="/">Fashion</RouterLink></li>
          <li><RouterLink to="/">Kitchen Ware</RouterLink></li>
        </ul>
      </div>
      <div class="w-full md:w-1/4 shrink-0 mb-8 md:mb-0">
        <h4>Company Links</h4>
        <ul class="mt-4 space-y-2">
          <li><RouterLink to="/">Career</RouterLink></li>
          <li><RouterLink to="/">Privacy & Policy</RouterLink></li>
          <li><RouterLink to="/">Help Center</RouterLink></li>
          <li><RouterLink to="/">About us</RouterLink></li>
          <li><RouterLink to="/">Contact us</RouterLink></li>
        </ul>
      </div>
      <div class="flex flex-col md:block flex-nowrap w-full md:w-1/4 shrink-0 mb-8 md:mb-0">
        <h4>Contact Us</h4>
        <div class="mt-4">
          <p>C-404, Dummy Society</p>
          <p>Nr. Dummy Hotel, Dummy Road</p>
          <p>City: Dummy, Post Code: 40404</p>
          <p>Country: Dummy, State: Dummy</p>
          <p>Phone: (+11) 4144 4444 21</p>
        </div>
      </div>
    </div>
    <div class="flex items-center border-t w-full px-4 md:px-8 h-20">
      <div class="flex-1">
        <p class="text-center">© 2023 You Company Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
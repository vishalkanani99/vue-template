<script setup>
import { mdiEmail, mdiEye, mdiEyeOff } from '@mdi/js';

const form = ref({
  email: '',
  password: '',
})

const errors = ref({
  email: '',
  password: '',
})

let timeout;
const showPassword = shallowRef(false);
const isFormValid = shallowRef(true);

const validate = () => {

  if( timeout ) {
    clearTimeout(timeout);
  } 

  let emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  let isValidEmail = emailRegex.test(form.value.email);

  errors.value = { email: '', password: '', };
  isFormValid.value = true;

  if(form.value.email === ''){
    errors.value.email = "Please enter your email";
    isFormValid.value = false;
  }

  if(form.value.email !== '' && !isValidEmail){
    errors.value.email = "Email is not valid";
    isFormValid.value = false;
  }

  if(form.value.password === ''){
    errors.value.password = "Please enter your password";
    isFormValid.value = false;
  }

  timeout = setTimeout(() => {
    isFormValid.value = true;
  }, 200)
}
</script>
<template>
  <div class="flex min-h-screen items-center justify-center bg-gradient-to-tr from-stone-400 via-stone-300 to-stone-400">
    <Card 
      :class="[
        {'animate-shake': !isFormValid},
        'bg-light'
      ]"
      :headerClass="['bg-dark']"
      :footerClass="['bg-dark']">
      <template #header>
        <h4>Sign In</h4>
      </template>
      
      <div>
        <FieldLabel label="Email" :class="{'text-red-500' : errors.email}">
          <Field v-model="form.email" :error="errors.email" :iconLeft="mdiEmail" transparent placeholder="Enter your email" />
        </FieldLabel>
        <FieldLabel label="Password" :class="{'text-red-500' : errors.password}">
          <Field 
            v-model="form.password" :type="showPassword ? 'text' : 'password'" 
            :iconRight="showPassword ? mdiEyeOff : mdiEye"
            :error="errors.password"
            placeholder="Enter your password" 
            iconRightClickable
            transparent 
            @iconRightClick="showPassword = !showPassword" />
        </FieldLabel>
        <CheckRadio label="Remember" />
      </div>

      <template #footer>
        <div class="flex justify-between gap-4">
          <Button color="lightDark" label="Sign In" small @click="validate()" />
          <Button color="lightDark" label="Back" small />
        </div>
      </template>
    </Card>
  </div>
</template>
<route lang="yaml">
  {
    meta: {
      layout: guest
    }
  }
</route>
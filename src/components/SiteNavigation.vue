<template>
   <header class="sticky top-0 shadow-lg">
    <nav class="container flex flex-col items-center gap-4 text-slate-800 py-6">

    <div class="flex items-center gap-3 flex-1">
      <i class="fa fa-cutlery text-2xl" aria-hidden="true"></i>
      <p class="text-2xl">Savory Calculator</p>

      <div class="flex gap-3 justify-end">
        <i class="fa fa-user-plus text-2xl hover:text-white duration-150" aria-hidden="true" @click="Signuptogglemodal"></i>
         <i class="fa fa-info text-2xl hover:text-white duration-150 cursor-pointer" aria-hidden="true" @click="togglemodal" ></i>
      </div>
      <div class=" flex gap-4">
         <i class="fa fa-sign-in text-2xl hover:text-white duration-150 cursor-pointer" aria-hidden="true" @click="LoginSignuptogglemodal"></i>
         <i class="fa fa-sign-out text-2xl hover:text-white duration-150 cursor-pointer" aria-hidden="true"></i>
      </div>
    </div>

    <BaseModal :modal-active="modalActive" @close-modal="togglemodal">
      <div class="text-black">
          <h1 class="text-2xl mb-1">About:</h1>
          <p class="mb-4">
            Savory Calculator allows you to manage your spending on various savories for events.
          </p>
          <h2 class="text-2xl">How it works:</h2>
          <ol class="list-decimal list-inside mb-4">
            <li>
             Please Type in the values in the text boxes acordingly
            </li>
            <li>
              Select the number of guests
            </li>
            <li>
              To save this result press the + sign
            </li>
          </ol>
        </div>
   </BaseModal>

   <LoginSignupVue :LoginSignupmodalActive="LoginSignupmodalActive" @Login-Signup--close-modal="LoginSignuptogglemodal" ></LoginSignupVue>
    <Register :SignupmodalActive="SignupmodalActive" @Signup--close-modal="Signuptogglemodal"></Register>
  </nav>
   </header>
</template>

<script setup>
import { ref } from 'vue';
import BaseModal from './BaseModal.vue';
import LoginSignupVue from './Login-Signup.vue';
import Register from './Register.vue';

const modalActive = ref(null);
const togglemodal = () => {
   modalActive.value = !modalActive.value;
}

const SignupmodalActive = ref(null);
const Signuptogglemodal = () => {
  SignupmodalActive.value = !SignupmodalActive.value;
}

const LoginSignupmodalActive = ref(null);
const LoginSignuptogglemodal = () => {
  LoginSignupmodalActive.value = !LoginSignupmodalActive.value;
}

</script>

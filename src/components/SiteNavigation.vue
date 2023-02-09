<template>
   <header class="sticky top-0 shadow-xl">
    <nav class="container flex flex-col items-center gap-4 text-gray-900 py-6">

    <div class="flex items-center gap-3 flex-1">
      <i class="fa fa-cutlery text-2xl" aria-hidden="true"></i>
      <p class="text-2xl">Savory Calculator</p>

      <div class="flex gap-3 justify-end">
        <i class="fa fa-user-plus text-2xl hover:text-white duration-150" aria-hidden="true" @click="Signuptogglemodal"></i>
         <i class="fa fa-info text-2xl hover:text-white duration-150 cursor-pointer" aria-hidden="true" @click="togglemodal" ></i>
      </div>
      <div class=" flex gap-4">
         <i v-if = "!isloggedIn" class="fa fa-sign-in text-2xl hover:text-white duration-150 cursor-pointer" aria-hidden="true" @click="LoginSignuptogglemodal"></i>
         <i v-if = "isloggedIn" class="fa fa-sign-out text-2xl hover:text-white duration-150 cursor-pointer" aria-hidden="true" @click="logout"></i>
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
             Please Type in the values in the input boxes acordingly.
             You can also load platters by pressing the load saved platter button and select the platers from the drop down menu.
             You can also see the total cost and how many pieces your platter is made of by looking at the bottom right of the platter calculator
            </li>
            <li>
              To save this result press the save button and input a name for your platter.
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
import { onMounted, onUnmounted, ref } from 'vue';
import BaseModal from './BaseModal.vue';
import LoginSignupVue from './Login-Signup.vue';
import Register from './Register.vue';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';

const isloggedIn = ref(false)
let auth;
//Allow for the user to authenticate that they have logged in 
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
  if (user) {
    isloggedIn.value =true;
  } else {
    isloggedIn.value =false;
  }  
  });
});
//Allow for the user to logout
const logout = () => {
  signOut(auth).then(() => {
    console.log("Succsessfully Logout")
  });
};

//This function allows for the information modal to close
const modalActive = ref(null);
const togglemodal = () => {
   modalActive.value = !modalActive.value;
}
//This function allows for the register modal to close
const SignupmodalActive = ref(null);
const Signuptogglemodal = () => {
  SignupmodalActive.value = !SignupmodalActive.value;
}
//This function allows for the login modal to close
const LoginSignupmodalActive = ref(null);
const LoginSignuptogglemodal = () => {
  LoginSignupmodalActive.value = !LoginSignupmodalActive.value;
}

</script>

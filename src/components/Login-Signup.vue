<template>
    <Transition name="Login-Signup-modal-outer"> 
      <div v-show ="show">
    <div  v-show ="LoginSignupmodalActive"  
    class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8 rounded">
    <Transition name="Login-Signup-modal-inner">
        <div v-if ="LoginSignupmodalActive" class="p-4 bg-white self-start mt-32 max-w-md">
          <i class="fa fa-times text-2xl hover:text-blue-500 duration-150 cursor-pointer flex gap-3 justify-end text-gray-500"  aria-hidden="true" @click="$emit('Login-Signup--close-modal')"></i>
          <div flex items-center gap-3 flex-1 >
          <h1 class="text-2xl text-gray-500 mb-1 flex items-center gap-3 flex-1">Login</h1>
        </div>
        <div class="container">
          <label class="text-gray-700"><b>Email</b></label>
          <input v-model = "email" class="w-full py-2 bg-gray-300 text-gray-500 px-1 outline-none mb-4" type="text" placeholder="Enter Email" name="uname" required>

          <label class="text-gray-700"><b>Password</b></label>
          <input v-model = "password" class="w-full py-2 bg-gray-300 text-gray-500 px-1 outline-none mb-4" type="password" placeholder="Enter Password" name="psw" required>

          <input id="remember" class="mb-4 text-black" type="checkbox" checked="checked" name="rememberbox">
          <label class="text-black" for="remember">Remember me
          </label>
          <p v-if = "errMSG"> {{ errMSG }}</p>
          <button @click="loginEP" class="bg-blue-500 w-full text-gray-100 py-2 rounded hover:bg-blue-600 transition-colors">Login</button>
        </div>
        </div>
        </Transition>
    </div>
  </div> 
     </Transition> 
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
defineEmits(['Login-Signup--close-modal']);
defineProps ({
    LoginSignupmodalActive: {
        type: Boolean,
        default : false,
    },
});

const show = ref(true)
const password = ref("");
const email = ref("");
const auth = getAuth();
const errMSG = ref();

const loginEP = () => {
  signInWithEmailAndPassword(auth,email.value, password.value)
 .then((data) => {
  console.log("Successfully Logged in!")
  console.log(auth.currentUser);
  show.value = !show.value
  
 })
 .catch((error) => {
  console.log(error.code);
  switch (error.code) {
    case "auth/invalid-email":
      errMSG.value = "Invalid Email";
      break;
    case "auth/user-not-found":
      errMSG.value = "No account with that email was found";
      break;
    case "auth/wrong-password":
      errMSG.value = "Incorrect Password";
      break;
    default:
      errMSG.value = "";
      break;
  }
 })
};

</script>
<style scoped> 
.Login-Signup-modal-outer-enter-active,
.Login-Signup-modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.Login-Signup-modal-outer-enter-from,
.Login-Signup-modal-outer-leave-to {
  opacity: 0;
}
.Login-Signup-modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.Login-Signup-modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.Login-Signup-modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.Login-Signup-modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
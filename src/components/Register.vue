<template>
    <Transition name="Signup-modal-outer">  
    <div  v-show ="SignupmodalActive"
    class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8 rounded">
    <Transition name="Signup-modal-inner">
        <div v-if ="SignupmodalActive"  class="p-4 bg-white self-start mt-32 max-w-md">
            <i class="fa fa-times text-2xl hover:text-blue-500 duration-150 cursor-pointer flex gap-3 justify-end text-gray-500"  aria-hidden="true" @click="$emit('Signup--close-modal')"></i>
          <div flex items-center gap-3 flex-1 >
          <h1 class="text-2xl text-gray-500 mb-1 flex items-center gap-3 flex-1">Register</h1>
        </div>
        <form @submit.prevent="handleSubmit">
        <div class="container">
            <label class="text-gray-700"><b>Email</b></label>
            <input v-model = "email" class="w-full py-2 bg-gray-300 text-gray-500 px-1 outline-none mb-4" type="email" placeholder="Enter Email" name="uname" required>
            
            
            <label class="text-gray-700"><b>Password</b></label>
            <input v-model = "password" class="w-full py-2 bg-gray-300 text-gray-500 px-1 outline-none mb-4" type="password" placeholder="Enter Password" name="psw" required>
            
            <button @click="Register" class="bg-blue-500 w-full text-gray-100 py-2 rounded hover:bg-blue-600 transition-colors">Register</button>

            <label class="text-gray-700"><b>{{email.value}}</b></label>
        </div>
        </form>
        </div>
        </Transition>
    </div>
    </Transition> 
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
 
defineEmits(['Signup--close-modal']);
defineProps ({
    SignupmodalActive: {
        type: Boolean,
        default : false,
    },
});

const password = ref("");
const email = ref("");
const auth = getAuth();

const Register = () => {
 createUserWithEmailAndPassword(auth,email.value, password.value)
 .then((data) => {
  console.log("Successfully Registered!")
 })
 .catch((error) => {
  console.log(error.code);
  alert(error.message);
 })
};


</script>
<style scoped> 
.Signup-modal-outer-enter-active,
.Signup-modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.Signup-modal-outer-enter-from,
.Signup-modal-outer-leave-to {
  opacity: 0;
}
.Signup-modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.Signup-modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.Signup-modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.Signup-modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
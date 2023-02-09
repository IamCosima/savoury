<template>
<collapsible>
    <template v-slot:title>
    <span class="font-semibold text-xl">Platter Calculator</span>
  </template>
  <template v-slot:content>
    <div>
      <div>
        <form @submit.prevent="handleSubmit" class="w-full max-w-xl rounded px-3
         bg-orange-600">
      <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="">
        Platter Type(Optional)
      </label>
      <select @change="setPlatter()"  v-model="selected" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="" id="">
        <optgroup label="Default Platters:">
          <option value="Empty">No Platter</option>
          <option value="S">Small Standard Platter(10pcs)</option>
          <option value="M">Medium Standard Platter(25pcs)</option>
          <option value="L">Standard Platter(50pcs)</option>
          <option value="XL">large Platter(100pcs)</option>
        </optgroup>
        <optgroup label="User Created Platters:">
          <option v-for="user in users" v-bind:key="user.id" :value="user.plattername"  >{{ user.plattername }}</option>
        </optgroup>
        
        </select>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Enter Number of Guests:
      </label>
      <input v-model = "noguests" min="1" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
  </div>
  <div class="">
      <button v-if = isloggedIn  class="bg-blue-500 w-full text-gray-100 py-2 rounded hover:bg-blue-600 transition-colors" @click="click_get ">Load Saved platters</button>
    </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2" for="">
        Composition
      </label>

      <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Samosa amount
      </label>
      <input v-model = "Samosa_num" id="Samosa_num" name="Samosa_num" min="0" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Price
      </label>
      <input v-model = "Samosa_price" id="Samosa_price" name="Samosa_price" min="0" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Pies amount
      </label>
      <input v-model = "Pies_num" min="0" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Price
      </label>
      <input v-model = "Pies_price" min="0" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Springrolls amount
      </label>
      <input v-model = "Springrolls_num" min="0" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Price
      </label>
      <input v-model = "Springrolls_price" min="0" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
  </div>


  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Half Moons amount
      </label>
      <input v-model = "HalfMoons_num" min="0" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Price
      </label>
      <input v-model = "HalfMoons_price" min="0" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
  </div>


  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Mini Pizza amount
      </label>
      <input v-model = "MiniPizza_num" min="0" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Price
      </label>
      <input v-model = "MiniPizza_price" min="0" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label v-if = isloggedIn  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Enter New Platter Name:
      </label>
      <input v-if = isloggedIn  v-model = "PlatterText" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-red-700 text-2xl font-bold mb-2" for="">
        Total:R{{ Calculateprice() }}
      </label>
      <label class="block uppercase tracking-wide text-red-700 text-2xl font-bold mb-2" for="">
        Pcs: {{ CalculateNumPcs() }}
      </label>
      <label class="block uppercase tracking-wide text-red-700 text-2xl font-bold mb-2" for="">
        Per Person: {{ calculateperperson() }}
      </label>
    </div>
  </div>
    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <button v-if = isloggedIn  class="bg-blue-500 w-full text-gray-100 py-2 rounded hover:bg-blue-600 transition-colors" type="submit" @click="click_post">Save</button>
    </div>
  </div>
  </div>
  </div>
</form>
  </div>                          
    </div>
  </template>
  </collapsible>
</template>

<script setup>
import collapsible from './collapsible.vue';
import { onMounted, onUnmounted,ref } from 'vue';
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
</script>

<script>
export default {
  data() {
    return {
    Samosa_num : 0,
    Pies_num : 0,
    Springrolls_num :0,
    HalfMoons_num : 0,
    MiniPizza_num : 0,
    Samosa_price : 0,
    Pies_price : 0,
    Springrolls_price : 0,
    HalfMoons_price : 0,
    MiniPizza_price : 0,
    PlatterText :'',
    users: [],
    noguests : 0
    }
  },
  methods: {
    click_post() {
      fetch('https://savoury-calculator-default-rtdb.firebaseio.com/test.json', {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          plattername: this.PlatterText,
          Samosa_Ammont:  this.Samosa_num,
          Pies_Ammont: this.Pies_num,
          Springrolls_Ammont: this.Springrolls_num,
          HalfMoons_Ammont: this.HalfMoons_num,
          MiniPizza_Ammont: this.MiniPizza_num,
          Samosa_Prices: this.Samosa_price,
          Pies_Prices: this.Pies_price,
          Springrolls_Prices: this.Springrolls_price,
          HalfMoons_Prices: this.HalfMoons_price,
          MiniPizza_Prices: this.MiniPizza_price,
        })
      });
      console.log("Platter has been saved for futre use")
      alert("Platter has been saved for futre use")
    },
    click_get() {
      fetch('https://savoury-calculator-default-rtdb.firebaseio.com/test.json').then((response) => {
        if (response.ok){
          return response.json();
        }
      })
      .then((data) => {
        const results = [];
        for (const id in data) {
          results.push({
            id: id,
            plattername:  data[id]['plattername'],
            Samosa_Ammont:  data[id]['Samosa_Ammont'],
            Pies_Ammont: data[id]['Pies_Ammont'],
            Springrolls_Ammont: data[id]['Springrolls_Ammont'],
             HalfMoons_Ammont: data[id]['HalfMoons_Ammont'],
             MiniPizza_Ammont: data[id]['MiniPizza_Ammont'],
            Samosa_Prices: data[id]['Samosa_Prices'],
            Pies_Prices: data[id]['Pies_Prices'],
            Springrolls_Prices: data[id]['Springrolls_Prices'],
            HalfMoons_Prices: data[id]['HalfMoons_Prices'],
            MiniPizza_Prices: data[id]['MiniPizza_Prices']
          });
        }
        this.users = results;
      });
    },
    Calculateprice() {
      return this.Samosa_num * this.Samosa_price + this.Pies_num * this.Pies_price + this.Springrolls_num * this.Springrolls_price + this.HalfMoons_num 
      * this.HalfMoons_price + this.MiniPizza_num * this.MiniPizza_price;
      
},
CalculateNumPcs() {
      return this.Samosa_num  + this.Pies_num  + this.Springrolls_num + this.HalfMoons_num + this.MiniPizza_num;
      
},
calculateperperson(){
  return Math.round(this.CalculateNumPcs() /3 / this.noguests)
},
setPlatter() {
    if (this.selected == "S") {
    this.Samosa_num = ref(2)
    this.Pies_num = ref(2)
    this.Springrolls_num =ref(2)
    this.HalfMoons_num = ref(2)
    this.MiniPizza_num = ref(2)
    this.Samosa_price = ref(6)
    this.Pies_price = ref(12)
    this.Springrolls_price = ref(4)
    this.HalfMoons_price = ref(5)
    this.MiniPizza_price = ref(15)

}else if (this.selected === 'M') {
    this.Samosa_num = ref(15)
    this.Pies_num = ref(4)
    this.Springrolls_num =ref(2)
    this.HalfMoons_num = ref(2)
    this.MiniPizza_num = ref(2)
    this.Samosa_price = ref(4)
    this.Pies_price = ref(16)
    this.Springrolls_price = ref(10)
    this.HalfMoons_price = ref(8)
    this.MiniPizza_price = ref(16)
}
 else if (this.selected === 'L') {
    this.Samosa_num = ref(30)
    this.Pies_num = ref(8)
    this.Springrolls_num =ref(4)
    this.HalfMoons_num = ref(4)
    this.MiniPizza_num = ref(4)
    this.Samosa_price = ref(25)
    this.Pies_price = ref(12)
    this.Springrolls_price = ref(8)
    this.HalfMoons_price = ref(5)
    this.MiniPizza_price = ref(15)
}
else if (this.selected === 'XL') {
    this.Samosa_num = ref(60)
    this.Pies_num = ref(16)
    this.Springrolls_num =ref(8)
    this.HalfMoons_num = ref(8)
    this.MiniPizza_num = ref(8)
    this.Samosa_price = ref(2)
    this.Pies_price = ref(2)
    this.Springrolls_price = ref(4)
    this.HalfMoons_price = ref(6)
    this.MiniPizza_price = ref(15)
}
else if (this.selected === 'Empty') {
  this.Samosa_num = ref(0)
    this.Pies_num = ref(0)
    this.Springrolls_num =ref(0)
    this.HalfMoons_num = ref(0)
    this.MiniPizza_num = ref(0)
    this.Samosa_price =ref(0)
    this.Pies_price = ref(0)
    this.Springrolls_price = ref(0)
    this.HalfMoons_price = ref(0)
    this.MiniPizza_price = ref(0)
} else {
  for (const id in this.users) {
    //console.log(this.users[id]['plattername'])
    //console.log(this.selected)
      if (this.selected === this.users[id]['plattername']) {
        this.Samosa_price = this.users[id]['Samosa_Prices'],
        this.Pies_price = this.users[id]['Pies_Prices']
        this.Springrolls_price = this.users[id]['Springrolls_Prices']
        this.HalfMoons_price = this.users[id]['HalfMoons_Prices']
        this.MiniPizza_price = this.users[id]['MiniPizza_Prices']
        this.Samosa_num = this.users[id]['Samosa_Ammont']
        this.Pies_num = this.users[id]['Pies_Ammont']
        this.Springrolls_num = this.users[id]['Springrolls_Ammont']
        this.HalfMoons_num = this.users[id]['HalfMoons_Prices']
        this.MiniPizza_num = this.users[id]['MiniPizza_Prices'] 
      }
}
}
},
//https://betterprogramming.pub/vue-js-firebase-how-to-develop-a-app-without-writing-backend-11f9de6f76bc

  }

};
</script>
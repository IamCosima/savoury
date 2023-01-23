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
        <option value="">No Platter</option>
        <option value="S">Small Standard Platter(10pcs)</option>
        <option value="M">Medium Standard Platter(25pcs)</option>
        <option value="L">Standard Platter(50pcs)</option>
        <option value="XL">large Platter(100pcs)</option>
        </select>
    </div>
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
      <input v-model = "Samosa_num" min="1" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Price
      </label>
      <input v-model = "Samosa_price" min="1" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Pies amount
      </label>
      <input v-model = "Pies_num" min="1" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Price
      </label>
      <input v-model = "Pies_price" min="1" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Springrolls amount
      </label>
      <input v-model = "Springrolls_num" min="1" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Price
      </label>
      <input v-model = "Springrolls_price" min="1" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
  </div>


  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Half Moons amount
      </label>
      <input v-model = "HalfMoons_num" min="1" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Price
      </label>
      <input v-model = "HalfMoons_price" min="1" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
  </div>


  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Mini Pizza amount
      </label>
      <input v-model = "MiniPizza_num" min="1" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Price
      </label>
      <input v-model = "MiniPizza_price" min="1" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number">
    </div>
  </div>

  
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="">
        Enter New Platter Name:
      </label>
      <input v-model = "PlatterText" min="1" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text">
    
    </div>
 
    <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <button class="bg-blue-500 w-full text-gray-100 py-2 rounded hover:bg-blue-600 transition-colors" >Save</button>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-red-700 text-2xl font-bold mb-2" for="">
        Total: {{ Calculateprice() }}
      </label>
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
import { ref } from 'vue';
var   selected =  ref("");
var    Samosa_num = ref(0);
var    Pies_num = ref(0);
var    Springrolls_num =ref(0);
var    HalfMoons_num = ref(0);
var    MiniPizza_num = ref(0);
var    Samosa_price = ref(1);
var    Pies_price = ref(1);
var    Springrolls_price = ref(1);
var    HalfMoons_price = ref(1);
var    MiniPizza_price = ref(1);


function Calculateprice() {
      return this.Samosa_num * this.Samosa_price + this.Pies_num * this.Pies_price + this.Springrolls_num * this.Springrolls_price + this.HalfMoons_num 
      * this.HalfMoons_price + this.MiniPizza_num * this.MiniPizza_price;
      
};

function setPlatter() {
    if (this.selected == "S") {
    this.Samosa_num = ref(2)
    this.Pies_num = ref(2)
    this.Springrolls_num =ref(2)
    this.HalfMoons_num = ref(2)
    this.MiniPizza_num = ref(2)
}else if (this.selected === 'M') {
    this.Samosa_num = ref(15)
    this.Pies_num = ref(4)
    this.Springrolls_num =ref(2)
    this.HalfMoons_num = ref(2)
    this.MiniPizza_num = ref(2)
}
 else if (this.selected === 'L') {
    this.Samosa_num = ref(30)
    this.Pies_num = ref(8)
    this.Springrolls_num =ref(4)
    this.HalfMoons_num = ref(4)
    this.MiniPizza_num = ref(4)
}
else if (this.selected === 'XL') {
    this.Samosa_num = ref(60)
    this.Pies_num = ref(16)
    this.Springrolls_num =ref(8)
    this.HalfMoons_num = ref(8)
    this.MiniPizza_num = ref(8)
}else {
    this.Samosa_num = ref(0)
    this.Pies_num = ref(0)
    this.Springrolls_num =ref(0)
    this.HalfMoons_num = ref(0)
    this.MiniPizza_num = ref(0)
}
}
</script>
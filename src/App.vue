<template>
  <div class="w-full h-screen bg-cover bg-no-repeat bg-center " style = "background-image: url('./src/assets/brett-jordan-mWu0EHu5zW8-unsplash(1).jpg')">
  <header><SiteNavigation/></header>
  <div>
   <body>
   <collapsible>
    <template v-slot:title>
    <span class="font-semibold text-xl">Platter Calculator</span>
  </template>
  <template v-slot:content>
    <div>
      <div class="justify-start">
      <form action="">
        <label for="">Platter</label>
        <br>
        <label for="">Size </label>
        <select name="" id="">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
        </select>
        
        <label for="">Composition</label>
        <br>
        <br>
        <label for="">Samosa</label>
        <input type="number " min="1">
        <br>
        <label for="">Price </label>
        <input type="number" min="1" step="any">
        <br>
        <br>
        <label for="">Pies</label>
        <input type="number " min="1">
        <label for="">Price </label>
        <input type="number" min="1" step="any">
        <br>
        <br>
        <label for="">Springrolls</label>
        <input type="number" min="1">
        <label for="">Price </label>
        <input type="number" min="1" step="any">
        <br>
        <br>
        <label for="">Half Moons</label>
        <input type="number" min="1">
        <label for="">Price </label>
        <input type="number" min="1" step="any">
        <br>
        <br>
        <label for="">Mini Pizza</label>
        <input type="number" min="1">
        <label for="">Price </label>
        <input type="number" min="1" step="any">
    </form> 
  </div>
    <div>
      <label for="">Total</label>
    </div>                              
    </div>
  </template>
  </collapsible>
</body>
  </div>
  <div>
  </div>
  Photo by <a href="https://unsplash.com/@brett_jordan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brett Jordan</a> on <a href="https://unsplash.com/photos/mWu0EHu5zW8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
</div>
</template>

<script setup>
import SiteNavigation from './components/SiteNavigation.vue';
import collapsible from './components/collapsible.vue';

</script>

<style lang="scss" scoped>

</style>
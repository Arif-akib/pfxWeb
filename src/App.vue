<template>
    <div @click="closeNavbarByClickingOutside">
    <navbar :hideNav="hideNav"/>
    <banner/>
    <about/>
    <service/>
    <product/>
    <concern/>
    <partner/>
    <client/>
    <slider/>
    <foot/>
    </div>
   
</template>

<script setup>

import navbar from './components/navbar.vue';
import banner from './components/banner.vue';
import about from './components/about.vue';
import service from './components/service.vue';
import product from './components/product.vue';
import concern from './components/concern.vue';
import partner from './components/partner.vue';
import client from './components/clients.vue';
import slider from './components/slider.vue';
import foot from './components/foot.vue';
import {ref} from 'vue'

    const hideNav = ref(true)
    const closeNavbarByClickingOutside = (e) =>{
      // console.log(e.target)
      console.log('x')
      hideNav.value = e.target?.id == "drop" || e.target?.id == "nav-btn" ? false: true
    }

</script>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top:60px ;
}

    /* width */
    ::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
  background: transparent;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background:#ff3e5e; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #d30000; 
}

 
</style>

<template>
   <div id="about" class="flex mx-[5%] relative bg-contain" data-aos="zoom-in">
    <div class="block lg:flex items-center gap-[30px] w-full text-center">
        <div class="lg:w-3/5 silde-left">
            <h1 class="p-[10px] lg:text-left lg:text-4xl xl:text-5xl 2xl:text-7xl text-3xl font-normal">
                We deliver unparalleled software solutions  and cutting-edge digital media content
            </h1>
            <p class="lg:text-lg p-[10px] text-base lg:text-left">Become an integral contributor to our ongoing and thriving enterprise by selecting us as your preferred choice.</p>
        </div>
        <div class="lg:w-[40%] static m-auto z-2">
            <img src="@/assets/image/b5.png" alt="" class="sm:w-[40%] lg:w-full m-auto">
        </div>
    </div>
    <div class="area" style="height: 80dvh;" >
        <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div >
 </div> 
</template>

<script setup>
import {onMounted } from "vue";
import AOS from "aos";
import 'aos/dist/aos.css'
onMounted(() => {
    AOS.init();
})

</script>
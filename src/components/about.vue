<template>
   <div id="about" class="flex mx-[5%] relative bg-contain mb-12" data-aos="zoom-in">
    <div class="block lg:flex gap-[30px] w-full text-center">
        <div class="lg:w-1/2 silde-left">
            <p class="p-[10px] lg:text-left md:text-[2.5rem] text-[1.875rem] font-normal text-center tracking-wider leading-[3rem]">
                We deliver unparalleled software solutions  and cutting-edge digital media content
            </p>
            <p class="lg:text-lg p-[10px] text-base lg:text-left mt-8">Become an integral contributor to our ongoing and thriving enterprise by selecting us as your preferred choice.</p>
        </div>
        <div class="lg:w-[50%] static z-2 md:-mt-20 mt-0">
            <img src="@/assets/image/b5.png" alt="" class="sm:w-[40%] md:w-4/5 w-full m-auto">
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
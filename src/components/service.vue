<template>
    <div class="px-[5%] text-center" id="service">
        <h1 class="pb-[50px] lg:text-4xl xl:text-5xl 2xl:text-7xl text-3xl font-normal" data-aos="fade-right">What can we do for <span class="text-[#ff3e5e]">Your business</span></h1>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px]" data-aos="zoom-in">
            <div class="px-[20px] pt-[30px] pb-[20px] bg-white border border-inherit rounded-[5px] transition ease-linear duration-300  hover:translate-y-[-20px] ">
                <h3 class="mb-[10px] text-[25px] font-medium">Software for SMEs'</h3>
                <img src="@/assets/image/b3.png" alt="" class="max-h-[80px] max-w-[80px] m-auto">
                <p class="text-[15px] text-center pt-[10px]">We offer comprehensive assistance in developing and implementing a wide range of personalized and business-oriented software solutions, tailored to your specific preferences.
                </p>
            </div>
            <div class="px-[20px] pt-[30px] pb-[20px] bg-white border border-inherit rounded-[5px] transition ease-linear duration-300 hover:translate-y-[-20px]">
                <h3 class="mb-[10px] text-[25px] font-medium">Mobile App</h3>
                <img src="@/assets/image/b1.png" alt="" class="max-h-[80px] max-w-[80px] m-auto">
                <p class="text-[15px] text-center pt-[10px]">We specialize in the development of mobile applications for both Android and iOS platforms to create seamless user experiences.
                </p>
            </div>
            <div class="px-[20px] pt-[30px] pb-[20px] bg-white border border-inherit rounded-[5px] transition ease-linear duration-300 hover:translate-y-[-20px]">
                <h3 class="mb-[10px] text-[25px] font-medium">Web Development</h3>
                <img src="@/assets/image/b4.png" alt="" class="max-h-[80px] max-w-[80px] m-auto">
                <p class="text-[15px] text-center pt-[10px]">We excel in crafting websites that cater to the distinct needs of ecommerce companies and individuals seeking an online presence.
                </p>
            </div>
        </div>
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

<style>

</style>
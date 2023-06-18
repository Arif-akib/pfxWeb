<template>
    <div id="client">
        <div class="mx-[5%] mt-12 mb-5 relative rounded-sm pb-[30px]" >
            <h1 class="text-center mt-7 mb-5 lg:text-4xl xl:text-5xl 2xl:text-7xl text-3xl font-normal" data-aos="fade-right">We Are Fortunate To Work With<br>The Best <span class="text-[#ff3e5e]">Clients</span></h1>
            <div class="w-[70%] xl:w-[50%] m-auto text-center pt-15px">
                <p class="text-[15px]" data-aos="fade-left">While we are at the forefront of and specialized in software design and build,we are very familiar with a number of delivery methods and are confident we can find the process that will best help you meet your goals</p>
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
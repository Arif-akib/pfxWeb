<template>
    <div id="partners" class="partner reveal" data-aos="zoom-in">
        <h1 class="p-5 text-center lg:text-4xl xl:text-5xl 2xl:text-7xl text-3xl font-normal">Our <span class="text-[#ff3e5e]">Partner</span></h1>
        <div class="w-[90%] m-auto pb-[10px]">
            <div class="grid grid-cols-4 lg:grid-cols-8 w-full m-auto gap-5 items-center justify-center">
                <div class="">
                    <img src="@/assets/image/a1.png" alt="" class="w-full">
                </div>
                <div class="">
                    <img src="@/assets/image/a2.png" alt="" class="w-full">
                </div>
                <div class="">
                    <img src="@/assets/image/a3.png" alt="" class="w-full">
                </div>
                <div class="">
                    <img src="@/assets/image/a4.png" alt="" class="w-full">
                </div>
                <div class="">
                    <img src="@/assets/image/a5.png" alt="" class="w-full">
                </div>
                <div class="">
                    <img src="@/assets/image/a6.png" alt="" class="w-full">
                </div>
                <div class="">
                    <img src="@/assets/image/a7.png" alt="" class="w-full">
                </div>
                <div class="">
                    <img src="@/assets/image/a8.png" alt="" class="w-full">
                </div>
            </div>
        </div>
    </div>
   
</template>

<script setup>
import {onMounted } from "vue";
import AOS from "aos";
import 'aos/dist/aos.css'

// const images = ref([
//     {id: 0, src: 'http://localhost:5173/src/assets/image/a1.png'},
//     {id: 1, src: 'http://localhost:5173/src/assets/image/a2.png'},
//     {id: 2, src: 'http://localhost:5173/src/assets/image/a3.png'},
//     {id: 3, src: 'http://localhost:5173/src/assets/image/a4.png'},
//     {id: 4, src: 'http://localhost:5173/src/assets/image/a5.png'},
//     {id: 5, src: 'http://localhost:5173/src/assets/image/a6.png'},
//     {id: 6, src: 'http://localhost:5173/src/assets/image/a7.png'},
//     {id: 7, src: 'http://localhost:5173/src/assets/image/a8.png'},
// ])

onMounted(() => {
    AOS.init();
})

</script>
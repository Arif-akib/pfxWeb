<template>
    <div class="mx-[5%] mb-12 relative" id="concerns">
      <h1 class="p-5 text-center lg:text-4xl xl:text-5xl 2xl:text-7xl text-3xl font-normal" data-aos="fade-right">Our <span style="color:#ff3e5e;">Concerns</span></h1>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mt-7" data-aos="zoom-in">
          <div class="w-full">
              <div class="w-[88%] h-[207px] relative mb-[-190px] z-10 rounded-sm bg-[url(@/assets/image/c2.jpg)] bg-contain m-auto">
                  <div class="bg-[#000000be] flex items-center h-full w-full z-10 rounded-sm">
                      <img src="@/assets/image/c7.png" alt="" class="w-full"> 
                  </div>
              </div>
              <div class="px-[30px] pt-[200px] pb-5 text-center w-full border border-inherit relative bg-[#fff9f987] rounded-sm">
                  <p class="h-[120px] xl:h-[100px] text-[15px]">Following the tagline of “Create. Innovate and Digitalize”, Prefly Digital is a full flowing digital agency with the aim of transforming your brands into legends.
                  </p>
              </div>
          </div>
          <div class="w-full">
            <div class="w-[88%] h-[207px] relative mb-[-190px] z-10 rounded-sm bg-[url(@/assets/image/c1.jpg)] bg-contain m-auto">
                <div class="bg-[#000000be] flex items-center h-full w-full z-10 rounded-sm">
                      <img src="@/assets/image/c8.png" alt="" class="w-full">
                  </div>
              </div>
              <div class="px-[30px] pt-[200px] pb-5 text-center w-full border border-inherit relative bg-[#fff9f987] rounded-sm">
                  <p class="h-[120px] xl:h-[100px] text-[15px]">Twills is a fashion brand where style meets sophistication. Step into the world of fashion with Twills and make a statement that is uniquely you.
                  </p>
              </div>
          </div>
          <div class="w-full">
            <div class="w-[88%] h-[207px] relative mb-[-190px] z-10 rounded-sm bg-[url(@/assets/image/c3.jpg)] bg-contain m-auto">
                <div class="bg-[#000000be] flex items-center h-full w-full z-10 rounded-sm">
                      <img src="@/assets/image/c9.png" alt="" class="w-full">
                  </div>
              </div>
              <div class="px-[30px] pt-[200px] pb-5 text-center w-full border border-inherit relative bg-[#fff9f987] rounded-sm">
                  <p class="h-[120px] xl:h-[100px] text-[15px]">Bhorosha Welfare aims to provide the hard working industrial workers & employees with solutions that will bring Economic, Social & Digital transformation in their life.
                  </p>
              </div>
          </div>
         
      </div>
  
      <div class="hidden xl:flex" style="position: absolute; height: 100dvh;top: 0;margin-left: -5%; z-index: -10;">
          <li style="position: absolute;left:150px;top:-10px; height: 25px;width: 25px; background: rgba(255, 0, 0, 0.062); border-radius: 50%; list-style: none;"></li>
          <li style="position: absolute;right:250px;top:-50px; height: 20px;width: 20px; background: rgba(255, 0, 0, 0.062); border-radius: 50%;list-style: none;"></li>
          <li style="position: absolute;bottom:-50px;left:230px; height: 30px;width: 30px; background: rgba(255, 0, 0, 0.062); border-radius: 50%;list-style: none;"></li>
          <li style="position: absolute;bottom:50px;right:430px; height: 20px;width: 20px; background: rgba(255, 0, 0, 0.062); border-radius: 50%;list-style: none;"></li>
          <li style="position: absolute;left:450px;top:400px; height: 20px;width: 20px; background: rgba(255, 0, 0, 0.062); border-radius: 50%;list-style: none;"></li>
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
  /* *{
    outline: 1px solid yellowgreen;
  } */
</style>
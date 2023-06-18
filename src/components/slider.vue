<template>
    <div class="mx-[5%] mb-12" data-aos="zoom-in">
        <swiper
      :modules="modules"
      :slides-per-view="5"
      :space-between="0"
      :autoplay="true"
      :breakpoints="breakpoints"
      class=""
    >
       <swiper-slide class="w-full flex justify-center h-[80px] md:h-[120px] p-[10px] "><img src="@/assets/image/C-01.jpg" alt="" class="h-[60px] md:h-[100px] fillter grayscale m-auto hover:grayscale-0"></swiper-slide>

      <swiper-slide class="w-full flex justify-center h-[80px] md:h-[120px] p-[10px] "><img src="@/assets/image/C-02.jpg" alt="" class="h-[60px] md:h-[100px] fillter grayscale m-auto hover:grayscale-0"></swiper-slide>

       <swiper-slide class="w-full flex justify-center h-[80px] md:h-[120px] p-[10px] "><img src="@/assets/image/C-03.jpg" alt="" class="h-[60px] md:h-[100px] fillter grayscale m-auto hover:grayscale-0"></swiper-slide>
      
       <swiper-slide class="w-full flex justify-center h-[80px] md:h-[120px] p-[10px] "><img src="@/assets/image/C-04.jpg" alt="" class="h-[60px] md:h-[100px] fillter grayscale m-auto hover:grayscale-0"></swiper-slide>
      
       <swiper-slide class="w-full flex justify-center h-[80px] md:h-[120px] p-[10px] "><img src="@/assets/image/C-05.jpg" alt="" class="h-[60px] md:h-[100px] fillter grayscale m-auto hover:grayscale-0"></swiper-slide>
      
       <swiper-slide class="w-full flex justify-center h-[80px] md:h-[120px] p-[10px] "><img src="@/assets/image/C-06.jpg" alt="" class="h-[60px] md:h-[100px] fillter grayscale m-auto hover:grayscale-0"></swiper-slide>
      
       <swiper-slide class="w-full flex justify-center h-[80px] md:h-[120px] p-[10px] "><img src="@/assets/image/C-07.jpg" alt="" class="h-[60px] md:h-[100px] fillter grayscale m-auto hover:grayscale-0"></swiper-slide>
      
       <swiper-slide class="w-full flex justify-center h-[80px] md:h-[120px] p-[10px] "><img src="@/assets/image/C-08.jpg" alt="" class="h-[60px] md:h-[100px] fillter grayscale m-auto hover:grayscale-0"></swiper-slide>
      
       <swiper-slide class="w-full flex justify-center h-[80px] md:h-[120px] p-[10px] "><img src="@/assets/image/C-09.jpg" alt="" class="h-[60px] md:h-[100px] fillter grayscale m-auto hover:grayscale-0"></swiper-slide>
      
       <swiper-slide class="w-full flex justify-center h-[80px] md:h-[120px] p-[10px] "><img src="@/assets/image/C-10.jpg" alt="" class="h-[60px] md:h-[100px] fillter grayscale m-auto hover:grayscale-0"></swiper-slide>
      
       <swiper-slide class="w-full flex justify-center h-[80px] md:h-[120px] p-[10px] "><img src="@/assets/image/C-11.jpg" alt="" class="h-[60px] md:h-[100px] fillter grayscale m-auto hover:grayscale-0"></swiper-slide>
      
       <swiper-slide class="w-full flex justify-center h-[80px] md:h-[120px] p-[10px] "><img src="@/assets/image/C-12.jpg" alt="" class="h-[60px] md:h-[100px] fillter grayscale m-auto hover:grayscale-0"></swiper-slide>
      
       <swiper-slide class="w-full flex justify-center h-[80px] md:h-[120px] p-[10px] "><img src="@/assets/image/C-13.jpg" alt="" class="h-[60px] md:h-[100px] fillter grayscale m-auto hover:grayscale-0"></swiper-slide>
      
       <swiper-slide class="w-full flex justify-center h-[80px] md:h-[120px] p-[10px] "><img src="@/assets/image/C-14.jpg" alt="" class="h-[60px] md:h-[100px] fillter grayscale m-auto hover:grayscale-0"></swiper-slide>
      
       <swiper-slide class="w-full flex justify-center h-[80px] md:h-[120px] p-[10px] "><img src="@/assets/image/C-15.jpg" alt="" class="h-[60px] md:h-[100px] fillter grayscale m-auto hover:grayscale-0"></swiper-slide>
      
       <swiper-slide class="w-full flex justify-center h-[80px] md:h-[120px] p-[10px] "><img src="@/assets/image/C-16.jpg" alt="" class="h-[60px] md:h-[100px] fillter grayscale m-auto hover:grayscale-0"></swiper-slide>
    </swiper>
    </div>
    
  </template>
  <script>
    import {ref} from 'vue'
    // import Swiper core and required modules
    import {Autoplay, Pagination, Scrollbar, A11y } from 'swiper';
    // import { Autoplay,Pagination } from 'swiper';
  
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
  
    // Import Swiper styles
    export default {
      name: 'client-slider',

      components: {
        Swiper,
        SwiperSlide
      },
      setup() {
        const modules = ref([Autoplay, Pagination,Scrollbar, A11y])
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        const breakpoints = ref({
          320: {       
            slidesPerView: 2,
            spaceBetween: 10     
          },          
          770: {       
            slidesPerView: 2,       
            spaceBetween: 50     
          },   
      
          771: {       
            slidesPerView: 4,       
            spaceBetween: 30     
          } 
        })

        return {
          modules,
          onSwiper,
          onSlideChange,
          breakpoints,
        }
      }
    }
    import {onMounted } from "vue";
    import AOS from "aos";
    import 'aos/dist/aos.css'
    onMounted(() => {
      AOS.init();
    })
    
    
  </script>
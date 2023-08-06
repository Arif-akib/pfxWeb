<template>
    <div class="h-[100vh] w-full flex items-center justify-center bg-gradient-to-b from-[#ecfdff] to-[#ffffff85] ">
        <div class="w-4/5 lg:w-full flex flex-col items-center gap-2 animate-[banercon_.5s_linear]">
            <p class="lg:text-[3rem] md:text-[2.25rem] text-[1.875rem] font-normal lg:w-2/4 text-center tracking-wider leading-[3.5rem]">
                ONE STOP SOLUTION FOR THE BEST 
                <span class="text-[#ff3e5e]">SOFTWARE</span> 
                EXPERIENCE</p>
            <p class="text-lg text-black text-center lg:w-2/4 mt-8">We provide innovative solutions to digitalise the lifestyle of our valuable customers ranging from High end to low end softwares</p>
            <button class="mt-3 h-[40px] w-[120px] text-base text-white rounded-[8px] cursor-pointer bg-[#ff3e5e]/90 hover:bg-[#ff3e5e] z-10 transition ease-linear duration-300 hover:scale-110" onclick="document.location='#about'">Discover</button>
        </div>
        <div class="area" >
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

<script>
</script>

<style>
   .area{
        width: 100%;
        height: 90vh;
        position: absolute;
        overflow: hidden;
    }

    .circles{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .circles li{
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: rgba(255, 161, 197, 0.397);
        animation: animate 25s linear infinite;
        bottom: -50px;    
    }

    .circles li:nth-child(1){
        left: 25%;
        width: 30px;
        height: 30px;
        animation-delay: 0s;
    }
    .circles li:nth-child(2){
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
    }
    .circles li:nth-child(3){
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
    }
    .circles li:nth-child(4){
        left: 40%;
        width: 25px;
        height: 25px;
        animation-delay: 0s;
        animation-duration: 18s;
    }
    .circles li:nth-child(5){
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
    }
    .circles li:nth-child(6){
        left: 75%;
        width: 35px;
        height: 35px;
        animation-delay: 3s;
    }
    .circles li:nth-child(7){
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
    }
    .circles li:nth-child(8){
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 4s;
        animation-duration: 35s;
    }
    .circles li:nth-child(9){
        left: 65%;
        width: 15px;
        height: 15px;
        animation-delay: 38s;
        animation-duration: 15s;
    }
    .circles li:nth-child(10){
        left: 45%;
        width: 15px;
        height: 15px;
        animation-delay: 10s;
        animation-duration: 35s;
    }
    .circles li:nth-child(11){
        left: 60%;
        width: 15px;
        height: 15px;
        animation-delay: 12s;
        animation-duration: 35s;
    }
    .circles li:nth-child(12){
        left: 95%;
        width: 15px;
        height: 15px;
        animation-delay: 27s;
        animation-duration: 35s;
    }
    @keyframes animate {

        0%{
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 50%;
        }

        100%{
            transform: translateY(-1000px) rotate(0deg);
            opacity: 0;
            border-radius: 50%;
        }
    }
</style>
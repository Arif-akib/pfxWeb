<template>
    <div>
        <div class="flex items-center justify-between w-full bg-white fixed top-0 h-[60px] shadow-sm z-50 backdrop-blur-lg">
            <a href="" class="flex items-center ml-[5%] cursor-pointer"><img class="h-[40px]" src="@/assets/image/02.png"/></a>
            <ul class="lg:flex gap-[25px] hidden">
                <li><a href="#about" class="text-base font-normal text-black cursor-pointer w-full hover:text-[#fc0b33] transition ease-linear duration-300">About Us</a></li>
                <li><a href="#service" class="text-base font-normal text-black cursor-pointer w-full hover:text-[#fc0b33] transition ease-linear duration-300">Services</a></li>
                <li><a href="#products" class="text-base font-normal text-black cursor-pointer w-full hover:text-[#fc0b33] transition ease-linear duration-300">Products</a></li>
                <li><a href="#concerns" class="text-base font-normal text-black cursor-pointer w-full hover:text-[#fc0b33] transition ease-linear duration-300">Concerns</a></li>
                <li><a href="#partners" class="text-base font-normal text-black cursor-pointer w-full hover:text-[#fc0b33] transition ease-linear duration-300">Partners</a></li>
                <li><a href="#client" class="text-base font-normal text-black cursor-pointer w-full hover:text-[#fc0b33] transition ease-linear duration-300">Clients</a></li>
            </ul>
            <button class="h-[40px] w-[120px] text-base text-white mr-[5%] rounded-[8px] p-[5px 10px] transition ease-linear duration-300 cursor-pointer bg-[#ff3e5e] hover:bg-[#fc0b33] hidden lg:block" onclick="window.location.href='https://www.facebook.com/Prefeex/';">Contact Us</button>
            <div id="menu" v-on:click="menuClick" v-click-outside="close" class="lg:hidden block mr-[5%] h-7 w-7">
                <img src="@/assets/image/menu.png" alt="" id="nav-btn" class="">
            </div>
        </div> 
        
        <div class="lg:hidden flex top-[60px] flex-col items-center pb-5 gap-[5px] fixed w-full -translate-y-full transition ease-linear duration-500 bg-white border-b-[.5px] z-40" id='drop'>
            <li class="list-none pt-[10px] pb-[5px] "><a href="#about" class="hover:text-[#ff3e5e]">About Us</a></li>
            <li class="list-none pb-[5px]"><a href="#service" class="hover:text-[#ff3e5e]">Services</a></li>
            <li class="list-none pb-[5px]"><a href="#products" class="hover:text-[#ff3e5e]">Products</a></li>
            <li class="list-none pb-[5px]"><a href="#concerns" class="hover:text-[#ff3e5e]">Concerns</a></li>
            <li class="list-none pb-[5px]"><a href="#partners" class="hover:text-[#ff3e5e]">Partners</a></li>
            <li class="list-none pb-[5px]"><a href="#client" class="hover:text-[#ff3e5e]">Clients</a></li>
            <li class="list-none h-[40px] w-[120px] text-base text-white rounded-[8px] p-[5px 10px] transition ease-linear duration-300 cursor-pointer bg-[#ff3e5e] hover:bg-[#fc0b33] flex justify-center items-center "><a href="https://www.facebook.com/Prefeex/" target="_blank" >Contact Us</a></li>
        </div>
    </div>
</template>


<script>
export default{
    props: ["hideNav"],
    methods:{
        menuClick(){
            // console.log('click',this.hideNav)
            let drop=document.getElementById('drop');
            if(drop.style.transform=='translateY(0%)'){
            drop.style.transform="translateY(-100%)";
            }
            else{
                drop.style.transform="translateY(0%)";
            }

            if(this.hideNav){
                drop.style.transform="translateY(-100%)";
            }
        },
    },
    updated(){
        this.menuClick()
    }


};
</script>


<style>
</style>
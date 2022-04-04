<template>
    <div id="footer" class="footer-divider bg-footerone h-24 w-full mt-24" style="clip-path: polygon(0 0, 0 0, 100% 100%, 0% 100%);"></div>
    <div class="bg-footerone min-h-[200px] w-full h-auto">
        <div class="min-h-24 h-auto pt-4 pb-16 w-full relative xl:pl-[12%] xl:pr-[15%] md:pl-12 pl-4 pr-10 md:pr-20">
            <h3 class="before:content-['<'] after:content-['>'] text-lg text-left text-opacity-40 text-lighteraboutme mb-8">footer</h3>
            <div class="pl-2 sm:pl-4">
                <div class="flex w-full h-auto gap-8 flex-col md:flex-row">
                    <div class="w-full">
                        <h1 class="text-white text-2xl font-medium text-left pb-4">Website Created With</h1>
                        <h2 class="text-white text-lg font-light text-opacity-60 text-left">➔<span class="ml-4">Vue.js</span></h2>
                        <h2 class="text-white text-lg font-light text-opacity-60 text-left">➔<span class="ml-4">TailwindCSS</span></h2>
                        <h2 class="text-white text-lg font-light text-opacity-60 text-left">➔<span class="ml-4">KUTE.js</span></h2>
                        <h2 class="text-white text-lg font-light text-opacity-60 text-left">➔<span class="ml-4">JSON</span></h2>
                        <h2 class="text-white text-lg font-light text-opacity-10 text-left pt-4">➔<span class="ml-4">> 100 Cups of Coffee</span></h2>
                    </div>
                    <div class="w-full relative">
                        <h1 class="text-white text-2xl font-medium text-left pb-4">Page Navigation</h1>
                        <router-link :to="{name:'mainpage',hash:'#banner'}" class="font-normal text-left block absolute left-0  text-lg text-footerurl hover:text-footerurlhover duration-100">About Me</router-link>
                        <router-link :to="{name:'mainpage',hash:'#myskills'}" class="font-normal text-left block absolute left-0  text-lg text-footerurl hover:text-footerurlhover duration-100 mt-[25px] ">Skills</router-link>
                        <router-link :to="{name:'mainpage',hash:'#myprojects'}" class="font-normal text-left block absolute left-0  text-lg text-footerurl hover:text-footerurlhover duration-100 mt-[50px] ">Projects</router-link>
                        <router-link :to="{name:'mainpage',hash:'#myblog'}" class="font-normal text-left block absolute left-0  text-lg text-footerurl hover:text-footerurlhover duration-100 mt-[75px] ">Blog</router-link>
                        <router-link :to="{name:'mainpage',hash:'#mycontact'}" class="font-normal text-left block absolute left-0  text-lg text-footerurl hover:text-footerurlhover duration-100 mt-[100px] ">Contact</router-link>
                    </div>
                    <div class="w-full relative">
                        <h1 class="text-white text-2xl font-medium text-left pb-4">Get in Touch!</h1>
                        <a href="https://www.linkedin.com/in/07030b20b/" class="font-normal text-left block absolute left-0  text-lg text-footerurl hover:text-footerurlhover duration-100">LinkedIn</a>
                        <a href="https://github.com/devVelocity" class="font-normal text-left block absolute left-0  text-lg text-footerurl hover:text-footerurlhover duration-100 mt-[25px]">GitHub</a>
                    </div>
                </div>
                <span class="block w-full h-[1px] bg-footerline rounded-md mt-12"></span>
                <h1 class="text-left text-white font-light mt-8">© Kieran P - 2022</h1>
                <h1 class="text-left text-white font-light mt-1 text-opacity-50">Have a good {{dayToday}}!</h1>
            </div>
        </div>
    </div>
    <div class="bg-footertwo w-full h-auto min-h-[50px]">
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            dayToday: "none",
            day: null,
        }
    },
    mounted(){
        const d = new Date();
        this.day = d.getDay()     
        
        const dateArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

        this.dayToday = dateArr[this.day]
        
    }
}
</script>

<style>

</style>
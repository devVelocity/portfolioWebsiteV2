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
                    <div class="w-full">
                        <h1 class="text-white text-2xl font-medium text-left">Page Navigation</h1>
                    </div>
                    <div class="w-full">
                        <h1 class="text-white text-2xl font-medium text-left">Get in Touch!</h1>
                    </div>
                </div>
                <span class="block w-full h-[1px] bg-footerline rounded-md mt-12"></span>
                <h1 class="text-left text-white font-light mt-8">© Kieran P - 2022</h1>
                <h1 class="text-left text-white font-light mt-1 text-opacity-50">Have a good {{dayToday}}!</h1>
            </div>
        </div>
    </div>
    <div class="bg-footertwo w-full min-h-[50px]"></div>
</template>

<script>
export default {
    data(){
        return{
            dayToday: "none",
        }
    },
    mounted(){
        const d = new Date();
        let day = d.getDay()      
        
        if (day == 0){
            this.dayToday = "Sunday"
        }else if (day == 1){
            this.dayToday = "Monday"
        }else if (day == 2){
            this.dayToday = "Tuesday"
        }else if (day == 3){
            this.dayToday = "Wednesday"
        }else if (day == 4){
            this.dayToday = "Thursday"
        }else if (day == 5){
            this.dayToday = "Friday"
        }else if (day == 6){
            this.dayToday = "Saturday"
        }
    }
}
</script>

<style>

</style>
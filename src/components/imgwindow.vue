<template>
    <div v-if="open" @click.self="closeWindow" class="bg-black w-full bg-opacity-80 h-full fixed top-0 z-40">
        <div @click.self="closeWindow" class="bg-black h-28 z-40 flex items-center xl:pl-[12%] xl:pr-[12%] md:pl-8 md:pr-8 pl-4 pr-4 md:justify-between justify-end top-0 w-full relative">
            <h1 class="text-white md:text-lg text-md md:w-[32rem] md:block hidden w-64 text-left">Click the X or anywhere outside of the box to close</h1>
            <h1 class="text-white text-5xl font-bold right-8 hover:cursor-pointer" @click.self="closeWindow">X</h1>
        </div>
        <div @click.self="closeWindow" class="fixed z-40 w-[95%] h-[90%] left-[2.5%] flex flex-wrap items-center justify-center gap-4 overflow-y-scroll no-scrollbar top-28 pb-12">
            <innerWindow v-for="item in imgsrc" :item="item"></innerWindow>
        </div>
    </div>
    <!-- <div v-if="open" class="bg-black w-full bg-opacity-80 h-full fixed top-0 z-40">
    
    </div> -->

</template>

<script>
    import innerWindow from '@/components/imginner.vue'
    export default {
        components:{innerWindow},
        props:['open','imgsrc','imgalt'],
        data(){
            return{
                
            }
        },
        methods:{
            closeWindow(){
              this.$emit("windowClose")
            }
        }
    }
</script>

<style scoped>

.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar{
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>
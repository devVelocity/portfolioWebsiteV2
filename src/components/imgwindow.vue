<template>
    <div v-if="open" @click.self="closeWindow" class="bg-black w-full bg-opacity-80 h-full fixed top-0 z-40">
        <div class="bg-black h-20 z-40 flex items-center xl:pl-[12%] xl:pr-[12%] pl-4 pr-4 lg:pr-8 justify-between fixed top-0 w-full"></div>
        <div class="top-20 fixed z-40 w-[95%] h-[90%] left-[2.5%]">

        </div>
    </div>
    <!-- <div v-if="open" class="bg-black w-full bg-opacity-80 h-full fixed top-0 z-40">
    
    </div> -->

</template>

<script>
    export default {
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

</style>
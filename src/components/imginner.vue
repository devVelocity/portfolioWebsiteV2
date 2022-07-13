<template>
    <div ref="itempos" class="relative group hover:cursor-pointer nonactive duration-300" :class="{ active : isActive }" @click="toggleActive(item)">
        <div class="w-full h-full absolute flex items-center justify-center">
            <h1 class="text-white relative w-full z-20 group-hover:opacity-100 opacity-0" v-if="!isActive">Click to maximise</h1>#
             <h1 class="text-white relative w-full z-20 group-hover:opacity-100 opacity-0" v-if="isActive">Click to minimise</h1>
        </div>
        <div class="w-full h-full absolute top-0 left-0 z-10 group-hover:opacity-80 opacity-0 duration-100 bg-gray-800">
        </div>
        <img :src="require(`@/assets/images/`+this.item)" class="w-full">
    </div>
</template>

<script>
    export default {
        props:['item'],
        methods:{
            toggleActive(item){
                this.isActive = !this.isActive
            }
        },
        data(){
            return{
                isActive: false
            }
        }
    }
</script>

<style scoped>
.nonactive{
    width: 40%
}
.active{
    width: 90%
}
</style>
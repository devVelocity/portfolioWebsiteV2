<template>
  <div class="navigation bg-headercol h-20 z-40 flex items-center xl:pl-[12%] xl:pr-[12%] pl-4 pr-8 justify-between fixed top-0 w-full">
    <div class="logo">
      <div class="relative w-16 h-16 flex items-center jusitfy-center">
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-4">
          <path d="M0 20.765C3.68579 20.765 11.9607 17.6295 13.9126 14.0164C15.8645 10.4033 17.5984 3.42623 17.5984 0" stroke="#237DCF" stroke-width="7"/>
          <path d="M0.259521 20.765C3.68575 20.765 11.1676 26.2677 13.3415 29.7459C15.5153 33.224 16.0409 39.3497 16.0409 42.7759" stroke="#237DCF" stroke-width="7"/>
          <path d="M44.6967 22.0629C41.0109 22.0629 32.736 25.1984 30.7841 28.8115C28.8322 32.4246 27.0983 39.4017 27.0983 42.8279" stroke="#237DCF" stroke-width="7"/>
          <path d="M44.4371 22.0629C41.0109 22.0629 33.529 16.5601 31.3552 13.082C29.1813 9.60385 28.6557 3.47817 28.6557 0.0519372" stroke="#237DCF" stroke-width="7"/>
        </svg>
        <h1 class=" text-white text-2xl left-8 absolute w-32 block opacity-0 sm:opacity-100 font-medium">Kieran P</h1>
      </div>
    </div>
    <div class="lg:flex gap-12 hidden">
      <!-- <a class="text-white hover:cursor-pointer text-opacity-50 relative hover:text-opacity-100 duration-100 after:w-[80%] after:ml-[10%] after:h-0 after:rounded-lg after:duration-300 after:bg-opacity-0 hover:after:bg-opacity-100 after:bg-white hover:after:h-[2px] after:absolute after:block after:bottom-0 hover:after:bottom-[-5px] text-lg">About Me</a> -->
      <router-link :to="{name:'mainpage',hash:'#banner'}" class="font-normal text-white hover:cursor-pointer text-opacity-60 relative hover:text-opacity-100 duration-100 after:w-0 hover:after:w-full after:rounded-lg after:duration-300 after:bg-opacity-0 hover:after:bg-opacity-100 after:bg-white after:h-[2px] after:absolute after:block after:bottom--2 text-lg">About Me</router-link>
      <router-link :to="{name:'mainpage',hash:'#myskills'}" class="font-normal text-white hover:cursor-pointer text-opacity-60 relative hover:text-opacity-100 duration-100 after:w-0 hover:after:w-full after:rounded-lg after:duration-300 after:bg-opacity-0 hover:after:bg-opacity-100 after:bg-white after:h-[2px] after:absolute after:block after:bottom--2 text-lg">Skills</router-link>
      <router-link :to="{name:'mainpage',hash:'#myprojects'}" class="font-normal text-white hover:cursor-pointer text-opacity-60 relative hover:text-opacity-100 duration-100 after:w-0 hover:after:w-full after:rounded-lg after:duration-300 after:bg-opacity-0 hover:after:bg-opacity-100 after:bg-white after:h-[2px] after:absolute after:block after:bottom--2 text-lg">Projects</router-link>
      <router-link :to="{name:'mainpage',hash:'#myblog'}" class="font-normal text-white hover:cursor-pointer text-opacity-60 relative hover:text-opacity-100 duration-100 after:w-0 hover:after:w-full after:rounded-lg after:duration-300 after:bg-opacity-0 hover:after:bg-opacity-100 after:bg-white after:h-[2px] after:absolute after:block after:bottom--2 text-lg">Blog</router-link>
      <router-link :to="{name:'mainpage',hash:'#mycontact'}" class="font-normal text-white hover:cursor-pointer text-opacity-60 relative hover:text-opacity-100 duration-100 after:w-0 hover:after:w-full after:rounded-lg after:duration-300 after:bg-opacity-0 hover:after:bg-opacity-100 after:bg-white after:h-[2px] after:absolute after:block after:bottom--2 text-lg">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

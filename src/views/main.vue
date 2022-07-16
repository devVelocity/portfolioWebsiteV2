<template>
  <imgwindow :open="imgdisplayopen" :imgsrc="imgsrc" :imgalt="imgalt" @windowClose='this.imgdisplayopen = false'></imgwindow>
  <div class="home">
    <div ref="top" id="banner" class="min-h-[30rem] xl:pl-[12%] xl:pr-[12%] pl-4 pr-4 w-full bg-bannercol relative flex justify-between gap-8">
      <div id="info-container" class="relative mt-8 md:ml-8 ml-0 mb-16 mr-8">
        <h3 class="before:content-['<'] after:content-['>'] text-lg text-left">div</h3>
        <div class="sm:ml-4 ml-2">
          <h2 class="text-2xl text-white mt-12 text-left font-light"><span class="mr-4 animate-wiggle inline-block">👋</span>Hello!</h2>
          <h1 class="text-5xl text-white mt-6 text-left font-medium">Welcome to my Portfolio!</h1>
          <h3 class="text-lg text-white mt-8 text-left font-extralight">Frontend Development / Software Development / Programming</h3>
          <router-link :to="{name:'mainpage',hash:'#mycontact'}" class="left-4 text-white font-normal p-2 pl-4 pr-4 rounded-lg hover:bg-blue-800 duration-100 bg-blue-600 block w-fit mt-8">Get in Touch</router-link>
        </div>
        <h3 class="before:content-['<'] after:content-['>'] text-lg text-left mt-12">/div</h3>
      </div>
      <div id="banner-logo" class="w-1/2 mt-12 hidden xl:flex relative  items-center justify-end">
        <svg xmlns="http://www.w3.org/2000/svg" id="banner-logo-svg" viewBox="0 0 295 300" class="relative w-auto mr-12 h-[350px] duration-300" fill="transparent">
          <path id="logo-banner-path-1" d="M223.5 198C234.3 182.4 275 170.833 294 167V122C278.167 116.833 242.9 100.5 228.5 76.5C214.1 52.5 211.167 16.1667 211.5 1H165.5C165.5 1 165.5 45.5 180 83.5C187.267 102.545 214.667 129.333 228.5 140C221.167 141.667 202.5 150.2 186.5 171C170.5 191.8 159.5 252 156 279.5H201C204 258.833 212.7 213.6 223.5 198Z" class="stroke-headercol duration-700 stroke-8" stroke-width="2"/>
          <path id="logo-banner-path-2" d="M223.5 198C234.3 182.4 275 170.833 294 167V122C278.167 116.833 242.9 100.5 228.5 76.5C214.1 52.5 211.167 16.1667 211.5 1H165.5C165.5 1 165.5 45.5 180 83.5C187.267 102.545 214.667 129.333 228.5 140C221.167 141.667 202.5 150.2 186.5 171C170.5 191.8 159.5 252 156 279.5H201C204 258.833 212.7 213.6 223.5 198Z" class="stroke-headercol duration-700 stroke-8" stroke-width="2"/>
          <path id="logo-banner-path-3" d="M223.5 198C234.3 182.4 275 170.833 294 167V122C278.167 116.833 242.9 100.5 228.5 76.5C214.1 52.5 211.167 16.1667 211.5 1H165.5C165.5 1 165.5 45.5 180 83.5C187.267 102.545 214.667 129.333 228.5 140C221.167 141.667 202.5 150.2 186.5 171C170.5 191.8 159.5 252 156 279.5H201C204 258.833 212.7 213.6 223.5 198Z" class="stroke-headercol duration-700 stroke-8" stroke-width="2"/>
          <path id="logo-banner-path-4" d="M71.5 82.5C60.7 98.1 20 109.667 1 113.5V158.5C16.8333 163.667 52.1 180 66.5 204C80.9 228 83.8333 264.333 83.5 279.5H129.5C129.5 279.5 129.5 235 115 197C107.733 177.955 80.3333 151.167 66.5 140.5C73.8333 138.833 92.5 130.3 108.5 109.5C124.5 88.7 135.5 28.5 139 1H94C91 21.6667 82.3 66.9 71.5 82.5Z" class="stroke-headercol duration-200 stroke-8" stroke-width="2"/>
          <path id="logo-banner-path-5" d="M71.5 82.5C60.7 98.1 20 109.667 1 113.5V158.5C16.8333 163.667 52.1 180 66.5 204C80.9 228 83.8333 264.333 83.5 279.5H129.5C129.5 279.5 129.5 235 115 197C107.733 177.955 80.3333 151.167 66.5 140.5C73.8333 138.833 92.5 130.3 108.5 109.5C124.5 88.7 135.5 28.5 139 1H94C91 21.6667 82.3 66.9 71.5 82.5Z" class="stroke-headercol duration-200 stroke-8" stroke-width="2"/>
          <path id="logo-banner-path-6" d="M71.5 82.5C60.7 98.1 20 109.667 1 113.5V158.5C16.8333 163.667 52.1 180 66.5 204C80.9 228 83.8333 264.333 83.5 279.5H129.5C129.5 279.5 129.5 235 115 197C107.733 177.955 80.3333 151.167 66.5 140.5C73.8333 138.833 92.5 130.3 108.5 109.5C124.5 88.7 135.5 28.5 139 1H94C91 21.6667 82.3 66.9 71.5 82.5Z" class="stroke-headercol duration-200 stroke-8" stroke-width="2"/>
        </svg>
      </div>
    </div>
    <div class="bg-bannercol h-24 z-20 relative" style="clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 0);"> </div>
    <div class="bg-aboutmebackground h-24 absolute w-full -translate-y-24 z-10" style=""> </div>
    <span id="aboutme"></span>
    <div class="bg-aboutmebackground min-h-24 h-auto pt-4 pb-16 w-full relative xl:pl-[12%] xl:pr-[15%] md:pl-12 pl-4 pr-4">
      <div class="xl:ml-8 ml-0">
        <h3 class="before:content-['<'] after:content-['>'] text-lg text-left text-opacity-40 text-lighteraboutme mb-8">portfolio</h3>
        <div class="flex mr-8 md:gap-20 gap-4 md:flex-row flex-col">
          <div class="w-full">
              <div class="pl-2 sm:pl-4">
                <h1 class="text-white text-4xl font-medium text-left">About Me</h1>
                <h2 class="text-white text-xl mt-8 font-light text-left md:mb-4 mb-4">
                  Hello! I am a 18 year old from the Greater Manchester area, soon going into University to study a BSc in Computing. I have a passion for Software Development and Frontend Development. I enjoy developing my existing skills and learning new ones.
                </h2>
              </div>
          </div>
          <div class="w-full">
              <div class="pl-2 sm:pl-4">
                <h1 class="text-white text-4xl font-medium text-left">Interests</h1>
                <h2 class="text-white text-lg sm:text-xl mt-8 font-light text-left"><span class="mr-4">➔</span>Computer Hardware</h2>
                <h2 class="text-white text-lg sm:text-xl font-light text-left"><span class="mr-4">➔</span>Programming</h2>
                <h2 class="text-white text-lg sm:text-xl font-light text-left"><span class="mr-4">➔</span>Frontend Development</h2>
                <h2 class="text-white text-lg sm:text-xl font-light text-left"><span class="mr-4">➔</span>Software Development</h2>
                <h2 class="text-white text-lg sm:text-xl font-light text-left"><span class="mr-4">➔</span>UI/UX Design</h2>
              </div>
          </div>
        </div>
        <h3 class="before:content-['<'] after:content-['>'] text-lg text-left text-opacity-40 text-lighteraboutme mt-8">/portfolio</h3>

      </div>
    </div>
    <div class="bg-aboutmebackground h-24" style="clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 0);"> </div>
    <div class="min-h-24 h-auto pt-4 pb-16 w-full relative xl:pl-[12%] xl:pr-[15%] md:pl-12 pl-4 pr-10 md:pr-20" id="myskills">
      <div class="xl:ml-8 ml-0">
        <h3 class="before:content-['<'] after:content-['>'] text-lg text-left text-opacity-40 text-lighteraboutme mb-8">portfolio</h3>
        <div class="pl-2 sm:pl-4">
           <h1 class="text-white text-4xl font-medium text-left">My Skills</h1>
           <div class="mt-8 flex flex-col md:flex-row gap-4 md:flex-wrap">
             <div v-for="item in this.skillsJson" class='md:w-[48%] border-[2px] border-skillsoutline hover:border-white duration-200 hover:border-opacity-70 p-4 rounded-xl pl-4 pr-12 flex items-center justify-start gap-4 relative'>
               <img v-if="item.logo" :src="require(`@/assets/images/`+item.logo)" :href="item.skill" class="w-12 h-12">
               <span v-if="!item.logo" class="h-12 w-0"></span>
               <h1 class="font-normal text-skillstext text-2xl">{{item.skill}}</h1>
             </div>
           </div>
        </div>
        <h3 class="before:content-['<'] after:content-['>'] text-lg text-left text-opacity-40 text-lighteraboutme mt-8">/portfolio</h3>
      </div>
    </div>

    <div class="min-h-24 h-auto pt-4 pb-16 w-full relative xl:pl-[12%] xl:pr-[15%] md:pl-12 pl-4 pr-10 md:pr-20"  v-if="this.otherSkillsJSON == null || this.otherSkillsJSON.length != 0">
      <div class="xl:ml-8 ml-0">
        <h3 class="before:content-['<'] after:content-['>'] text-lg text-left text-opacity-40 text-lighteraboutme mb-8">portfolio</h3>
        <div class="pl-2 sm:pl-4">
           <h1 class="text-white text-4xl font-medium text-left">Other Skills</h1>
           <div class="mt-8 gap-4 flex">
             <h1 v-for="item in this.otherSkillsJSON" class="text-white text-xl w-1/4 text-left font-regular"><span class="mr-4">➔</span>{{item}}</h1>
           </div>
        </div>
        <h3 class="before:content-['<'] after:content-['>'] text-lg text-left text-opacity-40 text-lighteraboutme mt-8">/portfolio</h3>
      </div>
    </div>

    <div class="min-h-24 h-auto pt-4 pb-16 w-full relative xl:pl-[12%] xl:pr-[15%] md:pl-12 pl-4 pr-10 md:pr-20" id="myprojects">
      <div class="xl:ml-8 ml-0">
        <h3 class="before:content-['<'] after:content-['>'] text-lg text-left text-opacity-40 text-lighteraboutme mb-8">portfolio</h3>
        <div class="pl-2 sm:pl-4">
          <h1 class="text-white text-4xl font-medium text-left">My Projects</h1>
          <div class="mt-8 gap-4 flex flex-col" v-if="filterCriteria == null">
             <div v-for="item in this.projectsImported">
               <div class="border-[2px] border-skillsoutline p-4 flex justify-between hover:cursor-pointer" @click="item.dropdownOpen = !item.dropdownOpen" :class="{dropdownOpen: item.dropdownOpen},{dropdownItem: !item.dropdownOpen}">
                <h1 class="text-skillstext text-2xl text-left font-regular w-[90%]" v-if="item.currentProject" ><span class="w-auto block sm:inline-block mb-4 sm:mb-0 mr-4 text-sm p-1 bg-yellow-500 bg-opacity-40 text-white rounded-md">Ongoing</span>{{item.title}}</h1>
                <h1 class="text-skillstext text-2xl text-left font-regular" v-if="!item.currentProject">{{item.title}}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" v-if="!item.dropdownOpen" class="h-6 w-6 stroke-white stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-white stroke-2" v-if="item.dropdownOpen" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                </svg>
               </div>
               <div v-if="item.dropdownOpen" class="border-skillsoutline border-[2px] rounded-b-lg border-t-[1px]">
                 <div class="flex p-8 gap-12 md:flex-row flex-col">
                   <div class="w-full">
                     <div class="image rounded-xl mb-6 mt-2 relative group" v-if="item.images.length != 0">
                       <div @click="openIMGWindow(item.images)" class="absolute w-full h-full bg-black rounded-lg bg-opacity-0 group-hover:bg-opacity-80 duration-100 flex items-center justify-center gap-4 hover:cursor-pointer">
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-0 group-hover:opacity-100 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <h1 class="opacity-0 group-hover:opacity-100 text-white">View Images</h1>
                       </div>
                       <img :src="require(`@/assets/images/`+item.images[0])" class="rounded-lg">
                     </div>
                     <div class="flex gap-4">
                        <a class="w-full flex border-[1px] rounded-lg p-2 items-center justify-center hover:cursor-pointer" :href="item.viewlink" v-if="item.viewlink != null">
                          <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 block stroke-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg> -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                          <h1 class="text-white">View Project</h1>
                        </a>
                        <a class="w-full flex border-[1px] border-red-700 rounded-lg p-2 items-center justify-center" v-if="!item.source || item.source == 'p'">
                          <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 block stroke-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg> -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 block stroke-skillstext mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                          <h1 class="text-skillstext">Source Private / No Source</h1>
                        </a>
                        <a class="w-full flex border-[1px] border-white group border-opacity-50 duration-100 hover:border-opacity-100 rounded-lg p-2 items-center justify-center hover:cursor-pointer" v-if="item.source != 'p'" :href="item.source">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 block stroke-white duration-100 opacity-50 group-hover:opacity-100 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 block stroke-skillstext mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg> -->
                          <h1 class="text-white text-opacity-50 group-hover:text-opacity-100 duration-100">View Source</h1>
                        </a>
                     </div>
                      <div v-if="item.todo" class="mt-12">
                        <h1 class="text-white text-2xl text-left font-normal">To Do List</h1>
                        <div class="flex mt-4 ml-4">
                          <div class=""><div class="w-[2px] h-full bg-skillsoutline"></div></div>
                          <div class="w-full">
                            <div v-for="entries in item.todo" class="text-left text-white mt-3 first:mt-0">
                              <div v-if="entries.completed" class="relative flex ml-4 h-auto">
                                  <span class="mr-4 pl-1 pr-1 mt-0 border-[1px] border-green-700 bg-green-700 text-white rounded-sm">Done</span>
                                  <h2 class="">
                                    {{entries.content}}
                                  </h2>
                              </div>
                              <div v-else class="relative flex ml-4">
                                  <span class="mr-4 pl-1 pr-1 mt-0 border-[1px] border-skillsoutline text-skillsoutline rounded-sm">WIP</span>
                                  <h2 class="">
                                    {{entries.content}}
                                  </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                     </div>
                     <div class="mt-12" v-if="item.elementsused.length != 0">
                        <h1 class="text-white text-2xl text-left font-normal">Elements Used</h1>
                        <div class="w-full h-auto flex gap-4 mt-8 flex-wrap">
                          <div v-for="element in item.elementsused" class="flex gap-4 w-full lg:w-[48%] border-skillsoutline border-[1px] rounded-md p-2 items-center justify-center">
                            <img v-if="element.logo != ''" :src="require('@/assets/images/' + element.logo)" :alt="element.name" class="w-8 h-8">
                            <!-- <img v-if="element.logo == ''" src="" alt="" class="w-8 h-8"> -->
                            <h1 class="text-white text-lg font-light">{{element.name}}</h1>
                          </div>
                        </div>
                     </div>
                   </div>
                   <div class="w-full">
                     <div v-if="item.scenario">
                       <h1 class="text-white text-3xl text-left font-normal">Scenario</h1>
                       <h2 class="text-left text-white mt-6 font-light">{{item.scenario}}</h2>
                     </div>
                    <div v-if="item.achievements" class="mt-12">
                       <h1 class="text-white text-3xl text-left font-normal">Achievements</h1>
                       <h2 class="text-left text-white mt-6 font-light">{{item.achievements}}</h2>
                     </div>
                     <div v-if="item.challenges" class="mt-12">
                       <h1 class="text-white text-3xl text-left font-normal">Challenges</h1>
                       <h2 class="text-left text-white mt-6 font-light">{{item.challenges}}</h2>
                     </div>
                     <div v-if="item.noteablefeatures.length != 0" class="mt-12">
                       <h1 class="text-white text-3xl text-left font-normal">Noteable Features</h1>
                       <div v-for="features in item.noteablefeatures" class="flex gap-4 mt-8">
                          <div>
                            <h1 class="text-white">➔</h1>
                          </div>
                          <div>
                            <h1 class="text-left text-white">{{features}}</h1>
                          </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div v-else>
             <h1>Criteria being filtered</h1>
           </div>
        </div>
        <div class="pl-2 sm:pl-4 mt-16" v-if="this.creationsIMPJSON.length != 0">
          <h1 class="text-white text-4xl font-medium text-left">Other Creations</h1>
        </div>
        <h3 class="before:content-['<'] after:content-['>'] text-lg text-left text-opacity-40 text-lighteraboutme mt-8">/portfolio</h3>
      </div>
    </div>
    <div class="min-h-24 h-auto pt-4 pb-16 w-full relative xl:pl-[12%] xl:pr-[15%] md:pl-12 pl-4 pr-10 md:pr-20" id="myblog">
      <div class="xl:ml-8 ml-0">
        <h3 class="before:content-['<'] after:content-['>'] text-lg text-left text-opacity-40 text-lighteraboutme mb-8">portfolio</h3>
        <div class="pl-2 sm:pl-4">
           <h1 class="text-white text-4xl font-medium text-left">My Blog</h1>
           <div class="w-full h-auto mt-12">
             <iframe src="https://vlctyblog.blogspot.com/" class="w-full h-[600px]"></iframe>
              <a href="https://vlctyblog.blogspot.com/" class="left-4 text-white font-normal p-2 pl-4 pr-4 rounded-lg hover:bg-blue-800 duration-100 bg-blue-600 block w-fit mt-8">Open Blog Page</a>
           </div>
        </div>
        <h3 class="before:content-['<'] after:content-['>'] text-lg text-left text-opacity-40 text-lighteraboutme mt-8">/portfolio</h3>
      </div>
    </div>
    <div class="min-h-24 h-auto pt-4 pb-8 w-full relative xl:pl-[12%] xl:pr-[15%] md:pl-12 pl-4 pr-10 md:pr-20" id="mycontact">
      <div class="xl:ml-8 ml-0">
        <h3 class="before:content-['<'] after:content-['>'] text-lg text-left text-opacity-40 text-lighteraboutme mb-8">portfolio</h3>
          <div class="pl-2 sm:pl-4">
            <h1 class="text-white text-4xl font-medium text-left">Get in Touch</h1>
            <div class="flex gap-4">

            </div>
            <div class="pb-8 flex mt-8 gap-4">
              <a href="https://github.com/devVelocity" class="group w-[48%] border-skillsoutline rounded-md border-[1px] hover:border-white duration-100 hover:cursor-pointer flex items-center justify-center gap-4 p-3">
                <img class="opacity-30 group-hover:opacity-100 duration-100" src="@/assets/images/GitHub-Mark-Light-32px.png">
                <h2 class="text-white text-opacity-30 text-xl group-hover:text-opacity-100 duration-100">GitHub</h2>
              </a>
              <a class="group w-[48%] border-skillsoutline rounded-md border-[1px] hover:border-white duration-100 hover:cursor-pointer flex items-center justify-center gap-4 p-3">
                <!-- <img class="opacity-30 group-hover:opacity-100 duration-100" src="@/assets/images/GitHub-Mark-Light-32px.png"> -->
                <h2 class="text-white text-opacity-30 text-xl group-hover:text-opacity-100 duration-100">LinkedIn</h2>
              </a>
            </div>
          </div>
        <h3 class="before:content-['<'] after:content-['>'] text-lg text-left text-opacity-40 text-lighteraboutme mb-8">/portfolio</h3>
      </div>
    </div>
  
  
  </div>
</template>

<script>
import KUTE from 'kute.js'
import skills from '@/assets/data/skills.json'
import otherskills from '@/assets/data/otherskills.json'
import projectsJSON from '@/assets/data/projects.json'
import creationsJSON from '@/assets/data/othercreations.json'

import imgwindow from '@/components/imgwindow.vue'

export default{
  components:{
    imgwindow
  },
  data(){
    return{
      skillsJson: null,
      otherSkillsJSON: null,
      creationsIMPJSON: [],
      projectsImported: null,
      filterCriteria: null,
      imgdisplayopen: false,
      imgsrc: null,
      imgalt: null,
    }
  },
  mounted(){
    var tween1 = KUTE.fromTo('#logo-banner-path-1',{draw:'100% 100%'},{draw: '0% 100%'},{duration:500}).start()
    var tween2 = KUTE.fromTo('#logo-banner-path-2',{draw:'100% 100%'},{draw: '0% 100%'},{duration:500}).start()
    var tween3 = KUTE.fromTo('#logo-banner-path-3',{draw:'100% 100%'},{draw: '0% 100%'},{duration:500}).start()
    var tween4 = KUTE.fromTo('#logo-banner-path-4',{draw:'100% 100%'},{draw: '0% 100%'},{duration:500}).start()
    var tween5 = KUTE.fromTo('#logo-banner-path-5',{draw:'100% 100%'},{draw: '0% 100%'},{duration:500}).start()
    var tween6 = KUTE.fromTo('#logo-banner-path-6',{draw:'100% 100%'},{draw: '0% 100%'},{duration:500}).start()

    var tween7 = KUTE.fromTo('#banner-logo-svg',{attr:{fill: 'transparent'}},{attr:{fill: '#237DCF'}},{delay: 1000}).start()


    this.skillsJson = skills
    this.otherSkillsJSON = otherskills
    this.projectsImported = projectsJSON
    this.creationsIMPJSON = creationsJSON

  },
  methods:{
    openIMGWindow(images){
      this.imgdisplayopen = true
      this.imgsrc = images
    }
  }
}

</script>

<style>
.dropdownOpen{
  border-bottom: 0px;
  border-radius: 0.75rem;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.dropdownItem{
  border-radius: 0.75rem;
}
</style>

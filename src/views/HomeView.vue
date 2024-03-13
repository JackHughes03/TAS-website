<template>
  <div class="home overflow-x-clip bg-[#3B4231] h-full absolute w-full">    
    <header class=" w-full h-1/2 2xl:h-[60%]">
      <nav class="duration-300 mx-auto bg-[#000000c9] fixed w-full z-50 font-[roboto] backdrop-blur-md uppercase text-white p-2 sm:text-xs text-[10px] flex justify-center h-12 items-center normalnav">
        <a href="" class="absolute left-0 bg-green-600/25 duration-200 hover:bg-green-600/50 h-full px-10 flex items-center justify-center text-lg font-bold">TAS</a>
        
        <div class="sm:flex h-full w-auto ml-32 hidden md:gap-0">
          <a href="" class="border-b-2 border-white h-full duration-200 flex items-center justify-center px-2 lg:px-6">Home</a>
          <a href="" class="border-b-2 border-[#00000000] hover:border-white h-full duration-200 flex items-center justify-center px-2 lg:px-6">Teams</a>
          <a href="" class="border-b-2 border-[#00000000] hover:border-white h-full duration-200 flex items-center justify-center px-2 lg:px-6">Sponsors</a>
          <a href="" class="border-b-2 border-[#00000000] hover:border-white h-full duration-200 flex items-center justify-center px-2 lg:px-6">Committee</a>
          <a href="" class="border-b-2 border-[#00000000] hover:border-white h-full duration-200 flex items-center justify-center px-2 lg:px-6">Policies</a>
          <a href="" class="border-b-2 border-[#00000000] hover:border-white h-full duration-200 flex items-center justify-center px-2 lg:px-6">Contact</a>
        </div>
        
        <input id="toggle" type="checkbox" class="hidden">
        
        <label @click="expandnav" for="toggle" class="hamburger absolute top-1.5 right-4 cursor-pointer sm:hidden">
          <div class="top-bun"></div>
          <div class="meat"></div>
          <div class="bottom-bun"></div>
        </label>
        
        <div class="hiddennav hidden">
          <a href="" class="hover:bg-[#11111190] border-b-2 border-[#00000000] hover:border-white h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Home</a>
          <a href="" class="hover:bg-[#11111190] border-b-2 border-[#00000000] hover:border-white h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Teams</a>
          <a href="" class="hover:bg-[#11111190] border-b-2 border-[#00000000] hover:border-white h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Sponsors</a>
          <a href="" class="hover:bg-[#11111190] border-b-2 border-[#00000000] hover:border-white h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Committee</a>
          <a href="" class="hover:bg-[#11111190] border-b-2 border-[#00000000] hover:border-white h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Policies</a>
          <a href="" class="hover:bg-[#11111190] border-b-2 border-[#00000000] hover:border-white h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Contact</a>
        </div>
      </nav>
      
      <div class="diagonal-container">
        <div class="diagonal-element"></div>
      </div>
      
      <h1 class="text-white md:text-5xl sm:text-4xl text-xl leading-tight absolute top-16 sm:top-24 font-bold left-4 sm:left-12 font-[roboto] uppercase">TAS<br> Football<br> Clu<router-link to="/service" class="cursor-auto">B</router-link></h1>
      
      <div class="nextmatch duration-1000 text-center translate-x-60 absolute sm:text-2xl top-14 sm:top-20 right-2 sm:right-10 p-4 sm:p-6 rounded z-0 bg-black/60 backdrop-blur-md text-white">
        <h2 class="uppercase font-bold sm:text-2xl text-sm">Next match</h2>
        
        <div class="flex flex-col items-center justify-center">
          <h2 class="bg-white text-black font-semibold uppercase text-xs sm:text-lg py-1 px-2 mt-2 sm:mt-5 -skew-x-6">{{ match1value }} </h2>
          <p class="font-bold text-xs sm:text-base my-1">VS</p>
          <h2 class="bg-white text-black font-semibold uppercase text-xs sm:text-lg py-1 px-2 -skew-x-6">{{ match2value }}</h2>
          
          <p class="text-white font-semibold text-xs sm:text-base uppercase mt-3 sm:mt-8">{{ datevalue }}</p>
          <p class="text-white font-semibold text-xs sm:text-base uppercase">{{ locationvalue }}</p>
        </div>
      </div>
    </header>
    
    <main class="-mt-12">
      <section class="bg-black pb-10 eventssection">
        <h2 class="bg-[#111111] w-full py-4 text-white newstitle text-2xl font-semibold uppercase pl-4 backdrop-blur-md">Latest News</h2>
        
        <section class="flex items-center justify-center flex-wrap mt-8 size-full text-white gap-3 px-8 newsboxcontainer">
        </section>
      </section>
      
      <!-- <section id="next-match">
        <h2 class="bg-black/30 w-full py-4 text-white cursor-default text-2xl font-semibold uppercase pl-4 backdrop-blur-md">Next match</h2>
        
        <section>
          <div class="flex flex-col md:flex-row items-center text-black justify-center">
            <div class="bg-white/40 md:mt-10 mt-2 backdrop-blur-sm mb-0 p-4 px-10 team-match">
              <h2 class="text-2xl font-bold" id="match1value">{{ match1value }}</h2>
            </div>
            
            <p class="z-40 shadow-md p-1 px-2 font-bold text-6xl rounded-lg flex md:mt-10 mt-2 items-center justify-center w-40 bg-white/60 backdrop-blur-md vs-icon">VS</p>
            
            <div class="bg-white/50 md:mt-10 mt-2 backdrop-blur-sm mb-0 p-4 px-10 team-match">
              <h2 class="text-2xl font-bold" id="match2value">{{ match2value }}</h2>
            </div>
          </div>
          
          <div class="text-black font-bold flex w-full justify-center mt-4">
            <p class="text-sm mt-2 bg-white/60 p-2 backdrop-blur-md" id="datevalue">{{ datevalue }}</p>
          </div>
          <div class="text-black font-bold flex w-full justify-center pb-10">
            <p class="text-sm mt-2 bg-white/60 p-2 backdrop-blur-md" id="locationvalue">{{ locationvalue }}</p>
          </div>
        </section>
      </section> -->
      
      <section>
        <h2 class="bg-[#344120] w-full py-4 text-white text-2xl font-semibold uppercase pl-4 backdrop-blur-md">Teams</h2>
        <div class="grid grid-cols-2 grid-rows-4 text-white teams">
          <div class="p-14">
            <h2 class="font-bold text-2xl">Team 1</h2>
            <p>Welcome to our team numbeer this.</p>
          </div>
          <div class="p-14">
            <h2 class="font-bold text-2xl">Team 2</h2>
            <p>Welcome to our team numbeer this.</p>
          </div>
          <div class="p-14">
            <h2 class="font-bold text-2xl">Team 3</h2>
            <p>Welcome to our team numbeer this.</p>
          </div>
          <div class="p-14">
            <h2 class="font-bold text-2xl">Team 4</h2>
            <p>Welcome to our team numbeer this.</p>
          </div>
          <div class="p-14">
            <h2 class="font-bold text-2xl">Team 5</h2>
            <p>Welcome to our team numbeer this.</p>
          </div>
          <div class="p-14">
            <h2 class="font-bold text-2xl">Team 6</h2>
            <p>Welcome to our team numbeer this.</p>
          </div>
          <div class="p-14">
            <h2 class="font-bold text-2xl">Team 7</h2>
            <p>Welcome to our team numbeer this.</p>
          </div>
          <div class="p-14">
            <h2 class="font-bold text-2xl">Team 8</h2>
            <p>Welcome to our team numbeer this.</p>
          </div>
        </div>
      </section>
      
      <section class="bg-black">
        <h2 class="bg-[#111111] w-full py-4 text-white text-2xl font-semibold uppercase pl-4 backdrop-blur-md">Sponsors</h2>
        
        <div class="sm:py-10 py-4 flex flex-wrap items-center justify-center gap-4 sm:p-8 p-2">
          <div class="w-[200px] flex flex-col bg-white p-4 rounded-md text-center items-center justify-center">
            <img class="w-20" src="https://mosmandentistry.com.au/wp-content/uploads/2016/10/orionthemes-placeholder-image-2.png" alt="">
            <h2 class="font-semibold mt-2 uppercase">John Doe</h2>
            <p class="text-sm">John is one of our biggest sponsors and has a child on team 1.</p>
          </div>
          <div class="w-[200px] flex flex-col bg-white p-4 rounded-md text-center items-center justify-center">
            <img class="w-20" src="https://mosmandentistry.com.au/wp-content/uploads/2016/10/orionthemes-placeholder-image-2.png" alt="">
            <h2 class="font-semibold mt-2 uppercase">John Doe</h2>
            <p class="text-sm">John is one of our biggest sponsors and has a child on team 1.</p>
          </div>
          <div class="w-[200px] flex flex-col bg-white p-4 rounded-md text-center items-center justify-center">
            <img class="w-20" src="https://mosmandentistry.com.au/wp-content/uploads/2016/10/orionthemes-placeholder-image-2.png" alt="">
            <h2 class="font-semibold mt-2 uppercase">John Doe</h2>
            <p class="text-sm">John is one of our biggest sponsors and has a child on team 1.</p>
          </div>
          <div class="w-[200px] flex flex-col bg-white p-4 rounded-md text-center items-center justify-center">
            <img class="w-20" src="https://mosmandentistry.com.au/wp-content/uploads/2016/10/orionthemes-placeholder-image-2.png" alt="">
            <h2 class="font-semibold mt-2 uppercase">John Doe</h2>
            <p class="text-sm">John is one of our biggest sponsors and has a child on team 1.</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
  import { ref, onMounted  } from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue';
  import { supabase } from '../clients/supabase';
  import axios from 'axios';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import SwiperCore, { Pagination, Navigation } from 'swiper/core';
  
  SwiperCore.use([Pagination, Navigation]);
  
  const match1value = ref(""),
  match2value = ref(""),
  datevalue = ref(""),
  locationvalue = ref(""),
  news_headline = ref(""),
  news_description = ref("");
  
  async function get_news_db() {
    const newsboxcontainer = document.querySelector('.newsboxcontainer');
    
    let { data: news_table, error } = await supabase
    .from('news_table')
    .select('*');
    
    if (error) {
      console.error('Error fetching data:', error);
      return;
    }
    
    for (let i = 0; i < news_table.length; i++) {
      let news = news_table[i];
      
      const newnews = document.createElement('div');
      newnews.classList.add('news_boxes');
      newnews.innerHTML = `
      <img class="topimage w-full h-full top-0 left-0">
      <h2 class="tracking-tight leading-tight font-bold text-xl px-2 mt-2 uppercase newsheading">${news.news_heading}</h2>
      <p class="tracking-tighter leading-tight px-2 pb-2 mt-2 h-48 max-h-48 overflow-y-scroll">${news.news_para}</p>
      `;
      
      if (!news.news_heading || news.news_heading.trim() === "null") {
        newnews.remove();
      } else {
        newsboxcontainer.appendChild(newnews);
      }
    }
  }
  
  async function get_DB_Values() {
    get_news_db()
    
    const { data, error } = await supabase
    .from('tas_database')
    .select('*')
    .eq('id', 22);
    
    if (error) {
      console.error('Error fetching data:', error);
      return;
    }
    
    const rowData = data[0];
    
    if (!rowData) {
      console.error('No data found for id 22');
      return;
    }
    
    // console.log('Fetched data:', rowData);
    
    match1value.value = rowData.match_1 || '';
    match2value.value = rowData.match_2 || '';
    news_headline.value = rowData.news || '';
    locationvalue.value = rowData.location || '';
    datevalue.value = rowData.date || '';
  }
  
  function expandnav() {
    const nav = document.querySelector(".normalnav"),
    hiddennav = document.querySelector(".hiddennav")
    
    if (nav.style.height == "50%") {
      nav.style.height = "48px"
      hiddennav.style.display = "none"
    } else {
      nav.style.height = "50%"
      hiddennav.style.display = "block"
    }
  }
  
  function load_anim() {
    const nextmatch = document.querySelector('.nextmatch');
    
    setTimeout(() => {
      nextmatch.style.transform = "translateX(0)";
    }, 200);
  }
  
  onMounted(() => {
    get_DB_Values();
    load_anim();
  })
  
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  
  .vs-icon {
    transform: skew(-10deg);
    border: 10px solid;
    animation: border 3s infinite linear alternate;
  }
  
  .diagonal-container {
    position: relative;
    width: 60%;
    max-width: 500px;
    height: 100%;
    overflow: hidden;
  }
  
  
  .diagonal-element {
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    width: 100%;
    background: #000000BC;
    transform: skewX(-40deg);
    transform-origin: top right;
    border-radius: 0 20% 70% 0px;
    border: 4px solid white;
    backdrop-filter: blur(5px);
  }
  
  :global(.swiper-pagination-bullet) {
    background: white;
  }
  .swiper-button-prev, .swiper-button-next {
    @apply text-white;
  }
  .swiper-button-prev::after, .swiper-button-next::after {
    @apply text-3xl;
  }
  
  header {
    /* background-image: url("https://cdn.pixabay.com/photo/2016/11/29/07/06/bleachers-1867992_1280.jpg"); */
    background-image: url('https://cdn.pixabay.com/photo/2014/10/14/20/24/soccer-488700_1280.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* background-blend-mode: multiply;
    background-color: #00000050; */
  }
  
  .hamburger div {
    position: relative;
    width: 2em;
    height: 2.2px;
    border-radius: 3px;
    background-color: white;
    margin-top: 5px;
    transition: all 0.3s ease-in-out;
  }
  #toggle:checked + .hamburger .top-bun {
    transform: rotate(-45deg);
    margin-top: 14px;
  }
  #toggle:checked + .hamburger .bottom-bun {
    opacity: 0;
    transform: rotate(45deg);
  }
  #toggle:checked + .hamburger .meat {
    transform: rotate(45deg);
    margin-top: -2.5px;
  }
  #toggle:checked + .hamburger + .nav {
    top: 0;
    transform: scale(1);
  }
  
  .teams div {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: multiply;
    background-color: #00000090;
    cursor: pointer;
    transition: all 100ms ease-in-out;
    
    &:hover {
      background-color: #00000050;
    }
  }
  .teams div:nth-child(1) {
    background-image: url("https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_1280.jpg");
  }
  .teams div:nth-child(2) {
    background-image: url("https://cdn.pixabay.com/photo/2022/08/17/15/46/soccer-7392844_1280.jpg");
  }
  .teams div:nth-child(3) {
    background-image: url("https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg");
  }
  .teams div:nth-child(4) {
    background-image: url("https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg");
  }
  .teams div:nth-child(5) {
    background-image: url("https://images.unsplash.com/photo-1624280157150-4d1ed8632989?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg");
  }
  .teams div:nth-child(6) {
    background-image: url("https://images.unsplash.com/photo-1624003081265-70b1b1ca4f79?q=80&w=1323&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg");
  }
  .teams div:nth-child(7) {
    background-image: url("https://images.unsplash.com/photo-1624280157322-89596d98aad5?q=80&w=1230&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg");
  }
  .teams div:nth-child(8) {
    background-image: url("https://images.unsplash.com/photo-1604651684573-05470013b3b9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg");
  }
  
  #next-match {
    background-image: url("../assets/pitch.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* background-blend-mode: multiply;
    background-color: #00000050; */
  }
  
  .team-match {
    transform: skew(-10deg);
  }
  
  .leftbutton, .rightbutton {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .leftbutton {
    background-image: url("../assets/left.png");
  }
  .rightbutton {
    background-image: url("../assets/right.png");
  }
  
  #adminbutton {
    background-color: black;
  }
  
  @keyframes border {
    0% {
      border-color: #ffffff;
    }
    100% {
      border-color: #007914;
    }
  }
  
  .news_boxes {
    @apply md:w-[250px] h-[300px] flex justify-end flex-col w-full bg-white text-black;
    /* background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_1280.jpg');
    background-blend-mode: multiply;
    background-color: #00000080; */
  }
  
  .topimage {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: multiply;
    background-color: #00000080;
  }
  
  .topimage:nth-child(1) {
    background-image: url("https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_1280.jpg");
  }
  .topimage:nth-child(2) {
    background-image: url("https://cdn.pixabay.com/photo/2022/08/17/15/46/soccer-7392844_1280.jpg");
  }
  .topimage:nth-child(3) {
    background-image: url("https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg");
  }
  .topimage:nth-child(4) {
    background-image: url("https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg");
  }
  .topimage:nth-child(5) {
    background-image: url("https://images.unsplash.com/photo-1624280157150-4d1ed8632989?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg");
  }
  .topimage:nth-child(6) {
    background-image: url("https://images.unsplash.com/photo-1624003081265-70b1b1ca4f79?q=80&w=1323&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg");
  }
  .topimage:nth-child(7) {
    background-image: url("https://images.unsplash.com/photo-1624280157322-89596d98aad5?q=80&w=1230&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg");
  }
  .topimage:nth-child(8) {
    background-image: url("https://images.unsplash.com/photo-1604651684573-05470013b3b9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg");
  }
</style>

<!-- Qrap9ufrDRxXirQi -->

<!-- tasfc50@gmail.com -->
<!-- TASFCClubAdmin991-@ -->
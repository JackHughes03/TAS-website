<template>
  <div id="home" class="overflow-x-clip h-full absolute w-full">
    <!-- <div class="hidden h-[300px] w-[2px] top-1/2 -translate-y-1/2 fixed sm:grid place-items-center left-4 bg-[#444444]" id="action-bar">
      <label class="absolute -top-[2px] left-4 text-[#999999] text-xs duration-200" id="dot1label">Home</label>
      <span class="bg-blue-400 size-3 rounded-full duration-200 absolute top-0" id="dot1"></span>
      
      <label class="absolute top-[93.5px] left-4 text-[#999999] text-xs duration-200 opacity-0" id="dot2label">Teams</label>
      <span class="bg-[#444444] size-3 rounded-full duration-200 absolute top-24" id="dot2"></span>
      
      <span class="bg-[#444444] size-3 rounded-full duration-200 absolute bottom-24" id="dot3"></span>
      
      <label class="absolute top-[93.5px] left-4 text-[#999999] text-xs duration-200 opacity-0" id="dot4label">Sponsors</label>
      <span class="bg-[#444444] size-3 rounded-full duration-200 absolute bottom-0" id="dot4"></span>
    </div> -->
    
    <header class="w-full h-[40%] sm:h-3/5">
      <!-- <div class="bg-red-700 px-4 py-2 text-white text-sm">Website is still in production. What you see is not the final version. Some design will change and content is due to be added.</div> -->
      
      <section class="h-full topheader flex justify-center">
        <nav class="duration-300 text-white fixed w-full bg-[#00000030] px-4 z-50 font-[roboto] backdrop-blur-md p-2 sm:text-xs text-[10px] flex justify-center h-12 max-h-96 items-center normalnav">
          <a href="" class="gap-2 duration-200 mr-auto ml-3 italic text-white h-full flex items-center justify-center text-base font-bold tasheader">
            <img class="w-4" src="../assets/football.png" alt="">
            TAS
          </a>
          
          <div class="sm:flex h-full ml-auto uppercase text-[12px] hidden md:gap-0">
            <a href="" class="h-full duration-200 flex items-center justify-center px-2 lg:px-4">Home</a>
            <a href="" class="h-full duration-200 flex items-center justify-center px-2 lg:px-4">Teams</a>
            <a href="" class="h-full duration-200 flex items-center justify-center px-2 lg:px-4">Sponsors</a>
            <a href="" class="h-full duration-200 flex items-center justify-center px-2 lg:px-4">Committee</a>
            <a href="" class="h-full duration-200 flex items-center justify-center px-2 lg:px-4">Policies</a>
          </div>
          
          <a href="" class="sm:flex hidden uppercase duration-200 bg-blue-700 ml-4 hover:bg-blue-600 text-white py-1.5 rounded-[2px] mr-4 -skew-x-12 px-4 lg:px-6">Contact</a>
          
          <input id="toggle" type="checkbox" class="hidden">
          
          <label @click="expandnav" for="toggle" class="hamburger duration-300 absolute top-1.5 right-4 cursor-pointer sm:hidden">
            <div class="top-bun"></div>
            <div class="meat"></div>
            <div class="bottom-bun"></div>
          </label>
          
          <div class="hiddennav duration-500 -translate-y-10 hidden">
            <a href="" class="hover:bg-[#11111190] h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Home</a>
            <a href="" class="hover:bg-[#11111190] h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Teams</a>
            <a href="" class="hover:bg-[#11111190] h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Sponsors</a>
            <a href="" class="hover:bg-[#11111190] h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Committee</a>
            <a href="" class="hover:bg-[#11111190] h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Policies</a>
            <a href="" class="hover:bg-[#11111190] h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Contact</a>
          </div>
        </nav>
        
        <section class="inline-flex flex-col items-start sm:pl-20 pl-8 w-full pt-[70px] sm:pt-32 backdrop-blur-sm">
          <h1 class="text-white md:text-6xl text-2xl leading-tight font-bold uppercase font-[Roboto] italic">Torquay <br>academy Sport F<router-link to="/service" class="cursor-auto">C</router-link></h1>
          <p class="opacity-90 sm:w-1/2 w-2/3 mt-2 text-xs sm:text-base lg:text-xl text-white italic">Welcome to the official Torquay Academy Football site. See a tour around our football team!</p>
          
          <hr class="w-1/2 mt-4 border-2 rounded-full">
          
          <!-- <div class="flex flex-col text-white mt-8">
            <h2 class="scale-y-125 font-bold uppercase text-xl">next match</h2>
            
            <div class="flex gap-2 font-semibold mt-4 text-lg">
              <h4>{{ match1value }}</h4>
              <span>VS</span>
              <h4>{{ match2value }}</h4>
            </div>
            
            <div>
              <p class="mt-1">{{ datevalue }} - {{ locationvalue }}</p>
            </div>
          </div> -->
        </section>
      </section>
    </header>
    
    <main class="bg-[#002039]">
      <section class="flex flex-col items-center justify-center border-t-4 gap-2 pt-6">
        <h2 id="latestnewstitle" class="newstitle text-white newstitle pb-4 pt-4 sm:pt-10 text-center text-2xl font-bold scale-y-125 tracking-tight italic uppercase">Latest News</h2>
        <button class="ml-auto -mt-12 mr-10 text-white" id="viewallbutton" @click="showallnews">View all</button>
        
        <section class="py-6 flex flex-wrap max-w-[1000px] mx-auto items-center justify-center w-full text-white gap-3 newsboxcontainer">
        </section>
      </section>
      
      <!-- <section>
        <h2 class="text-white newstitle py-10 text-center text-2xl font-bold scale-y-125 tracking-tight italic uppercase">teams</h2>
        
        <div class="bg-black p-10">
          <Swiper
          class="SponsorsSwiper bg-black w-full md:w-2/3"
          :slidesPerView="1"
          :initialSlide="0"
          :spaceBetween="0"
          :centeredSlides="true"
          :speed="200"
          :pagination="{ clickable: true }" 
          navigation
          >
          <SwiperSlide class="swiperslide !shadow-none">
            <img src="../assets/teams/1.jpg" alt="">
            
            <h2 class="font-semibold mt-2 uppercase">U9 Predators</h2>
            <h2 class="font-semibold mt-2 uppercase">Manager: Barry Munro</h2>
            <h2 class="font-semibold mt-2 uppercase">Assistant coach: Wayne leaver and James Munro</h2>
          </SwiperSlide>
          <SwiperSlide class="swiperslide !shadow-none">
            <img src="../assets/teams/2.jpg" alt="">
            
            <h2 class="font-semibold mt-2 uppercase">U9 Predators</h2>
            <h2 class="font-semibold mt-2 uppercase">Manager: Barry Munro</h2>
            <h2 class="font-semibold mt-2 uppercase">Assistant coach: Wayne leaver and James Munro</h2>
          </SwiperSlide>
          <SwiperSlide class="swiperslide !shadow-none">
            <img src="../assets/teams/3.jpg" alt="">
            
            <h2 class="font-semibold mt-2 uppercase">U9 Predators</h2>
            <h2 class="font-semibold mt-2 uppercase">Manager: Barry Munro</h2>
            <h2 class="font-semibold mt-2 uppercase">Assistant coach: Wayne leaver and James Munro</h2>
          </SwiperSlide>
          <SwiperSlide class="swiperslide !shadow-none">
            <img src="../assets/teams/4.jpg" alt="">
            
            <h2 class="font-semibold mt-2 uppercase">U9 Predators</h2>
            <h2 class="font-semibold mt-2 uppercase">Manager: Barry Munro</h2>
            <h2 class="font-semibold mt-2 uppercase">Assistant coach: Wayne leaver and James Munro</h2>
          </SwiperSlide>
          <SwiperSlide class="swiperslide !shadow-none">
            <img src="../assets/teams/5.jpg" alt="">
            
            <h2 class="font-semibold mt-2 uppercase">U9 Predators</h2>
            <h2 class="font-semibold mt-2 uppercase">Manager: Barry Munro</h2>
            <h2 class="font-semibold mt-2 uppercase">Assistant coach: Wayne leaver and James Munro</h2>
          </SwiperSlide>
          <SwiperSlide class="swiperslide !shadow-none">
            <img src="../assets/teams/6.jpg" alt="">
            
            <h2 class="font-semibold mt-2 uppercase">U9 Predators</h2>
            <h2 class="font-semibold mt-2 uppercase">Manager: Barry Munro</h2>
            <h2 class="font-semibold mt-2 uppercase">Assistant coach: Wayne leaver and James Munro</h2>
          </SwiperSlide>
          <SwiperSlide class="swiperslide !shadow-none">
            <img src="../assets/teams/7.jpg" alt="">
            
            <h2 class="font-semibold mt-2 uppercase">U9 Predators</h2>
            <h2 class="font-semibold mt-2 uppercase">Manager: Barry Munro</h2>
            <h2 class="font-semibold mt-2 uppercase">Assistant coach: Wayne leaver and James Munro</h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </section> -->
    
    <section class="flex flex-col items-center mt-20 justify-center pt-14 bg-white/20 sponsorsback">
      <h2 class="text-white newstitle text-center text-2xl font-bold scale-y-125 tracking-tight italic uppercase">Sponsors</h2>
      
      <Swiper
      class="SponsorsSwiper py-14 pb-20 sm:w-[600px] w-[110%] -ml-6 sm:ml-auto lg:scale-125 lg:mt-10"
      :slidesPerView="3"
      :initialSlide="2"
      :spaceBetween="-20"
      :centeredSlides="true"
      :speed="200"
      >
      <SwiperSlide class="swiperslide">
        <div id="swiperslide1" alt=""></div>
        
        <h2 class="font-semibold mt-2 uppercase">John Doe</h2>
        <p class="text-xs sm:text-sm -mb-2">John is one of our biggest sponsors and has a child on team 1. Placeholder text goes here so this needs changing.</p>
      </SwiperSlide>
      <SwiperSlide class="swiperslide">
        <div id="swiperslide2" alt=""></div>
        
        <h2 class="font-semibold mt-2 uppercase">John Doe</h2>
        <p class="text-xs sm:text-sm -mb-2">John is one of our biggest sponsors and has a child on team 1. Placeholder text goes here so this needs changing.</p>
      </SwiperSlide>
      <SwiperSlide class="swiperslide">
        <div id="swiperslide3" alt=""></div>
        
        <h2 class="font-semibold mt-2 uppercase">Sam Newman</h2>
        <p class="text-xs sm:text-sm -mb-2">Sam is one of our biggest sponsors and has a child on team 1. Placeholder text goes here so this needs changing.</p>
      </SwiperSlide>
      <SwiperSlide class="swiperslide">
        <div id="swiperslide4" alt=""></div>
        
        <h2 class="font-semibold mt-2 uppercase">John Doe</h2>
        <p class="text-xs sm:text-sm -mb-2">John is one of our biggest sponsors and has a child on team 1. Placeholder text goes here so this needs changing.</p>
      </SwiperSlide>
      <SwiperSlide class="swiperslide">
        <div id="swiperslide5" alt=""></div>
        
        <h2 class="font-semibold mt-2 uppercase">John Doe</h2>
        <p class="text-xs sm:text-sm -mb-2">John is one of our biggest sponsors and has a child on team 1. Placeholder text goes here so this needs changing.</p>
      </SwiperSlide>
    </Swiper>
  </section>
  
  <section class="flex flex-col pb-4 sm:pb-16 items-center justify-center md:mt-10 mt-6">
    <h2 class="text-white newstitle text-center text-2xl font-bold scale-y-125 tracking-tight italic uppercase">committee</h2>
    
    <section class="flex sm:p-10  scale-75 sm:w-screen sm:scale-100 committemembers relative overflow-hidden">
      <div class="scroll-container flex gap-6">
        <div class="commmembers rounded-3xl font-bold text-white flex duration-200 flex-col justify-end w-60 h-80 bg-black">
          <span class="backdrop-blur-2xl rounded-b-3xl px-6 py-3">
            <h2 class="uppercase">John Doe</h2>
            <p class="font-light">Title of person</p>
          </span>
        </div>
        <div class="commmembers rounded-3xl font-bold text-white flex duration-200 flex-col justify-end w-60 h-80 bg-black">
          <span class="backdrop-blur-2xl rounded-b-3xl px-6 py-3">
            <h2 class="uppercase">John Doe</h2>
            <p class="font-light">Title of person</p>
          </span>
        </div>
        <div class="commmembers rounded-3xl font-bold text-white flex duration-200 flex-col justify-end w-60 h-80 bg-black">
          <span class="backdrop-blur-2xl rounded-b-3xl px-6 py-3">
            <h2 class="uppercase">John Doe</h2>
            <p class="font-light">Title of person</p>
          </span>
        </div>
        <div class="commmembers rounded-3xl font-bold text-white flex duration-200 flex-col justify-end w-60 h-80 bg-black">
          <span class="backdrop-blur-2xl rounded-b-3xl px-6 py-3">
            <h2 class="uppercase">John #</h2>
            <p class="font-light">Title of person</p>
          </span>
        </div>
        <div class="commmembers rounded-3xl font-bold text-white flex duration-200 flex-col justify-end w-60 h-80 bg-black">
          <span class="backdrop-blur-2xl rounded-b-3xl px-6 py-3">
            <h2 class="uppercase">John Doe</h2>
            <p class="font-light">Title of person</p>
          </span>
        </div>
        <div class="commmembers rounded-3xl font-bold text-white flex duration-200 flex-col justify-end w-60 h-80 bg-black">
          <span class="backdrop-blur-2xl rounded-b-3xl px-6 py-3">
            <h2 class="uppercase">John Doe</h2>
            <p class="font-light">Title of person</p>
          </span>
        </div>
        <div class="commmembers rounded-3xl font-bold text-white flex duration-200 flex-col justify-end w-60 h-80 bg-black">
          <span class="backdrop-blur-2xl rounded-b-3xl px-6 py-3">
            <h2 class="uppercase">John Doe</h2>
            <p class="font-light">Title of person</p>
          </span>
        </div>
      </div>
    </section>
  </section>
  
  <section class="pb-4 sm:pb-16">
    <section class="w-11/12 max-w-[1000px] mx-auto flex flex-col gap-2 text-white justify-center">
      <h2 class="text-white pt-8 text-5xl ml-4 font-semibold italic">Policies</h2>
      <p class="ml-4 text-orange-300 mt-2">Last updated: 18/06/24</p>
      
      <hr class="mt-4">
      <div class="w-full p-2 rounded flex items-center policyboxes text-white flex-col">
        <div class="w-full px-4 flex items-center">
          <h2 class="text-xl font-semibold tracking-tight italic uppercase">Spectators and Parents/Carers</h2>
          
          <button @click="ExpandPolicy" class="plusminus ml-auto"></button>
        </div>
        
        <div class="text-sm lg:text-lg mt-6 gap-10 hidden md:flex-row flex-col px-10 items-center justify-center policytext">
          <ul class="list-disc">
            <li>Have fun; it's what we're all here for!</li>
            <li>Celebrate effort and good play from both sides</li>
            <li>Always respect the Referee and coaches and encourage players to do the same</li>
            <li>Stay behind the touchline and within the Designated Spectators' Area (where provided)</li>
            <li>When players make mistakes, offer them encouragement to try again next time</li>
            <li>Never engage in, or tolerate offensive, insulting or abusive language or behaviour</li>
          </ul>
          
          <div>
            <p class="font-semibold -ml-4 mb-4">I understand that if I do not follow the Code, I may be:</p>
            <ul class="list-disc">
              <li>Issued with a verbal warning or asked to leave</li>
              <li>Required to meet with the club committee, league or CFA Welfare Officer</li>
              <li>Requested not to attend future games, be suspended or have my membership removed</li>
              <li>Required to leave the club along with any dependants and/or issued a fine</li>
            </ul>
          </div>
        </div>
      </div>
      
      <hr>
      <div class="w-full p-2 rounded flex items-center policyboxes text-white flex-col">
        <div class="w-full px-4 flex items-center">
          <h2 class="text-xl font-semibold tracking-tight italic uppercase">Young Players</h2>
          
          <button @click="ExpandPolicy" class="plusminus ml-auto"></button>
        </div>
        
        <div class="text-sm lg:text-lg mt-6 gap-10 hidden md:flex-row flex-col px-10 items-center justify-center policytext">
          <ul class="list-disc">
            <li>Always play my best for the benefit of the team</li>
            <li>Play fairly and be friendly</li>
            <li>Play by the rules and respect the Referee</li>
            <li>Shake hands with the other team - win or lose</li>
            <li>Listen carefully to what my coach tells me</li>
            <li>Understand that a coach has to do what's best for the team</li>
            <li>Talk to someone I trust or the club welfare officer if I'm unhappy about anything at my club</li>
            <li>Encourage my team mates</li>
            <li>Respect the facilities home & away</li>
          </ul>
          
          <div>
            <p class="font-semibold -ml-4 mb-4">I understand that if I do not follow the Code, I may be:</p>
            <ul class="list-disc">
              <li>be asked to apologise to whoever I've upset</li>
              <li>Receive a formal warning</li>
              <li>be dropped, substituted or suspended from training</li>
            </ul>
          </div>
        </div>
      </div>
      
      <hr>
      <div class="w-full p-2 rounded flex items-center policyboxes text-white flex-col">
        <div class="w-full px-4 flex items-center">
          <h2 class="text-xl font-semibold tracking-tight italic uppercase">Policy 3</h2>
          
          <button @click="ExpandPolicy" class="plusminus ml-auto"></button>
        </div>
        
        <p class="text-sm mt-2 hidden px-10 policytext">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
      </div>
      
      <hr>
      <div class="w-full p-2 rounded flex items-center policyboxes text-white flex-col">
        <div class="w-full px-4 flex items-center">
          <h2 class="text-xl font-semibold tracking-tight italic uppercase">Policy 4</h2>
          
          <button @click="ExpandPolicy" class="plusminus ml-auto"></button>
        </div>
        
        <p class="text-sm mt-2 hidden px-10 policytext">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
      </div>
      <hr>
    </section>
  </section>
  
  <section class="py-10">
    <section class="w-[90%] lg:w-2/3 h-[400px] text-white max-w-[700px] mx-auto bg-white/20 rounded-md flex items-center justify-center">
      <div class="w-1/2 h-full flex items-center justify-center">
        <img class="w-1/2" src="../assets/phone1.png" alt="">
      </div>
      
      <div class="w-1/2 h-full flex flex-col justify-center">
        <h2 class="scale-y-125 uppercase italic text-2xl font-bold">get in touch</h2>
        <p class="opacity-70 mt-2">Fill out the form below and we will get back to you as soon as possible</p>
        
        <form action="" class="w-[90%] mt-6">
          <input type="text" class="w-full py-1 pl-2 rounded-md outline-none bg-white/10 text-white" placeholder="Name">
          <input type="email" class="w-full py-1 pl-2 mt-2 rounded-md outline-none bg-white/10 text-white" placeholder="Email">
          <textarea class="w-full resize-none py-1 pl-2 mt-2 h-20 rounded-md outline-none bg-white/10 text-white" placeholder="Message"></textarea>
          <input type="submit" class="hover:bg-white/20 duration-300 p-1 px-10 mt-2 rounded-md bg-white/10 text-white cursor-pointer" value="Submit">
        </form>
      </div>
    </section>
  </section>
</main>

<footer class="bg-[#060825] text-white font-semibold tracking-tight text-center p-8">
  <h2 class="scale-y-110">Torquay Academy FC © 2024 - {{ footerdate }} - Created with ♱ by <a href="https://jacksweb.co.uk" target="_blank" class="text-green-600 underline">JacksWeb</a></h2>
</footer>
</div>
</template>

<script setup>
import { ref, onMounted  } from 'vue';
import { supabase } from '../clients/supabase';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

const match1value = ref(""),
match2value = ref(""),
datevalue = ref(""),
locationvalue = ref(""),
news_headline = ref(""),
footerdate = getYear();

function getYear() {
  return new Date().getFullYear();
}

function HideExpandedNews() {
  const expandednews = document.querySelector('.expandednews');
  
  expandednews.style.opacity = "0";
}

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
    <div class="w-full h-20 sm:h-40 object-cover shadow-lg shadow-black/6w0 rounded newsimages newimage${i}" data-index="${i}"></div>
    <p class="text-sm mt-2 mb-1 opacity-80">${news.news_date}</p>
    <h2 class="mb-3 -mt-1 font-semibold newsheading">${news.news_heading}</h2>
    <p class="newsdesc font-light mt-4 hidden">${news.news_para}</p>
    `;
    
    if (!news.news_heading || news.news_heading.trim() === "null") {
      newnews.remove();
    } else {
      newnews.querySelector('.newsimages').addEventListener('click', expandnews);
      newsboxcontainer.appendChild(newnews);
    }
  }
}

function expandnews(event) {
  const newsElement = event.currentTarget;
  const newsBox = newsElement.closest('.news_boxes');
  const newsDesc = newsBox.querySelector('.newsdesc');
  
  if (newsDesc.style.display === "block") {
    newsDesc.style.display = "none";
  } else {
    newsDesc.style.display = "block";
  }
}
// <p class="tracking-tighter leading-tight px-2 pb-2 mt-2 max-h-48">${news.news_para}</p>

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
  
  if (nav.style.height == "40%") {
    nav.style.height = "48px"
    hiddennav.style.display = "none"
    hiddennav.style.transform = "translateY(-40px)"
  } else {
    nav.style.height = "40%"
    hiddennav.style.display = "block"
    hiddennav.style.opacity = "0"
    
    setTimeout(() => {
      hiddennav.style.opacity = "1"
      hiddennav.style.transform = "translateY(0)"
    }, 150)
  }
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
  rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const handleScroll = () => {
  const scrollPosition = window.scrollY,
  dot1 = document.querySelector('#dot1'),
  dot2 = document.querySelector('#dot2'),
  dot3 = document.querySelector('#dot3'),
  dot4 = document.querySelector('#dot4'),
  home = document.querySelector('#home'),
  dot1label = document.querySelector('#dot1label'),
  dot2label = document.querySelector('#dot2label'),
  dot3label = document.querySelector('#dot3label'),
  dot4label = document.querySelector('#dot4label'),
  sponsorsback = document.querySelector('.sponsorsback');
}

function showallnews() {
  const newsbox4 = document.querySelector('.news_boxes:nth-child(4)'),
  newsbox5 = document.querySelector('.news_boxes:nth-child(5)'),
  viewallbutton = document.querySelector('#viewallbutton');
  
  if (newsbox4.style.display == "block") {
    newsbox4.style.display = "none";
    newsbox5.style.display = "none";
    viewallbutton.textContent = "View all";
  } else {
    newsbox4.style.display = "block";
    newsbox5.style.display = "block";
    viewallbutton.textContent = "View less";
  }
}

function ExpandPolicy() {
  const policyboxes = document.querySelectorAll('.policyboxes');
  const plusminus = document.querySelectorAll('.plusminus');
  const policytext = document.querySelectorAll('.policytext');
  
  policytext.forEach(text => {
    text.style.display = "none";
  });
  
  for (let i = 0; i < policyboxes.length; i++) {
    policyboxes[i].addEventListener('click', () => {
      // Use getComputedStyle to check the current display value
      if (getComputedStyle(policytext[i]).display === "flex") {
        policytext[i].style.display = "none";
        plusminus[i].classList.remove('active');
      } else {
        policytext[i].style.display = "flex";
        plusminus[i].classList.add('active');
      }
    });
  }
}


onMounted(() => {
  get_DB_Values();
  window.addEventListener('scroll', handleScroll);
  
  window.onscroll = function() {
    if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
      document.querySelector('.normalnav').style.height = "38px";
      document.querySelector('.tasheader').style.fontSize = "13px";
      document.querySelector('.hamburger').classList.add('hamburgerscrolled');
    } else {
      document.querySelector('.normalnav').style.height = "48px";
      document.querySelector('.tasheader').style.fontSize = "18px";
      document.querySelector('.hamburger').classList.remove('hamburgerscrolled');
    }
  }
  
  const ring1 = document.querySelector('#ring1'),
  ring2 = document.querySelector('#ring2'),
  ring3 = document.querySelector('#ring3');
  // secondheader = document.querySelector('#secondheader');
  
  // setTimeout(() => {
    //   secondheader.style.height = "50%";
    // }, 100);
    /*
    setTimeout(() => {
      ring1.style.opacity = "1";
    }, 300);
    
    setTimeout(() => {
      ring2.style.opacity = "1";
    }, 600);
    
    setTimeout(() => {
      ring3.style.opacity = "1";
    }, 900);
    
    const footballmanoutline = document.querySelector('#footballmanoutline'),
    footballman1 = document.querySelector('#footballman1'),
    footballman2 = document.querySelector('#footballman2'),
    footballman3 = document.querySelector('#footballman3'),
    inspoheading = document.querySelector('#inspoheading');
    
    setTimeout(() => {
      footballmanoutline.style.height = "400px";
    }, 500);
    
    setTimeout(() => {
      footballman1.style.opacity = "1";
    }, 1000);
    
    setTimeout(() => {
      footballman2.style.opacity = "0.6";
    }, 1300);
    
    setTimeout(() => {
      footballman3.style.opacity = "0.1";
    }, 1600);
    
    setTimeout(() => {
      inspoheading.style.opacity = "1";
    }, 1800);
    
    const nextmatch = document.querySelector('.nextmatch');
    
    setTimeout(() => {
      nextmatch.style.opacity = "1";
      nextmatch.style.right = "190px";
    }, 2000); */
  })
  
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300..700&display=swap');

.footballimage {
  animation: ease-in-out 5s infinite footballAnimation;
}

#teamsrightsection {
  background-image: url('https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg');
  background-size: cover;
  background-position: center;
}

.committemembers:hover .scroll-container {
  animation-play-state: paused;
}

.commmembers:hover {
  scale: 1.05;
}

.plusminus {
  position: relative;
  width: 25px;
  height: 25px;
  cursor: pointer;
  
  &.active {
    &:before {
      transform: translatey(-50%) rotate(-90deg);
      opacity: 0;
    }
    &:after {
      transform: translatey(-50%) rotate(0);
    }
  }
  
  &:before , &:after {
    content: "";
    display: block;
    background-color: white;
    position: absolute;		
    top: 50%; left: 0;
    transition: .35s;
    width: 100%;
    height: 3px;
  }
  
  &:before {		
    transform: translatey(-50%);
  }
  
  &:after {
    transform: translatey(-50%) rotate(90deg);
  }
  
}

.scroll-container {
  animation: marquee 15s linear infinite;
  
  div:nth-child(1) {
    background-image: url('../assets/committee/1.jpg');
  }
  div:nth-child(2) {
    background-image: url('../assets/committee/2.jpg');
  }
  div:nth-child(3) {
    background-image: url('../assets/committee/3.jpg');
  }
  div:nth-child(4) {
    background-image: url('../assets/committee/4.jpg');
  }
  div:nth-child(5) {
    background-image: url('../assets/committee/5.jpg');
  }
  div:nth-child(6) {
    background-image: url('../assets/committee/6.jpg');
  }
  div:nth-child(7) {
    background-image: url('../assets/committee/7.jpg');
  }
  
  div {
    @apply bg-cover bg-center bg-no-repeat;
  }
}

.SponsorsSwiper {
  .swiperslide {
    @apply sm:pt-6 scale-75 bg-white py-4 opacity-5 pb-8 flex flex-col items-center justify-center text-center gap-3 p-2 duration-300 rounded;
    transition: margin-top 300ms ease, transform 300ms ease, opacity 300ms ease;
    
    div {
      @apply w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat;
    }
    
    #swiperslide1 {
      background-image: url("../assets/committee/1.jpg");
    }
    #swiperslide2 {
      background-image: url("../assets/committee/2.jpg");
    }
    #swiperslide3 {
      background-image: url("../assets/committee/3.jpg");
    }
    #swiperslide4 {
      background-image: url("../assets/committee/4.jpg");
    }
    #swiperslide5 {
      background-image: url("../assets/committee/5.jpg");
    }
    
    &.swiper-slide-active {
      @apply shadow-black shadow-2xl opacity-100 filter-none scale-110;
    }
    
    &.swiper-slide-next {
      @apply opacity-20;
    }
    
    &.swiper-slide-prev {
      @apply opacity-20;
    }
  }
}

:global(.swiper-pagination-bullet) {
  @apply bg-white;
}
.swiper-button-prev, .swiper-button-next {
  @apply text-white;
}
.swiper-button-prev::after, .swiper-button-next::after {
  @apply text-3xl;
}

.topheader {
  background-image: url('https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  
  @apply bg-cover bg-center bg-no-repeat;
  // mask-image: linear-gradient(to bottom, white, transparent);
}

#firstblock, #secondblock, #thirdblock {
  @apply bg-cover bg-center bg-no-repeat;
}
#firstblock {
  background-image: url("https://plus.unsplash.com/premium_photo-1664304755634-c8fe093034c4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
}
#secondblock {
  background-image: url("https://images.unsplash.com/photo-1659081436197-8d0a7d70564a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
}
#thirdblock {
  background-image: url("https://images.unsplash.com/photo-1428200698796-38743f953a43?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
}

.hamburger {
  @apply mt-[5px];
  
  div {
    @apply relative w-6 h-[2.2px] rounded-[3px] bg-white mt-[5px] duration-300;
  }
}

.hamburgerscrolled {
  @apply scale-[0.8];
  top: 2px !important;
  right: 5px !important;
}

#toggle:checked + .hamburger .top-bun {
  @apply mt-[14px] -rotate-45;
}
#toggle:checked + .hamburger .bottom-bun {
  @apply rotate-45 opacity-0;
}
#toggle:checked + .hamburger .meat {
  @apply -mt-[2.5px] rotate-45;
}
#toggle:checked + .hamburger + .nav {
  @apply scale-100 top-0;
}

#next-match {
  background-image: url("../assets/pitch.jpg");
  @apply bg-cover bg-center bg-no-repeat;
}

.team-match {
  @apply -skew-x-[10deg];
}

.news_boxes {
  @apply cursor-pointer w-[160px] sm:w-[250px] duration-200 hover:scale-[0.98];
  font-family: "Signika Negative", sans-serif;
  
  .newsimages {
    @apply bg-cover bg-center bg-no-repeat;
  }
  
  .newimage1 {
    background-image: url("https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_1280.jpg");
  }
  .newimage2 {
    background-image: url("https://cdn.pixabay.com/photo/2022/08/17/15/46/soccer-7392844_1280.jpg");
  }
  .newimage3 {
    background-image: url("https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg");
  }
  .newimage4 {
    background-image: url("https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg");
  }
  .newimage5 {
    background-image: url("https://images.unsplash.com/photo-1624280157150-4d1ed8632989?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg");
  }
}

.news_boxes:nth-child(4) {
  @apply hidden;
}
.news_boxes:nth-child(5) {
  @apply hidden;
}

.policyboxes {
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: black;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.455);
    border-radius: 50px;
  }
}

@keyframes footballAnimation {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% + 100vw));
  }
}
</style>

<!-- Qrap9ufrDRxXirQi -->

<!-- tasfc50@gmail.com -->
<!-- TASFCClubAdmin991-@ -->




<!-- Backup football -->
<!-- <div class="hidden">
<div id="ring1" class="mt-24 mr-2 sm:mr-auto sm:mt-auto opacity-0 outline-double outline-[7px] outline-blue-400 duration-500 shadow-2xl shadow-blue-400/80 border-solid rounded-full flex items-center justify-center md:size-72 size-36 2xl:size-[350px]">
<div id="ring2" class="opacity-0 duration-500 outline-double outline-[7px] outline-blue-400/50 border-solid rounded-full flex items-center justify-center md:size-64 size-32 2xl:size-80">
<div id="ring3" class="opacity-0 duration-500 outline-double outline-[7px] outline-blue-400/20 border-solid rounded-full flex items-center justify-center md:size-56 size-28 2xl:size-72">
<img class="footballimage" src="../assets/football.png" alt="">
</div>
</div>
</div>
</div> -->
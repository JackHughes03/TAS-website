<template>
  <div class="service w-full h-full bg-[#43425D] absolute text-[#222222] flex items-center justify-center">    
    <form class="flex flex-col justify-center items-center bg-white w-[300px] rounded pt-4 pb-3">
      <p class="font-semibold text-center px-4"
      :class="{
        'text-red-600': successorno === 'Invalid credentials' || successorno === 'Error logging out',
        'text-green-600': successorno === 'Logged in successfully' || successorno === 'Logged out successfully'
      }"
      >
      {{ successorno }}
    </p>
    
    <h3 class="text-xl font-bold font-[roboto] admintitle py-4">Admin login</h3>
    <input v-model="email" type="text" placeholder="Username" class="border-2 text-black rounded-md p-1 m-3 w-60 bg-[#EEEEEE]" />
    <input id="password" v-model="password" type="password" placeholder="Password" class="border-2 text-black rounded-md p-1 mb-2 w-60 bg-[#EEEEEE]" />
    
    <div class="mr-auto ml-8">
      <input @click="revealpass" type="checkbox" class="mr-2 border-2 my-2 border-[#333333] rounded-md" />
      <label class="text-black text-sm font-[roboto]">Reveal password</label>
    </div>
    
    <button type="button" @click="login" class="bg-[#69688e] hover:bg-[#44435b] text-white rounded-md p-2 mt-2 w-60 duration-200 mt-8" id="loginbutton">Login</button>
    <button type="button" @click="logout" class="bg-transparent border-2 hover:bg-[#f2f2f2] text-black rounded-md p-1 m-2 w-52 duration-200" id="loginbutton">Logout</button>
    
    <button class="text-xs mr-auto ml-2 mt-2" @click="returnhome">Return home</button>
  </form>
  
  <!-- <button @click="updatedb" class="bg-white m-10 px-2 py-1 rounded">Update db</button> -->
</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ServiceView from '@/components/Service.vue';
import { supabase } from '../clients/supabase';
import emailjs from 'emailjs-com'

let email = ref(""),
password = ref(""),
successorno = ref("")
import { useRouter } from 'vue-router';
const $router = useRouter();

function sendEmail(ip, userAgent, time, screenSize) {
  emailjs.init('mUIcDTkk26yYMvc6r');
  
  var templateParams = {
    ip: ip,
    userAgent: userAgent,
    time: time,
    screenSize: screenSize
  };
  
  emailjs.send('service_vjde5hm', 'template_dew0khs', templateParams).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  }
  );
}

async function login() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  
  if (error) {
    const response = await fetch('https://api64.ipify.org?format=json');
    const data = await response.json();
    const ip = data.ip;
    
    sendEmail(ip, navigator.userAgent, new Date().toLocaleString(), window.screen.width + 'x' + window.screen.height);
    
    successorno.value = "Invalid credentials"
    
    const timer = 5,
    loginbutton = document.getElementById("loginbutton")
    loginbutton.disabled = true
    loginbutton.style.backgroundColor = "#333333"
    
    
    for (let i=0; i<timer; i++) {
      setTimeout(() => {
        loginbutton.innerHTML = `Try again in ${timer - i} seconds`
      }, i * 1000)
    }
    
    setTimeout(() => {
      loginbutton.value = ""
      loginbutton.disabled = false
      loginbutton.style.backgroundColor = "#69688e"
      loginbutton.innerHTML = "Login"
    }, timer * 1000)
    
  } else {
    const admintitle = document.querySelector(".admintitle")
    
    successorno.value = "Logged in successfully"
    email.value = ""
    password.value = ""
    
    const timer = 3;
    for (let i=0; i<timer; i++) {
      setTimeout(() => {
        admintitle.innerHTML = `Redirecting in ${timer - i}`
      }, i * 1000)
    }
    
    setTimeout(() => {
      $router.push({ name: "container" })
    }, timer * 1000)
  }
}

function returnhome() {
  $router.push({ name: "home" })
}

async function logout() {
  const { error } = await supabase.auth.signOut()
  
  if (error) {
    successorno.value = "Error logging out"
  } else {
    successorno.value = "Logged out successfully"
  }
}

function revealpass() {
  const password = document.getElementById("password")
  password.type === "password" ? password.type = "text" : password.type = "password"
}

onMounted(() => {
  logout();
});
</script>

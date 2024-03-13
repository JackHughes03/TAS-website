<template>
  <div class="bg-[#0d3e3e] size-full absolute text-white">
    
    <div class="bg-[#11111180] w-full top-0 px-4 text-sm sm:text-base py-10 flex flex-col items-center text-center justify-center gap-4">
      <button class="bg-white hover:bg-[#ffffff95] absolute right-3 top-3 duration-200 text-black font-semibold px-2 rounded mt-1 py-1" @click="returnhome">Return home</button>
      
      <h1 class="font-bold text-2xl font-[roboto]">Admin editing page</h1>
      <ul class="max-w-3xl">
        <li>This website is hooked up to a secure database.</li>
        <li>Now that you are logged in using secure authentication, you can make changes to the database, which are then extracted and displayed on the website.</li>
        <li>Once you have updated and added everything you want, return home and see the changes.</li>
      </ul>
      
      <!-- <section class="absolute top-0 right-0 bg-[#11111180] backdrop-blur-md p-10 rounded-md">
        <button @click="getdb(null)" class="bg-white text-black">Load data</button>
        <button @click="checkdatabase" class="bg-white text-black ml-4">Update data</button>
        <button @click="savedata" class="bg-white text-black ml-4">Save data</button>
        
        <h2 class="text-white mt-4">Team 1: {{ match1Value }}</h2>
        <h2 class="text-white">Team 2: {{ match2Value }}</h2>
        <h2 class="text-white">Date: {{ dateValue }}</h2>
        <h2 class="text-white">Location: {{ locationValue }}</h2>
        
        <hr class="my-4">
        
        <h2 class="text-white">News heading: {{ newsheadingValue }}</h2>
        <h2 class="text-white">News para: {{ newsparaValue }}</h2>
        <h2 class="text-white">News date: {{ newsdateValue }}</h2>
      </section> -->
    </div>
    
    <section class="flex items-center sm:flex-row flex-col justify-center gap-2 mt-6 my-6">
      <button @click="update_news_db" class="bg-black/70 text-white font-semibold px-8 py-3 -skew-x-6 text-lg hover:bg-black duration-200">Update all content</button>
      <button @click="clear_db" class="bg-black/70 text-white font-semibold px-8 py-3 -skew-x-6 text-lg hover:bg-black duration-200">Clear database</button>
    </section>
    
    <section class="flex items-center justify-center flex-col sm:flex-row mt-4 max-w-4xl mx-auto gap-4 bg-[#0d3e3e] pb-10">
      <section class="bg-[#11111180] flex flex-col sm:w-[40%] w-[90%] items-center justify-center h-[400px]">
        <h2 class="pb-4 font-bold text-lg uppercase">Edit next match</h2>
        
        <label class="font-semibold text-base uppercase mt-2">Team 1</label>
        <textarea id="match1id" v-model="match1id" placeholder="Team 1"></textarea>
        
        <label class="font-semibold text-base uppercase mt-2">Team 2</label>
        <textarea id="match2id" v-model="match2id" placeholder="Team 2"></textarea>
        
        <label class="font-semibold text-base uppercase mt-2">Date</label>
        <textarea id="dateid" v-model="dateid" placeholder="Date"></textarea>
        
        <label class="font-semibold text-base uppercase mt-2">Location</label>
        <textarea id="locationid" v-model="locationid" placeholder="Location"></textarea>
      </section>
      
      <section class="bg-[#11111180] flex flex-col w-[90%] sm:w-[60%] items-center justify-center h-[400px]">
        <div class="w-full mr-10 h-8 -mt-8 flex justify-end">
          <button @click="add_news">
            <img class="size-full" src="../assets/plus.png" alt="">
          </button>
        </div>
        
        <h2 class="pb-4 font-bold text-lg uppercase">Add news</h2>
        
        <label class="font-semibold text-base uppercase mt-2">News Headline</label>
        <textarea class="!w-[80%]" placeholder="News headline" id="newsheading" v-model="newsheading"></textarea>
        
        <label class="font-semibold text-base uppercase mt-2">news text</label>
        <textarea class="!w-[80%] !h-20" placeholder="News description" id="newspara" v-model="newspara"></textarea>
        
        <label class="font-semibold text-base uppercase mt-2">Date</label>
        <textarea class="!w-[80%]" placeholder="News date" id="newsdate" v-model="newsdate"></textarea>
      </section>
    </section>
    
    <section class="w-full max-w-4xl h-52 overflow-y-scroll mx-auto bg-[#0d3e3e] newsblock">
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import '@vuepic/vue-datepicker/dist/main.css';
import { supabase } from '../clients/supabase';

let match1id = ref(''),
match2id = ref(''),
locationid = ref(''),
dateid = ref(''),
newsheading = ref(''),
newspara = ref(''),
newsdate = ref(''),
match1Value = ref(''),
match2Value = ref(''),
dateValue = ref(''),
locationValue = ref(''),
newsheadingValue = ref(''),
newsparaValue = ref(''),
newsdateValue = ref(''),
addedNewsAmount = ref(0),
headingnames = ref([]);

async function clear_db() {
  if (confirm('Warning, this is a destructive action. Whilst this is safe and does not delete the database, it will remove all added values by you.')) {
    // delete all rows in the news_table apart from the one with the id 21
    const { data, error } = await supabase
    .from('news_table')
    .delete()
    .neq('id', 21);
    
    if (error) {
      console.error('Error deleting data:', error);
      return;
    }
    
    // delete all values in the id 22 row of the tas_database
    const { data2, error2 } = await supabase
    .from('tas_database')
    .update({
      match_1: '',
      match_2: '',
      date: '',
      location: '',
    })
    .eq('id', 22);
    
    if (error2) {
      console.error('Error updating database:', error2);
      return;
    }
    
    getdb();   
  } else {
  }
}

async function update_news_db() {
  const AddedNews = document.querySelectorAll('.AddedNews');
  
  let newsData = {};
  
  for (let i = 0; i < AddedNews.length; i++) {
    const newsheadingId = `newsheading${i + 1}`;
    const newsheadingElement = document.getElementById(newsheadingId);
    if (!newsheadingElement) {
      console.log(`Element with ID ${newsheadingId} not found.`);
      continue; // Skip this iteration and proceed to the next one
    }
    newsData[newsheadingId] = newsheadingElement.textContent;
    
    const newsparaId = `newspara${i + 1}`;
    const newsparaElement = document.getElementById(newsparaId);
    if (!newsparaElement) {
      console.log(`Element with ID ${newsparaId} not found.`);
      continue;
    }
    newsData[newsparaId] = newsparaElement.textContent;
    
    const newsdateId = `newsdate${i + 1}`;
    const newsdateElement = document.getElementById(newsdateId);
    if (!newsdateElement) {
      console.log(`Element with ID ${newsdateId} not found.`);
      continue;
    }
    newsData[newsdateId] = newsdateElement.textContent;
    
    console.log(newsheadingId, newsparaId, newsdateId);
    
    const { data, error } = await supabase
    .from('news_table')
    .insert([
    { 
      news_heading: newsData[newsheadingId],
      news_para: newsData[newsparaId],
      news_date: newsData[newsdateId]
    }
    ]);
  }
  
  checkdatabase();
}

async function savedata() {
  getdb("getinfo");
}

function add_news() { 
  addedNewsAmount.value++;
  
  const newsblock = document.querySelector('.newsblock'),
  newnews = document.createElement('div');
  
  newnews.classList.add('AddedNews', 'w-[90%]', 'text-black', 'mx-auto', 'mt-3', 'h-12', 'bg-white', 'flex', 'items-center', 'pl-6', '-skew-x-6', 'rounded');
  newsblock.appendChild(newnews);
  newnews.id = `AddedNews${addedNewsAmount.value}`;
  
  const newnewsheadingText = newsheading.value,
  existingHeadings = document.querySelectorAll('h2');
  
  for (let i = 0; i < existingHeadings.length; i++) {
    if (existingHeadings[i].textContent === newnewsheadingText) {
      alert('This news heading already exists');
      // remove it
      newnews.remove();
      return;
    }
  }
  
  const newnewsheading = document.createElement('h2');
  newnewsheading.textContent = newnewsheadingText;
  newnewsheading.id = `newsheading${addedNewsAmount.value}`;
  newnews.appendChild(newnewsheading);
  
  const newnewspara = document.createElement('p');
  newnewspara.textContent = newspara.value;
  newnewspara.classList.add('opacity-0');
  newnews.appendChild(newnewspara);
  newnewspara.id = `newspara${addedNewsAmount.value}`;
  
  const newnewsdate = document.createElement('p');
  newnewsdate.textContent = newsdate.value;
  newnewsdate.classList.add('opacity-0');
  newnews.appendChild(newnewsdate);
  newnewsdate.id = `newsdate${addedNewsAmount.value}`;
  
  const newnewsbutton = document.createElement('button');
  newnewsbutton.classList.add('ml-auto', 'mr-6');
  newnewsbutton.innerHTML = 'Delete';
  newnews.appendChild(newnewsbutton);
  newnewsbutton.id = `newsbutton${addedNewsAmount.value}`;
  
  console.log(newnews.id, newnewsheading.id, newnewsbutton.id);
  
  newnewsbutton.addEventListener('click', () => {
    newnews.remove();
  });
}

async function checkdatabase() {  
  const { data, error } = await supabase
  .from('tas_database')
  .update({
    match_1: match1id.value,
    match_2: match2id.value,
    date: dateid.value,
    location: locationid.value,
  })
  .eq('id', 22);
  
  if (error) {
    console.error('Error updating database:', error);
    return;
  }
  // console.log('Updated database:', data);
  getdb();
}

async function getNewsTable() {
  const { data, error } = await supabase
  .from('news_table')
  .select('*')
  .eq('id', 21);
  
  if (error) {
    console.error('Error fetching data:', error);
    return;
  }
  
  const rowData = data[0];
  
  if (!rowData) {
    console.error('No data found for id 21');
    return;
  }
  
  // assign newnewsheading the entire row of news_headings
  newsheadingValue.value = rowData.news_heading || '';
  newsparaValue.value = rowData.news_para || '';
  newsdateValue.value = rowData.news_date || '';
}

async function getdb(info) {
  getNewsTable();
  
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
  
  match1Value.value = rowData.match_1 || '';
  match2Value.value = rowData.match_2 || '';
  dateValue.value = rowData.date || '';
  locationValue.value = rowData.location || '';
  
  if (info === 'getinfo') {
    const dataarray = [
    match1id.value,
    match2id.value,
    dateid.value,
    locationid.value,
    ];
    
    const jsondata = JSON.stringify(dataarray),
    blob = new Blob([jsondata], { type: 'application/json' }),
    url = URL.createObjectURL(blob),
    a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    a.click(); 
  }
}

onMounted(() => {
  getdb();
});


const $router = useRouter();

function returnhome() {
  $router.push({ name: "home" })
}
</script>

<style scoped lang="scss">
textarea {
  @apply text-black h-10 pt-[7px] pl-3 resize-none w-[80%] sm:w-auto;
}

.newsblock {
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f100;
  }
  &::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 20px;
  }
}
</style>
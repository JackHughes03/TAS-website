(function(){"use strict";var e={500:function(e,t,o){o.r(t),o.d(t,{default:function(){return O}});var n=o(760),a=o(568),s=o(328),r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1klEQVR4nO3byUoDQRRA0ezirP/g9HkOIILDQvDrVNw4G8FPMIIuw5U2DQ5E7YaOlXp9D2STTV5f3qIDVZ2OJEmSpPCAaWAq9RwhAUvAMfDIhwfgCFhMPV8IwPq3wN8VwddSz5k1YA7o8bc7YDb1vNkCdqluJ/W82QLOa4Q+Sz1vtoDXGqFfUs+bLWpKPW+2MLShQ8GNNnQouNGGDgU32tCh4EYbOhTcaEOHghtt6FBwow0dCm60oUPBjTZ0KLjRhg6Ftm50cb4N2C5OBQHPtE+/fPatsZ31K05sAtepn3SCXAEr4zjVaeTRp1ibO58NHI74EQ0dNBm6OOyt0XpNRe4Cgx9+RLy36Ro6l9DlVle53tBWvUYil6EPUj/NBNtr+vWueG/UV7fAQmOhy9grxv7iAlhuNPKn2DPAJnBa/h1tmz5wAmwULTpRUFPqebOFoQ0dCm60oUPBjTZ0KLjRhg4FN9rQoeBGGzoU3GhDh4IbbehQcKMNHQputKFDwY02dCi40f8Wul+j9dM/jRUPw4s5VZ2knjdbDG+AVbWRet7cr9tdVYh8GeosXArAKnDzS+TrsZ3qbBtgHtgvbx4Mys99+d186vlCYnh5qZk7I5IkSZI6k+wNJgs9CuOiKBgAAAAASUVORK5CYII=",l=o(216),i=o(424);const c=e=>((0,n.ED)("data-v-bbd30888"),e=e(),(0,n.ii)(),e),d={class:"bg-[#0d3e3e] size-full absolute text-white"},u=c((()=>(0,n.QD)("h1",{class:"font-bold text-2xl font-[roboto]"},"Admin editing page",-1))),m=c((()=>(0,n.QD)("ul",{class:"max-w-3xl"},[(0,n.QD)("li",null,"This website is hooked up to a secure database."),(0,n.QD)("li",null,"Now that you are logged in using secure authentication, you can make changes to the database, which are then extracted and displayed on the website."),(0,n.QD)("li",null,"Once you have updated and added everything you want, return home and see the changes.")],-1))),p={class:"flex items-center justify-center flex-col sm:flex-row mt-4 max-w-4xl mx-auto gap-4 bg-[#0d3e3e] pb-10"},f={class:"bg-[#11111180] flex flex-col sm:w-[40%] w-[90%] items-center justify-center h-[400px]"},h=c((()=>(0,n.QD)("h2",{class:"pb-4 font-bold text-lg uppercase"},"Edit next match",-1))),b=c((()=>(0,n.QD)("label",{class:"font-semibold text-base uppercase mt-2"},"Team 1",-1))),g=c((()=>(0,n.QD)("label",{class:"font-semibold text-base uppercase mt-2"},"Team 2",-1))),x=c((()=>(0,n.QD)("label",{class:"font-semibold text-base uppercase mt-2"},"Date",-1))),v=c((()=>(0,n.QD)("label",{class:"font-semibold text-base uppercase mt-2"},"Location",-1))),w={class:"bg-[#11111180] flex flex-col w-[90%] sm:w-[60%] items-center justify-center h-[400px]"},y=c((()=>(0,n.QD)("img",{class:"size-full",src:r,alt:""},null,-1))),D=[y],A=c((()=>(0,n.QD)("h2",{class:"pb-4 font-bold text-lg uppercase"},"Add news",-1))),I=c((()=>(0,n.QD)("label",{class:"font-semibold text-base uppercase mt-2"},"News Headline",-1))),Q=c((()=>(0,n.QD)("label",{class:"font-semibold text-base uppercase mt-2"},"news text",-1))),k=c((()=>(0,n.QD)("label",{class:"font-semibold text-base uppercase mt-2"},"Date",-1))),E=c((()=>(0,n.QD)("section",{class:"w-full max-w-4xl h-52 overflow-y-scroll mx-auto bg-[#0d3e3e] newsblock"},null,-1)));var j={__name:"ContainerView",setup(e){let t=(0,a.IL)(""),o=(0,a.IL)(""),r=(0,a.IL)(""),c=(0,a.IL)(""),y=(0,a.IL)(""),j=(0,a.IL)(""),L=(0,a.IL)(""),C=(0,a.IL)(""),O=(0,a.IL)(""),T=(0,a.IL)(""),_=(0,a.IL)(""),S=(0,a.IL)(""),V=(0,a.IL)(""),N=(0,a.IL)(""),U=(0,a.IL)(0);(0,a.IL)([]);async function W(){if(confirm("Warning, this is a destructive action. Whilst this is safe and does not delete the database, it will remove all added values by you.")){const{data:e,error:t}=await i.G.from("news_table").delete().neq("id",21);if(t)return void console.error("Error deleting data:",t);const{data2:o,error2:n}=await i.G.from("tas_database").update({match_1:"",match_2:"",date:"",location:""}).eq("id",22);if(n)return void console.error("Error updating database:",n);B()}}async function P(){const e=document.querySelectorAll(".AddedNews");let t={};for(let o=0;o<e.length;o++){const e=`newsheading${o+1}`,n=document.getElementById(e);if(!n){console.log(`Element with ID ${e} not found.`);continue}t[e]=n.textContent;const a=`newspara${o+1}`,s=document.getElementById(a);if(!s){console.log(`Element with ID ${a} not found.`);continue}t[a]=s.textContent;const r=`newsdate${o+1}`,l=document.getElementById(r);if(!l){console.log(`Element with ID ${r} not found.`);continue}t[r]=l.textContent,console.log(e,a,r);const{data:c,error:d}=await i.G.from("news_table").insert([{news_heading:t[e],news_para:t[a],news_date:t[r]}])}q()}function K(){U.value++;const e=document.querySelector(".newsblock"),t=document.createElement("div");t.classList.add("AddedNews","w-[90%]","text-black","mx-auto","mt-3","h-12","bg-white","flex","items-center","pl-6","-skew-x-6","rounded"),e.appendChild(t),t.id=`AddedNews${U.value}`;const o=y.value,n=document.querySelectorAll("h2");for(let i=0;i<n.length;i++)if(n[i].textContent===o)return alert("This news heading already exists"),void t.remove();const a=document.createElement("h2");a.textContent=o,a.id=`newsheading${U.value}`,t.appendChild(a);const s=document.createElement("p");s.textContent=j.value,s.classList.add("opacity-0"),t.appendChild(s),s.id=`newspara${U.value}`;const r=document.createElement("p");r.textContent=L.value,r.classList.add("opacity-0"),t.appendChild(r),r.id=`newsdate${U.value}`;const l=document.createElement("button");l.classList.add("ml-auto","mr-6"),l.innerHTML="Delete",t.appendChild(l),l.id=`newsbutton${U.value}`,console.log(t.id,a.id,l.id),l.addEventListener("click",(()=>{t.remove()}))}async function q(){const{data:e,error:n}=await i.G.from("tas_database").update({match_1:t.value,match_2:o.value,date:c.value,location:r.value}).eq("id",22);n?console.error("Error updating database:",n):B()}async function M(){const{data:e,error:t}=await i.G.from("news_table").select("*").eq("id",21);if(t)return void console.error("Error fetching data:",t);const o=e[0];o?(S.value=o.news_heading||"",V.value=o.news_para||"",N.value=o.news_date||""):console.error("No data found for id 21")}async function B(e){M();const{data:n,error:a}=await i.G.from("tas_database").select("*").eq("id",22);if(a)return void console.error("Error fetching data:",a);const s=n[0];if(s){if(C.value=s.match_1||"",O.value=s.match_2||"",T.value=s.date||"",_.value=s.location||"","getinfo"===e){const e=[t.value,o.value,c.value,r.value],n=JSON.stringify(e),a=new Blob([n],{type:"application/json"}),s=URL.createObjectURL(a),l=document.createElement("a");l.href=s,l.download="data.json",l.click()}}else console.error("No data found for id 22")}(0,n.u2)((()=>{B()}));const G=(0,l.KX)();function z(){G.push({name:"home"})}return(e,l)=>((0,n.Wz)(),(0,n.An)("div",d,[(0,n.QD)("div",{class:"bg-[#11111180] w-full top-0 px-4 text-sm sm:text-base py-10 flex flex-col items-center text-center justify-center gap-4"},[(0,n.QD)("button",{class:"bg-white hover:bg-[#ffffff95] absolute right-3 top-3 duration-200 text-black font-semibold px-2 rounded mt-1 py-1",onClick:z},"Return home"),u,m]),(0,n.QD)("section",{class:"flex items-center sm:flex-row flex-col justify-center gap-2 mt-6 my-6"},[(0,n.QD)("button",{onClick:P,class:"bg-black/70 text-white font-semibold px-8 py-3 -skew-x-6 text-lg hover:bg-black duration-200"},"Update all content"),(0,n.QD)("button",{onClick:W,class:"bg-black/70 text-white font-semibold px-8 py-3 -skew-x-6 text-lg hover:bg-black duration-200"},"Clear database")]),(0,n.QD)("section",p,[(0,n.QD)("section",f,[h,b,(0,n.wt)((0,n.QD)("textarea",{id:"match1id","onUpdate:modelValue":l[0]||(l[0]=e=>(0,a.Ir)(t)?t.value=e:t=e),placeholder:"Team 1"},null,512),[[s.Og,(0,a.KV)(t)]]),g,(0,n.wt)((0,n.QD)("textarea",{id:"match2id","onUpdate:modelValue":l[1]||(l[1]=e=>(0,a.Ir)(o)?o.value=e:o=e),placeholder:"Team 2"},null,512),[[s.Og,(0,a.KV)(o)]]),x,(0,n.wt)((0,n.QD)("textarea",{id:"dateid","onUpdate:modelValue":l[2]||(l[2]=e=>(0,a.Ir)(c)?c.value=e:c=e),placeholder:"Date"},null,512),[[s.Og,(0,a.KV)(c)]]),v,(0,n.wt)((0,n.QD)("textarea",{id:"locationid","onUpdate:modelValue":l[3]||(l[3]=e=>(0,a.Ir)(r)?r.value=e:r=e),placeholder:"Location"},null,512),[[s.Og,(0,a.KV)(r)]])]),(0,n.QD)("section",w,[(0,n.QD)("div",{class:"w-full mr-10 h-8 -mt-8 flex justify-end"},[(0,n.QD)("button",{onClick:K},D)]),A,I,(0,n.wt)((0,n.QD)("textarea",{class:"!w-[80%]",placeholder:"News headline",id:"newsheading","onUpdate:modelValue":l[4]||(l[4]=e=>(0,a.Ir)(y)?y.value=e:y=e)},null,512),[[s.Og,(0,a.KV)(y)]]),Q,(0,n.wt)((0,n.QD)("textarea",{class:"!w-[80%] !h-20",placeholder:"News description",id:"newspara","onUpdate:modelValue":l[5]||(l[5]=e=>(0,a.Ir)(j)?j.value=e:j=e)},null,512),[[s.Og,(0,a.KV)(j)]]),k,(0,n.wt)((0,n.QD)("textarea",{class:"!w-[80%]",placeholder:"News date",id:"newsdate","onUpdate:modelValue":l[6]||(l[6]=e=>(0,a.Ir)(L)?L.value=e:L=e)},null,512),[[s.Og,(0,a.KV)(L)]])])]),E]))}},L=o(152);const C=(0,L.c)(j,[["__scopeId","data-v-bbd30888"]]);var O=C},380:function(e,t,o){o.r(t),o.d(t,{default:function(){return b}});var n=o(760),a=o(372),s=o(568),r=o(328);o(152);var l=o(424),i=o(932),c=o(216);const d={class:"service w-full h-full bg-[#43425D] absolute text-[#222222] flex items-center justify-center"},u={class:"flex flex-col justify-center items-center bg-white w-[300px] rounded pt-4 pb-3"},m=(0,n.QD)("h3",{class:"text-xl font-bold font-[roboto] admintitle py-4"},"Admin login",-1),p=(0,n.QD)("label",{class:"text-black text-sm font-[roboto]"},"Reveal password",-1);var f={__name:"ServiceView",setup(e){let t=(0,s.IL)(""),o=(0,s.IL)(""),f=(0,s.IL)("");const h=(0,c.KX)();function b(e,t,o,n){i.cp.init("mUIcDTkk26yYMvc6r");var a={ip:e,userAgent:t,time:o,screenSize:n};i.cp.send("service_vjde5hm","template_dew0khs",a).then((e=>{console.log("SUCCESS!",e.status,e.text)}),(e=>{console.log("FAILED...",e)}))}async function g(){const{data:e,error:n}=await l.G.auth.signInWithPassword({email:t.value,password:o.value});if(n){const e=await fetch("https://api64.ipify.org?format=json"),t=await e.json(),o=t.ip;b(o,navigator.userAgent,(new Date).toLocaleString(),window.screen.width+"x"+window.screen.height),f.value="Invalid credentials";const n=5,a=document.getElementById("loginbutton");a.disabled=!0,a.style.backgroundColor="#333333";for(let s=0;s<n;s++)setTimeout((()=>{a.innerHTML=`Try again in ${n-s} seconds`}),1e3*s);setTimeout((()=>{a.value="",a.disabled=!1,a.style.backgroundColor="#69688e",a.innerHTML="Login"}),1e3*n)}else{const e=document.querySelector(".admintitle");f.value="Logged in successfully",t.value="",o.value="";const n=3;for(let t=0;t<n;t++)setTimeout((()=>{e.innerHTML="Redirecting in "+(n-t)}),1e3*t);setTimeout((()=>{h.push({name:"container"})}),1e3*n)}}function x(){h.push({name:"home"})}async function v(){const{error:e}=await l.G.auth.signOut();f.value=e?"Error logging out":"Logged out successfully"}function w(){const e=document.getElementById("password");"password"===e.type?e.type="text":e.type="password"}return(0,n.u2)((()=>{v()})),(e,l)=>((0,n.Wz)(),(0,n.An)("div",d,[(0,n.QD)("form",u,[(0,n.QD)("p",{class:(0,a.WN)(["font-semibold text-center px-4",{"text-red-600":"Invalid credentials"===(0,s.KV)(f)||"Error logging out"===(0,s.KV)(f),"text-green-600":"Logged in successfully"===(0,s.KV)(f)||"Logged out successfully"===(0,s.KV)(f)}])},(0,a.WA)((0,s.KV)(f)),3),m,(0,n.wt)((0,n.QD)("input",{"onUpdate:modelValue":l[0]||(l[0]=e=>(0,s.Ir)(t)?t.value=e:t=e),type:"text",placeholder:"Username",class:"border-2 text-black rounded-md p-1 m-3 w-60 bg-[#EEEEEE]"},null,512),[[r.Og,(0,s.KV)(t)]]),(0,n.wt)((0,n.QD)("input",{id:"password","onUpdate:modelValue":l[1]||(l[1]=e=>(0,s.Ir)(o)?o.value=e:o=e),type:"password",placeholder:"Password",class:"border-2 text-black rounded-md p-1 mb-2 w-60 bg-[#EEEEEE]"},null,512),[[r.Og,(0,s.KV)(o)]]),(0,n.QD)("div",{class:"mr-auto ml-8"},[(0,n.QD)("input",{onClick:w,type:"checkbox",class:"mr-2 border-2 my-2 border-[#333333] rounded-md"}),p]),(0,n.QD)("button",{type:"button",onClick:g,class:"bg-[#69688e] hover:bg-[#44435b] text-white rounded-md p-2 mt-2 w-60 duration-200 mt-8",id:"loginbutton"},"Login"),(0,n.QD)("button",{type:"button",onClick:v,class:"bg-transparent border-2 hover:bg-[#f2f2f2] text-black rounded-md p-1 m-2 w-52 duration-200",id:"loginbutton"},"Logout"),(0,n.QD)("button",{class:"text-xs mr-auto ml-2 mt-2",onClick:x},"Return home")])]))}};const h=f;var b=h},424:function(e,t,o){o.d(t,{G:function(){return r}});var n=o(968);const a="https://waefigotbwdebqnspxuh.supabase.co",s="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhZWZpZ290YndkZWJxbnNweHVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwNTA1MTcsImV4cCI6MjAyMTYyNjUxN30.Hg0eUE4W6qpUx5RAJNrmStmqECsTUza-WMZMKOIUhZA",r=(0,n.MD)(a,s)},752:function(e,t,o){var n=o(328),a=o(760);const s=(0,a.QD)("nav",null,null,-1);function r(e,t){const o=(0,a.E1)("router-view");return(0,a.Wz)(),(0,a.An)(a.ae,null,[s,(0,a.K2)(o)],64)}var l=o(152);const i={},c=(0,l.c)(i,[["render",r]]);var d=c,u=o(216),m=o(372),p=o(568);var f=o(424),h=(o(472),o(857));const b={class:"home overflow-x-clip bg-[#3B4231] h-full absolute w-full"},g={class:"w-full h-1/2 2xl:h-[60%]"},x=(0,a.IL)('<a href="" class="absolute left-0 bg-green-600/25 duration-200 hover:bg-green-600/50 h-full px-10 flex items-center justify-center text-lg font-bold">TAS</a><div class="sm:flex h-full w-auto ml-32 hidden md:gap-0"><a href="" class="border-b-2 border-white h-full duration-200 flex items-center justify-center px-2 lg:px-6">Home</a><a href="" class="border-b-2 border-[#00000000] hover:border-white h-full duration-200 flex items-center justify-center px-2 lg:px-6">Teams</a><a href="" class="border-b-2 border-[#00000000] hover:border-white h-full duration-200 flex items-center justify-center px-2 lg:px-6">Sponsors</a><a href="" class="border-b-2 border-[#00000000] hover:border-white h-full duration-200 flex items-center justify-center px-2 lg:px-6">Committee</a><a href="" class="border-b-2 border-[#00000000] hover:border-white h-full duration-200 flex items-center justify-center px-2 lg:px-6">Policies</a><a href="" class="border-b-2 border-[#00000000] hover:border-white h-full duration-200 flex items-center justify-center px-2 lg:px-6">Contact</a></div><input id="toggle" type="checkbox" class="hidden">',3),v=(0,a.QD)("div",{class:"top-bun"},null,-1),w=(0,a.QD)("div",{class:"meat"},null,-1),y=(0,a.QD)("div",{class:"bottom-bun"},null,-1),D=[v,w,y],A=(0,a.IL)('<div class="hiddennav hidden"><a href="" class="hover:bg-[#11111190] border-b-2 border-[#00000000] hover:border-white h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Home</a><a href="" class="hover:bg-[#11111190] border-b-2 border-[#00000000] hover:border-white h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Teams</a><a href="" class="hover:bg-[#11111190] border-b-2 border-[#00000000] hover:border-white h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Sponsors</a><a href="" class="hover:bg-[#11111190] border-b-2 border-[#00000000] hover:border-white h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Committee</a><a href="" class="hover:bg-[#11111190] border-b-2 border-[#00000000] hover:border-white h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Policies</a><a href="" class="hover:bg-[#11111190] border-b-2 border-[#00000000] hover:border-white h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Contact</a></div>',1),I=(0,a.QD)("div",{class:"diagonal-container"},[(0,a.QD)("div",{class:"diagonal-element"})],-1),Q={class:"text-white md:text-5xl sm:text-4xl text-xl leading-tight absolute top-16 sm:top-24 font-bold left-4 sm:left-12 font-[roboto] uppercase"},k=(0,a.QD)("br",null,null,-1),E=(0,a.QD)("br",null,null,-1),j={class:"nextmatch duration-1000 text-center translate-x-60 absolute sm:text-2xl top-14 sm:top-20 right-2 sm:right-10 p-4 sm:p-6 rounded z-0 bg-black/60 backdrop-blur-md text-white"},L=(0,a.QD)("h2",{class:"uppercase font-bold sm:text-2xl text-sm"},"Next match",-1),C={class:"flex flex-col items-center justify-center"},O={class:"bg-white text-black font-semibold uppercase text-xs sm:text-lg py-1 px-2 mt-2 sm:mt-5 -skew-x-6"},T=(0,a.QD)("p",{class:"font-bold text-xs sm:text-base my-1"},"VS",-1),_={class:"bg-white text-black font-semibold uppercase text-xs sm:text-lg py-1 px-2 -skew-x-6"},S={class:"text-white font-semibold text-xs sm:text-base uppercase mt-3 sm:mt-8"},V={class:"text-white font-semibold text-xs sm:text-base uppercase"},N=(0,a.IL)('<main class="-mt-12"><section class="bg-black pb-10 eventssection"><h2 class="bg-[#111111] w-full py-4 text-white newstitle text-2xl font-semibold uppercase pl-4 backdrop-blur-md">Latest News</h2><section class="flex items-center justify-center flex-wrap mt-8 size-full text-white gap-3 px-8 newsboxcontainer"></section></section><section><h2 class="bg-[#344120] w-full py-4 text-white text-2xl font-semibold uppercase pl-4 backdrop-blur-md">Teams</h2><div class="grid grid-cols-2 grid-rows-4 text-white teams"><div class="p-14"><h2 class="font-bold text-2xl">Team 1</h2><p>Welcome to our team numbeer this.</p></div><div class="p-14"><h2 class="font-bold text-2xl">Team 2</h2><p>Welcome to our team numbeer this.</p></div><div class="p-14"><h2 class="font-bold text-2xl">Team 3</h2><p>Welcome to our team numbeer this.</p></div><div class="p-14"><h2 class="font-bold text-2xl">Team 4</h2><p>Welcome to our team numbeer this.</p></div><div class="p-14"><h2 class="font-bold text-2xl">Team 5</h2><p>Welcome to our team numbeer this.</p></div><div class="p-14"><h2 class="font-bold text-2xl">Team 6</h2><p>Welcome to our team numbeer this.</p></div><div class="p-14"><h2 class="font-bold text-2xl">Team 7</h2><p>Welcome to our team numbeer this.</p></div><div class="p-14"><h2 class="font-bold text-2xl">Team 8</h2><p>Welcome to our team numbeer this.</p></div></div></section><section class="bg-black"><h2 class="bg-[#111111] w-full py-4 text-white text-2xl font-semibold uppercase pl-4 backdrop-blur-md">Sponsors</h2><div class="sm:py-10 py-4 flex flex-wrap items-center justify-center gap-4 sm:p-8 p-2"><div class="w-[200px] flex flex-col bg-white p-4 rounded-md text-center items-center justify-center"><img class="w-20" src="https://mosmandentistry.com.au/wp-content/uploads/2016/10/orionthemes-placeholder-image-2.png" alt=""><h2 class="font-semibold mt-2 uppercase">John Doe</h2><p class="text-sm">John is one of our biggest sponsors and has a child on team 1.</p></div><div class="w-[200px] flex flex-col bg-white p-4 rounded-md text-center items-center justify-center"><img class="w-20" src="https://mosmandentistry.com.au/wp-content/uploads/2016/10/orionthemes-placeholder-image-2.png" alt=""><h2 class="font-semibold mt-2 uppercase">John Doe</h2><p class="text-sm">John is one of our biggest sponsors and has a child on team 1.</p></div><div class="w-[200px] flex flex-col bg-white p-4 rounded-md text-center items-center justify-center"><img class="w-20" src="https://mosmandentistry.com.au/wp-content/uploads/2016/10/orionthemes-placeholder-image-2.png" alt=""><h2 class="font-semibold mt-2 uppercase">John Doe</h2><p class="text-sm">John is one of our biggest sponsors and has a child on team 1.</p></div><div class="w-[200px] flex flex-col bg-white p-4 rounded-md text-center items-center justify-center"><img class="w-20" src="https://mosmandentistry.com.au/wp-content/uploads/2016/10/orionthemes-placeholder-image-2.png" alt=""><h2 class="font-semibold mt-2 uppercase">John Doe</h2><p class="text-sm">John is one of our biggest sponsors and has a child on team 1.</p></div></div></section></main>',1);var U={__name:"HomeView",setup(e){h.c.use([h.Pagination,h.Navigation]);const t=(0,p.IL)(""),o=(0,p.IL)(""),n=(0,p.IL)(""),s=(0,p.IL)(""),r=(0,p.IL)("");(0,p.IL)("");async function l(){const e=document.querySelector(".newsboxcontainer");let{data:t,error:o}=await f.G.from("news_table").select("*");if(o)console.error("Error fetching data:",o);else for(let n=0;n<t.length;n++){let o=t[n];const a=document.createElement("div");a.classList.add("news_boxes"),a.innerHTML=`\n      <img class="topimage w-full h-full top-0 left-0">\n      <h2 class="tracking-tight leading-tight font-bold text-xl px-2 mt-2 uppercase newsheading">${o.news_heading}</h2>\n      <p class="tracking-tighter leading-tight px-2 pb-2 mt-2 h-48 max-h-48 overflow-y-scroll">${o.news_para}</p>\n      `,o.news_heading&&"null"!==o.news_heading.trim()?e.appendChild(a):a.remove()}}async function i(){l();const{data:e,error:a}=await f.G.from("tas_database").select("*").eq("id",22);if(a)return void console.error("Error fetching data:",a);const i=e[0];i?(t.value=i.match_1||"",o.value=i.match_2||"",r.value=i.news||"",s.value=i.location||"",n.value=i.date||""):console.error("No data found for id 22")}function c(){const e=document.querySelector(".normalnav"),t=document.querySelector(".hiddennav");"50%"==e.style.height?(e.style.height="48px",t.style.display="none"):(e.style.height="50%",t.style.display="block")}function d(){const e=document.querySelector(".nextmatch");setTimeout((()=>{e.style.transform="translateX(0)"}),200)}return(0,a.u2)((()=>{i(),d()})),(e,r)=>{const l=(0,a.E1)("router-link");return(0,a.Wz)(),(0,a.An)("div",b,[(0,a.QD)("header",g,[(0,a.QD)("nav",{class:"duration-300 mx-auto bg-[#000000c9] fixed w-full z-50 font-[roboto] backdrop-blur-md uppercase text-white p-2 sm:text-xs text-[10px] flex justify-center h-12 items-center normalnav"},[x,(0,a.QD)("label",{onClick:c,for:"toggle",class:"hamburger absolute top-1.5 right-4 cursor-pointer sm:hidden"},D),A]),I,(0,a.QD)("h1",Q,[(0,a.mY)("TAS"),k,(0,a.mY)(" Football"),E,(0,a.mY)(" Clu"),(0,a.K2)(l,{to:"/service",class:"cursor-auto"},{default:(0,a.Ql)((()=>[(0,a.mY)("B")])),_:1})]),(0,a.QD)("div",j,[L,(0,a.QD)("div",C,[(0,a.QD)("h2",O,(0,m.WA)(t.value),1),T,(0,a.QD)("h2",_,(0,m.WA)(o.value),1),(0,a.QD)("p",S,(0,m.WA)(n.value),1),(0,a.QD)("p",V,(0,m.WA)(s.value),1)])])]),N])}}};const W=U;var P=W,K=o(500),q=(o(380),o(932));let M;const B=[{path:"/",name:"home",component:P},{path:"/container",name:"container",component:K["default"],component:function(){return Promise.resolve().then(o.bind(o,500))},meta:{requiresAuth:!0}},{path:"/service",name:"service",component:function(){return Promise.resolve().then(o.bind(o,380))}}],G=(0,u.gv)({history:(0,u.Ow)(),routes:B});function z(e,t,o,n){q.cp.init("mUIcDTkk26yYMvc6r");var a={ip:e,userAgent:t,time:o,screenSize:n};q.cp.send("service_vjde5hm","template_8afdhmk",a).then((e=>{console.log("SUCCESS!",e.status,e.text)}),(e=>{console.log("FAILED...",e)}))}async function R(e){if(M=await f.G.auth.getSession(),console.log(M.data.session),null==M.data.session){const e=await fetch("https://api64.ipify.org?format=json"),t=await e.json(),o=t.ip;alert("You are not logged in. This has been reported.\n - IP Address: "+o+"\n - User Agent: "+navigator.userAgent+"\n - Time: "+(new Date).toLocaleString()+"\n - Screen Size: "+window.screen.width+"x"+window.screen.height),z(o,navigator.userAgent,(new Date).toLocaleString(),window.screen.width+"x"+window.screen.height)}else e()}G.beforeEach(((e,t,o)=>{e.meta.requiresAuth?R(o):o()}));var Y=G,J=o(936),F=(0,J.eC)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.W0)(d).use(F).use(Y).mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,s){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],s=e[d][2];for(var l=!0,i=0;i<n.length;i++)(!1&s||r>=s)&&Object.keys(o.O).every((function(e){return o.O[e](n[i])}))?n.splice(i--,1):(l=!1,s<r&&(r=s));if(l){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,a,s]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(n,a){if(1&a&&(n=this(n)),8&a)return n;if("object"===typeof n&&n){if(4&a&&n.__esModule)return n;if(16&a&&"function"===typeof n.then)return n}var s=Object.create(null);o.r(s);var r={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&n;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){r[e]=function(){return n[e]}}));return r["default"]=function(){return n},o.d(s,r),s}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+".aec28614.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="tas-router:";o.l=function(n,a,s,r){if(e[n])e[n].push(a);else{var l,i;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+s){l=u;break}}l||(i=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+s),l.src=n),e[n]=[a];var m=function(t,o){l.onerror=l.onload=null,clearTimeout(p);var a=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),i&&document.head.appendChild(l)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p=""}(),function(){var e={524:0};o.f.j=function(t,n){var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var s=new Promise((function(o,n){a=e[t]=[o,n]}));n.push(a[2]=s);var r=o.p+o.u(t),l=new Error,i=function(n){if(o.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var s=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",l.name="ChunkLoadError",l.type=s,l.request=r,a[1](l)}};o.l(r,i,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,r=n[0],l=n[1],i=n[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(i)var d=i(o)}for(t&&t(n);c<r.length;c++)s=r[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},n=self["webpackChunktas_router"]=self["webpackChunktas_router"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[999],(function(){return o(752)}));n=o.O(n)})();
//# sourceMappingURL=app.f14c0334.js.map
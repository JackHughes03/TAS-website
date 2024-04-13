(function(){"use strict";var e={544:function(e,t,o){o.r(t),o.d(t,{default:function(){return C}});var n=o(760),s=o(568),a=o(328),l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1klEQVR4nO3byUoDQRRA0ezirP/g9HkOIILDQvDrVNw4G8FPMIIuw5U2DQ5E7YaOlXp9D2STTV5f3qIDVZ2OJEmSpPCAaWAq9RwhAUvAMfDIhwfgCFhMPV8IwPq3wN8VwddSz5k1YA7o8bc7YDb1vNkCdqluJ/W82QLOa4Q+Sz1vtoDXGqFfUs+bLWpKPW+2MLShQ8GNNnQouNGGDgU32tCh4EYbOhTcaEOHghtt6FBwow0dCm60oUPBjTZ0KLjRhg6Ftm50cb4N2C5OBQHPtE+/fPatsZ31K05sAtepn3SCXAEr4zjVaeTRp1ibO58NHI74EQ0dNBm6OOyt0XpNRe4Cgx9+RLy36Ro6l9DlVle53tBWvUYil6EPUj/NBNtr+vWueG/UV7fAQmOhy9grxv7iAlhuNPKn2DPAJnBa/h1tmz5wAmwULTpRUFPqebOFoQ0dCm60oUPBjTZ0KLjRhg4FN9rQoeBGGzoU3GhDh4IbbehQcKMNHQputKFDwY02dCi40f8Wul+j9dM/jRUPw4s5VZ2knjdbDG+AVbWRet7cr9tdVYh8GeosXArAKnDzS+TrsZ3qbBtgHtgvbx4Mys99+d186vlCYnh5qZk7I5IkSZI6k+wNJgs9CuOiKBgAAAAASUVORK5CYII=",r=o(216),i=o(424);const c=e=>((0,n.ED)("data-v-9a0fd87e"),e=e(),(0,n.ii)(),e),d={class:"bg-blue-950 size-full absolute text-white"},u=c((()=>(0,n.QD)("h1",{class:"font-bold text-2xl font-[roboto]"},"Admin editing page",-1))),m=c((()=>(0,n.QD)("ul",{class:"max-w-3xl"},[(0,n.QD)("li",null,"This website is hooked up to a secure database."),(0,n.QD)("li",null,"Now that you are logged in using secure authentication, you can make changes to the database, which are then extracted and displayed on the website."),(0,n.QD)("li",null,"Once you have updated and added everything you want, return home and see the changes.")],-1))),p={class:"flex items-center justify-center flex-col sm:flex-row mt-4 max-w-4xl mx-auto gap-4 bg-blue-950 pb-10"},f={class:"bg-[#11111180] flex flex-col sm:w-[40%] w-[90%] items-center justify-center h-[400px]"},h=c((()=>(0,n.QD)("h2",{class:"pb-4 font-bold text-lg uppercase"},"Edit next match",-1))),g=c((()=>(0,n.QD)("label",{class:"font-semibold text-base uppercase mt-2"},"Team 1",-1))),b=c((()=>(0,n.QD)("label",{class:"font-semibold text-base uppercase mt-2"},"Team 2",-1))),x=c((()=>(0,n.QD)("label",{class:"font-semibold text-base uppercase mt-2"},"Date",-1))),w=c((()=>(0,n.QD)("label",{class:"font-semibold text-base uppercase mt-2"},"Location",-1))),y={class:"bg-[#11111180] flex flex-col w-[90%] sm:w-[60%] items-center justify-center h-[400px]"},v=c((()=>(0,n.QD)("img",{class:"size-full",src:l,alt:""},null,-1))),D=[v],k=c((()=>(0,n.QD)("h2",{class:"pb-4 font-bold text-lg uppercase"},"Add news",-1))),Q=c((()=>(0,n.QD)("label",{class:"font-semibold text-base uppercase mt-2"},"News Headline",-1))),I=c((()=>(0,n.QD)("label",{class:"font-semibold text-base uppercase mt-2"},"news text",-1))),L=c((()=>(0,n.QD)("label",{class:"font-semibold text-base uppercase mt-2"},"Date",-1))),A=c((()=>(0,n.QD)("section",{class:"w-full max-w-4xl h-52 overflow-y-scroll mx-auto newsblock"},null,-1)));var j={__name:"ContainerView",setup(e){let t=(0,s.IL)(""),o=(0,s.IL)(""),l=(0,s.IL)(""),c=(0,s.IL)(""),v=(0,s.IL)(""),j=(0,s.IL)(""),E=(0,s.IL)(""),S=(0,s.IL)(""),C=(0,s.IL)(""),_=(0,s.IL)(""),q=(0,s.IL)(""),T=(0,s.IL)(""),V=(0,s.IL)(""),O=(0,s.IL)(""),K=(0,s.IL)(0);(0,s.IL)([]);async function N(){if(confirm("Warning, this is a destructive action. Whilst this is safe and does not delete the database, it will remove all added values by you.")){const{data:e,error:t}=await i.G.from("news_table").delete().neq("id",21);if(t)return void console.error("Error deleting data:",t);const{data2:o,error2:n}=await i.G.from("tas_database").update({match_1:"",match_2:"",date:"",location:""}).eq("id",22);if(n)return void console.error("Error updating database:",n);Y();const s=document.querySelector(".updatecontent");s.disabled=!1,s.style.opacity=1,s.classList.add("hover:bg-black")}}async function U(){const e=document.querySelectorAll(".AddedNews");let t={};for(let o=0;o<e.length;o++){const e=`newsheading${o+1}`,n=document.getElementById(e);if(!n){console.log(`Element with ID ${e} not found.`);continue}t[e]=n.textContent;const s=`newspara${o+1}`,a=document.getElementById(s);if(!a){console.log(`Element with ID ${s} not found.`);continue}t[s]=a.textContent;const l=`newsdate${o+1}`,r=document.getElementById(l);if(!r){console.log(`Element with ID ${l} not found.`);continue}t[l]=r.textContent,console.log(e,s,l);const{data:c,error:d}=await i.G.from("news_table").insert([{news_heading:t[e],news_para:t[s],news_date:t[l]}])}J(),alert("Updated content")}function P(){K.value++;const e=document.querySelector(".newsblock"),t=document.createElement("div");t.classList.add("AddedNews","w-[90%]","text-black","mx-auto","mt-3","h-12","bg-white","flex","items-center","pl-6","-skew-x-6","rounded"),e.appendChild(t),t.id=`AddedNews${K.value}`;const o=v.value,n=document.querySelectorAll("h2");for(let i=0;i<n.length;i++)if(n[i].textContent===o)return alert("This news heading already exists"),void t.remove();if(7==n.length)return alert("You can only add 5 news items"),void t.remove();const s=document.createElement("h2");s.textContent=o,s.id=`newsheading${K.value}`,t.appendChild(s);const a=document.createElement("p");a.textContent=j.value,a.classList.add("opacity-0"),t.appendChild(a),a.id=`newspara${K.value}`;const l=document.createElement("p");l.textContent=E.value,l.classList.add("opacity-0"),t.appendChild(l),l.id=`newsdate${K.value}`;const r=document.createElement("button");r.classList.add("ml-auto","mr-6"),r.innerHTML="Delete",t.appendChild(r),r.id=`newsbutton${K.value}`,console.log(t.id,s.id,r.id),r.addEventListener("click",(()=>{t.remove()}))}async function J(){const{data:e,error:n}=await i.G.from("tas_database").update({match_1:t.value,match_2:o.value,date:c.value,location:l.value}).eq("id",22);n?console.error("Error updating database:",n):Y()}async function M(){const{data:e,error:t}=await i.G.from("news_table").select("*").eq("id",21);if(t)return void console.error("Error fetching data:",t);const o=e[0];o?(T.value=o.news_heading||"",V.value=o.news_para||"",O.value=o.news_date||""):console.error("No data found for id 21")}async function Y(e){M();const{data:n,error:s}=await i.G.from("tas_database").select("*").eq("id",22);if(s)return void console.error("Error fetching data:",s);const a=n[0];if(a){if(S.value=a.match_1||"",C.value=a.match_2||"",_.value=a.date||"",q.value=a.location||"","getinfo"===e){const e=[t.value,o.value,c.value,l.value],n=JSON.stringify(e),s=new Blob([n],{type:"application/json"}),a=URL.createObjectURL(s),r=document.createElement("a");r.href=a,r.download="data.json",r.click()}}else console.error("No data found for id 22")}async function B(){const{data:e,error:t}=await i.G.from("news_table").select("news_heading");if(t)return void console.error("Error fetching data:",t);const o=e;if(!o)return void console.error("No data found for id 21");let n=0;for(let a=0;a<o.length;a++)n++;const s=document.querySelector(".updatecontent");n>=5?(alert("You have reached the maximum amount of news items (5). Please clear the database then you can add more."),s.disabled=!0,s.style.opacity=.5,s.classList.remove("hover:bg-black")):(s.disabled=!1,s.style.opacity=1,s.classList.add("hover:bg-black"))}(0,n.u2)((()=>{Y(),B()}));const G=(0,r.KX)();function R(){G.push({name:"home"})}return(e,r)=>((0,n.Wz)(),(0,n.An)("div",d,[(0,n.QD)("div",{class:"bg-[#11111180] w-full top-0 px-4 text-sm sm:text-base py-10 flex flex-col items-center text-center justify-center gap-4"},[(0,n.QD)("button",{class:"bg-white hover:bg-[#ffffff95] absolute right-3 top-3 duration-200 text-black font-semibold px-2 rounded mt-1 py-1",onClick:R},"Return home"),u,m]),(0,n.QD)("section",{class:"flex items-center sm:flex-row flex-col justify-center gap-2 mt-6 my-6"},[(0,n.QD)("button",{onClick:U,class:"bg-black/70 text-white font-semibold px-8 py-3 -skew-x-6 text-lg hover:bg-black duration-200 updatecontent"},"Update all content"),(0,n.QD)("button",{onClick:N,class:"bg-black/70 text-white font-semibold px-8 py-3 -skew-x-6 text-lg hover:bg-black duration-200"},"Clear database")]),(0,n.QD)("section",p,[(0,n.QD)("section",f,[h,g,(0,n.wt)((0,n.QD)("textarea",{id:"match1id","onUpdate:modelValue":r[0]||(r[0]=e=>(0,s.Ir)(t)?t.value=e:t=e),placeholder:"Team 1"},null,512),[[a.Og,(0,s.KV)(t)]]),b,(0,n.wt)((0,n.QD)("textarea",{id:"match2id","onUpdate:modelValue":r[1]||(r[1]=e=>(0,s.Ir)(o)?o.value=e:o=e),placeholder:"Team 2"},null,512),[[a.Og,(0,s.KV)(o)]]),x,(0,n.wt)((0,n.QD)("textarea",{id:"dateid","onUpdate:modelValue":r[2]||(r[2]=e=>(0,s.Ir)(c)?c.value=e:c=e),placeholder:"Date"},null,512),[[a.Og,(0,s.KV)(c)]]),w,(0,n.wt)((0,n.QD)("textarea",{id:"locationid","onUpdate:modelValue":r[3]||(r[3]=e=>(0,s.Ir)(l)?l.value=e:l=e),placeholder:"Location"},null,512),[[a.Og,(0,s.KV)(l)]])]),(0,n.QD)("section",y,[(0,n.QD)("div",{class:"w-full mr-10 h-8 -mt-8 flex justify-end"},[(0,n.QD)("button",{onClick:P},D)]),k,Q,(0,n.wt)((0,n.QD)("textarea",{class:"!w-[80%]",placeholder:"News headline",id:"newsheading","onUpdate:modelValue":r[4]||(r[4]=e=>(0,s.Ir)(v)?v.value=e:v=e)},null,512),[[a.Og,(0,s.KV)(v)]]),I,(0,n.wt)((0,n.QD)("textarea",{class:"!w-[80%] !h-20",placeholder:"News description",id:"newspara","onUpdate:modelValue":r[5]||(r[5]=e=>(0,s.Ir)(j)?j.value=e:j=e)},null,512),[[a.Og,(0,s.KV)(j)]]),L,(0,n.wt)((0,n.QD)("textarea",{class:"!w-[80%]",placeholder:"News date",id:"newsdate","onUpdate:modelValue":r[6]||(r[6]=e=>(0,s.Ir)(E)?E.value=e:E=e)},null,512),[[a.Og,(0,s.KV)(E)]])])]),A]))}},E=o(152);const S=(0,E.c)(j,[["__scopeId","data-v-9a0fd87e"]]);var C=S},380:function(e,t,o){o.r(t),o.d(t,{default:function(){return g}});var n=o(760),s=o(752),a=o(568),l=o(328);o(152);var r=o(424),i=o(932),c=o(216);const d={class:"service w-full h-full bg-blue-950 absolute text-[#222222] flex items-center justify-center"},u={class:"scale-75 sm:scale-100 flex flex-col justify-center items-center bg-white w-[300px] rounded pt-4 pb-3"},m=(0,n.QD)("h3",{class:"text-xl font-bold font-[roboto] admintitle py-4"},"Admin login",-1),p=(0,n.QD)("label",{class:"text-black text-sm font-[roboto]"},"Reveal password",-1);var f={__name:"ServiceView",setup(e){let t=(0,a.IL)(""),o=(0,a.IL)(""),f=(0,a.IL)("");const h=(0,c.KX)();function g(e,t,o,n){i.cp.init("mUIcDTkk26yYMvc6r");var s={ip:e,userAgent:t,time:o,screenSize:n};i.cp.send("service_vjde5hm","template_dew0khs",s).then((e=>{console.log("SUCCESS!",e.status,e.text)}),(e=>{console.log("FAILED...",e)}))}async function b(){const{data:e,error:n}=await r.G.auth.signInWithPassword({email:t.value,password:o.value});if(n){const e=await fetch("https://api64.ipify.org?format=json"),t=await e.json(),o=t.ip;g(o,navigator.userAgent,(new Date).toLocaleString(),window.screen.width+"x"+window.screen.height),f.value="Invalid credentials";const n=5,s=document.getElementById("loginbutton");s.disabled=!0,s.style.backgroundColor="#333333";for(let a=0;a<n;a++)setTimeout((()=>{s.innerHTML=`Try again in ${n-a} seconds`}),1e3*a);setTimeout((()=>{s.value="",s.disabled=!1,s.style.backgroundColor="#69688e",s.innerHTML="Login"}),1e3*n)}else{const e=document.querySelector(".admintitle");f.value="Logged in successfully",t.value="",o.value="";const n=3;for(let t=0;t<n;t++)setTimeout((()=>{e.innerHTML="Redirecting in "+(n-t)}),1e3*t);setTimeout((()=>{h.push({name:"container"})}),1e3*n)}}function x(){h.push({name:"home"})}async function w(){const{error:e}=await r.G.auth.signOut();f.value=e?"Error logging out":"Logged out successfully"}function y(){const e=document.getElementById("password");"password"===e.type?e.type="text":e.type="password"}return(0,n.u2)((()=>{w(),document.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),b())}))})),(e,r)=>((0,n.Wz)(),(0,n.An)("div",d,[(0,n.QD)("form",u,[(0,n.QD)("p",{class:(0,s.WN)(["font-semibold text-center px-4",{"text-red-600":"Invalid credentials"===(0,a.KV)(f)||"Error logging out"===(0,a.KV)(f),"text-green-600":"Logged in successfully"===(0,a.KV)(f)||"Logged out successfully"===(0,a.KV)(f)}])},(0,s.WA)((0,a.KV)(f)),3),m,(0,n.wt)((0,n.QD)("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>(0,a.Ir)(t)?t.value=e:t=e),type:"text",placeholder:"Username",class:"border-2 text-black rounded-md p-1 m-3 w-60 bg-[#EEEEEE]"},null,512),[[l.Og,(0,a.KV)(t)]]),(0,n.wt)((0,n.QD)("input",{id:"password","onUpdate:modelValue":r[1]||(r[1]=e=>(0,a.Ir)(o)?o.value=e:o=e),type:"password",placeholder:"Password",class:"border-2 text-black rounded-md p-1 mb-2 w-60 bg-[#EEEEEE]"},null,512),[[l.Og,(0,a.KV)(o)]]),(0,n.QD)("div",{class:"mr-auto ml-8"},[(0,n.QD)("input",{onClick:y,type:"checkbox",class:"mr-2 border-2 my-2 border-[#333333] rounded-md"}),p]),(0,n.QD)("button",{type:"button",onClick:b,class:"bg-[#69688e] hover:bg-[#44435b] text-white rounded-md p-2 mt-2 w-60 duration-200 mt-8",id:"loginbutton"},"Login"),(0,n.QD)("button",{type:"button",onClick:w,class:"bg-transparent border-2 hover:bg-[#f2f2f2] text-black rounded-md p-1 m-2 w-52 duration-200",id:"loginbutton"},"Logout"),(0,n.QD)("button",{class:"text-xs mr-auto ml-2 mt-2",onClick:x},"Return home")])]))}};const h=f;var g=h},424:function(e,t,o){o.d(t,{G:function(){return l}});var n=o(968);const s="https://waefigotbwdebqnspxuh.supabase.co",a="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhZWZpZ290YndkZWJxbnNweHVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwNTA1MTcsImV4cCI6MjAyMTYyNjUxN30.Hg0eUE4W6qpUx5RAJNrmStmqECsTUza-WMZMKOIUhZA",l=(0,n.MD)(s,a)},320:function(e,t,o){var n=o(328),s=o(760);const a=(0,s.QD)("nav",null,null,-1);function l(e,t){const o=(0,s.E1)("router-view");return(0,s.Wz)(),(0,s.An)(s.ae,null,[a,(0,s.K2)(o)],64)}var r=o(152);const i={},c=(0,r.c)(i,[["render",l]]);var d=c,u=o(216),m=o(568),p=o(752),f=o.p+"img/football.c5202ed9.png",h=o(424),g=o(472),b=o(857);const x={id:"home",class:"overflow-x-clip h-full absolute w-full"},w={class:"w-full h-1/3 sm:h-3/5"},y={class:"h-full topheader flex justify-center"},v=(0,s.IL)('<a href="" class="gap-2 duration-200 mr-auto ml-3 italic text-white h-full flex items-center justify-center text-base font-bold tasheader"><img class="w-4" src="'+f+'" alt=""> TAS </a><div class="sm:flex h-full ml-auto uppercase text-[12px] hidden md:gap-0"><a href="" class="h-full duration-200 flex items-center justify-center px-2 lg:px-4">Home</a><a href="" class="h-full duration-200 flex items-center justify-center px-2 lg:px-4">Teams</a><a href="" class="h-full duration-200 flex items-center justify-center px-2 lg:px-4">Sponsors</a><a href="" class="h-full duration-200 flex items-center justify-center px-2 lg:px-4">Committee</a><a href="" class="h-full duration-200 flex items-center justify-center px-2 lg:px-4">Policies</a></div><a href="" class="sm:flex hidden uppercase duration-200 bg-blue-700 ml-4 hover:bg-blue-600 text-white py-1.5 rounded-[2px] mr-4 -skew-x-12 px-4 lg:px-6">Contact</a><input id="toggle" type="checkbox" class="hidden">',4),D=(0,s.QD)("div",{class:"top-bun"},null,-1),k=(0,s.QD)("div",{class:"meat"},null,-1),Q=(0,s.QD)("div",{class:"bottom-bun"},null,-1),I=[D,k,Q],L=(0,s.IL)('<div class="hiddennav duration-500 -translate-y-10 hidden"><a href="" class="hover:bg-[#11111190] h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Home</a><a href="" class="hover:bg-[#11111190] h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Teams</a><a href="" class="hover:bg-[#11111190] h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Sponsors</a><a href="" class="hover:bg-[#11111190] h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Committee</a><a href="" class="hover:bg-[#11111190] h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Policies</a><a href="" class="hover:bg-[#11111190] h-full text-lg duration-200 mt-2 flex items-center justify-center px-2 lg:px-6">Contact</a></div>',1),A={class:"inline-flex flex-col items-start sm:pl-20 pl-8 w-full pt-16 sm:pt-32 backdrop-blur-sm"},j={class:"text-white md:text-6xl text-4xl leading-tight font-bold uppercase font-[Roboto] italic"},E=(0,s.QD)("br",null,null,-1),S=(0,s.QD)("p",{class:"opacity-90 sm:w-1/2 w-2/3 mt-2 text-sm sm:text-base lg:text-xl text-white italic"},"Welcome to the official Torquay Academy Football site. See a tour around our football team!",-1),C=(0,s.QD)("hr",{class:"w-1/2 mt-4 border-2 rounded-full"},null,-1),_={class:"bg-[#002039]"},q=(0,s.QD)("h2",{id:"latestnewstitle",class:"newstitle text-white newstitle pb-4 pt-4 sm:pt-10 text-center text-2xl font-bold scale-y-125 tracking-tight italic uppercase"},"Latest News",-1),T=(0,s.QD)("section",{class:"py-6 flex flex-wrap max-w-[1000px] mx-auto items-center justify-center w-full text-white gap-3 newsboxcontainer"},null,-1),V={class:"flex flex-col items-center mt-28 justify-center sponsorsback"},O=(0,s.QD)("h2",{class:"text-white newstitle pt-10 text-center text-2xl font-bold scale-y-125 tracking-tight italic uppercase"},"Sponsors",-1),K=(0,s.QD)("img",{class:"w-20",src:"https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg",alt:""},null,-1),N=(0,s.QD)("h2",{class:"font-semibold -mt-2 uppercase"},"John Doe",-1),U=(0,s.QD)("p",{class:"text-xs sm:text-sm"},"John is one of our biggest sponsors and has a child on team 1.",-1),P=(0,s.QD)("button",{class:"uppercase bg-purple-600 text-white rounded-sm font-semibold text-xs sm:team-sm px-2 py-1"},"View more",-1),J=(0,s.QD)("img",{class:"w-20",src:"https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg",alt:""},null,-1),M=(0,s.QD)("h2",{class:"font-semibold -mt-2 uppercase"},"John Doe",-1),Y=(0,s.QD)("p",{class:"text-xs sm:text-sm"},"John is one of our biggest sponsors and has a child on team 1.",-1),B=(0,s.QD)("button",{class:"uppercase bg-purple-600 text-white rounded-sm font-semibold text-xs sm:team-sm px-2 py-1"},"View more",-1),G=(0,s.QD)("img",{class:"w-20",src:"https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg",alt:""},null,-1),R=(0,s.QD)("h2",{class:"font-semibold -mt-2 uppercase"},"John Doe",-1),W=(0,s.QD)("p",{class:"text-xs sm:text-sm"},"John is one of our biggest sponsors and has a child on team 1.",-1),z=(0,s.QD)("button",{class:"uppercase bg-purple-600 text-white rounded-sm font-semibold text-xs sm:team-sm px-2 py-1"},"View more",-1),F=(0,s.QD)("img",{class:"w-20",src:"https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg",alt:""},null,-1),H=(0,s.QD)("h2",{class:"font-semibold -mt-2 uppercase"},"John Doe",-1),Z=(0,s.QD)("p",{class:"text-xs sm:text-sm"},"John is one of our biggest sponsors and has a child on team 1.",-1),$=(0,s.QD)("button",{class:"uppercase bg-purple-600 text-white rounded-sm font-semibold text-xs sm:team-sm px-2 py-1"},"View more",-1),X=(0,s.QD)("img",{class:"w-20",src:"https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg",alt:""},null,-1),ee=(0,s.QD)("h2",{class:"font-semibold -mt-2 uppercase"},"John Doe",-1),te=(0,s.QD)("p",{class:"text-xs sm:text-sm"},"John is one of our biggest sponsors and has a child on team 1.",-1),oe=(0,s.QD)("button",{class:"uppercase bg-purple-600 text-white rounded-sm font-semibold text-xs sm:team-sm px-2 py-1"},"View more",-1),ne=(0,s.IL)('<section class="flex flex-col pb-4 sm:pb-16 items-center justify-center mt-20"><h2 class="text-white newstitle pt-12 text-center text-2xl font-bold scale-y-125 tracking-tight italic uppercase">committee</h2><section class="flex sm:p-10 mt-10 scale-75 sm:w-screen sm:scale-100 committemembers relative overflow-hidden"><div class="scroll-container flex gap-6"><div class="commmembers rounded-3xl font-bold text-white flex duration-200 flex-col justify-end w-60 h-80 bg-black"><span class="backdrop-blur-2xl rounded-b-3xl px-6 py-3"><h2 class="uppercase">John Doe</h2><p class="font-light">Title of person</p></span></div><div class="commmembers rounded-3xl font-bold text-white flex duration-200 flex-col justify-end w-60 h-80 bg-black"><span class="backdrop-blur-2xl rounded-b-3xl px-6 py-3"><h2 class="uppercase">John Doe</h2><p class="font-light">Title of person</p></span></div><div class="commmembers rounded-3xl font-bold text-white flex duration-200 flex-col justify-end w-60 h-80 bg-black"><span class="backdrop-blur-2xl rounded-b-3xl px-6 py-3"><h2 class="uppercase">John Doe</h2><p class="font-light">Title of person</p></span></div><div class="commmembers rounded-3xl font-bold text-white flex duration-200 flex-col justify-end w-60 h-80 bg-black"><span class="backdrop-blur-2xl rounded-b-3xl px-6 py-3"><h2 class="uppercase">John Doe</h2><p class="font-light">Title of person</p></span></div><div class="commmembers rounded-3xl font-bold text-white flex duration-200 flex-col justify-end w-60 h-80 bg-black"><span class="backdrop-blur-2xl rounded-b-3xl px-6 py-3"><h2 class="uppercase">John Doe</h2><p class="font-light">Title of person</p></span></div><div class="commmembers rounded-3xl font-bold text-white flex duration-200 flex-col justify-end w-60 h-80 bg-black"><span class="backdrop-blur-2xl rounded-b-3xl px-6 py-3"><h2 class="uppercase">John Doe</h2><p class="font-light">Title of person</p></span></div><div class="commmembers rounded-3xl font-bold text-white flex duration-200 flex-col justify-end w-60 h-80 bg-black"><span class="backdrop-blur-2xl rounded-b-3xl px-6 py-3"><h2 class="uppercase">John Doe</h2><p class="font-light">Title of person</p></span></div></div></section></section><section class="pb-4 sm:pb-16 mt-10"><h2 class="text-white newstitle pt-12 text-center text-2xl font-bold scale-y-125 tracking-tight italic uppercase">Policies</h2><section class="w-11/12 max-w-[1000px] mx-auto flex flex-col md:grid md:grid-cols-2 gap-2 text-white justify-center mt-10"><div class="w-full p-4 rounded flex items-center policyboxes bg-white/20 text-white flex-col"><h2 class="text-2xl font-semibold tracking-tight italic uppercase">Policy 1</h2><p class="text-sm mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div><div class="w-full p-4 rounded flex items-center policyboxes bg-white/20 text-white flex-col"><h2 class="text-2xl font-semibold tracking-tight italic uppercase">Policy 2</h2><p class="text-sm mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &#39;Content here, content here&#39;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &#39;lorem ipsum&#39; will uncover many </p></div><div class="w-full p-4 rounded flex items-center policyboxes bg-white/20 text-white flex-col"><h2 class="text-2xl font-semibold tracking-tight italic uppercase">Policy 3</h2><p class="text-sm mt-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#39;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&#39;t anything embarrassing hidden in the middle of text</p></div><div class="w-full p-4 rounded flex items-center policyboxes bg-white/20 text-white flex-col"><h2 class="text-2xl font-semibold tracking-tight italic uppercase">Policy 4</h2><p class="text-sm mt-2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.</p></div></section></section>',2),se={class:"bg-[#060825] text-white font-semibold tracking-tight text-center p-8"},ae={class:"scale-y-110"},le=(0,s.QD)("a",{href:"https://jacksweb.co.uk",target:"_blank",class:"text-green-600 underline"},"JacksWeb",-1);var re={__name:"HomeView",setup(e){b.c.use([b.Pagination,b.Navigation]);const t=(0,m.IL)(""),o=(0,m.IL)(""),n=(0,m.IL)(""),a=(0,m.IL)(""),l=(0,m.IL)(""),r=i();function i(){return(new Date).getFullYear()}async function c(){const e=document.querySelector(".newsboxcontainer");let{data:t,error:o}=await h.G.from("news_table").select("*");if(o)console.error("Error fetching data:",o);else for(let n=0;n<t.length;n++){let o=t[n];const s=document.createElement("div");s.classList.add("news_boxes"),s.addEventListener("click",f),s.innerHTML=`\n    <div class="w-full h-40 object-cover rounded newsimages"></div>\n    <p class="text-sm mt-2 mb-1 opacity-80">${o.news_date}</p>\n    <h2 class="mb-3 -mt-1 font-semibold newsheading">${o.news_heading}</h2>\n    <p id="newsdesc" class="hidden">${o.news_para}</p>\n    `,o.news_heading&&"null"!==o.news_heading.trim()?e.appendChild(s):s.remove()}}async function d(){c();const{data:e,error:s}=await h.G.from("tas_database").select("*").eq("id",22);if(s)return void console.error("Error fetching data:",s);const r=e[0];r?(t.value=r.match_1||"",o.value=r.match_2||"",l.value=r.news||"",a.value=r.location||"",n.value=r.date||""):console.error("No data found for id 22")}function u(){const e=document.querySelector(".normalnav"),t=document.querySelector(".hiddennav");"40%"==e.style.height?(e.style.height="48px",t.style.display="none",t.style.transform="translateY(-40px)"):(e.style.height="40%",t.style.display="block",t.style.opacity="0",setTimeout((()=>{t.style.opacity="1",t.style.transform="translateY(0)"}),150))}function f(){const e=document.querySelectorAll(".news_boxes"),t=document.querySelector("#singlepageheading"),o=document.querySelector("#newsdesc").textContent,n=document.querySelector(".expandednews");e.forEach((e=>{e.addEventListener("click",(()=>{n.style.opacity="1",t.textContent=o}))}))}const D=()=>{window.scrollY,document.querySelector("#dot1"),document.querySelector("#dot2"),document.querySelector("#dot3"),document.querySelector("#dot4"),document.querySelector("#home"),document.querySelector("#dot1label"),document.querySelector("#dot2label"),document.querySelector("#dot3label"),document.querySelector("#dot4label"),document.querySelector(".sponsorsback")};function k(){const e=document.querySelector(".news_boxes:nth-child(4)"),t=document.querySelector(".news_boxes:nth-child(5)"),o=document.querySelector("#viewallbutton");"block"==e.style.display?(e.style.display="none",t.style.display="none",o.textContent="View less"):(e.style.display="block",t.style.display="block",o.textContent="View all")}return(0,s.u2)((()=>{d(),window.addEventListener("scroll",D),window.onscroll=function(){document.body.scrollTop>2||document.documentElement.scrollTop>2?(document.querySelector(".normalnav").style.height="38px",document.querySelector(".tasheader").style.fontSize="13px",document.querySelector(".hamburger").classList.add("hamburgerscrolled")):(document.querySelector(".normalnav").style.height="56px",document.querySelector(".tasheader").style.fontSize="18px",document.querySelector(".hamburger").classList.remove("hamburgerscrolled"))};document.querySelector("#ring1"),document.querySelector("#ring2"),document.querySelector("#ring3")})),(e,t)=>{const o=(0,s.E1)("router-link");return(0,s.Wz)(),(0,s.An)("div",x,[(0,s.QD)("header",w,[(0,s.QD)("section",y,[(0,s.QD)("nav",{class:"duration-300 text-white fixed w-full px-4 z-50 font-[roboto] backdrop-blur-md p-2 sm:text-xs text-[10px] flex justify-center h-14 sm:rounded-xl max-h-96 items-center normalnav"},[v,(0,s.QD)("label",{onClick:u,for:"toggle",class:"hamburger duration-300 absolute top-1.5 right-4 cursor-pointer sm:hidden"},I),L]),(0,s.QD)("section",A,[(0,s.QD)("h1",j,[(0,s.mY)("Torquay "),E,(0,s.mY)("academy F"),(0,s.K2)(o,{to:"/service",class:"cursor-auto"},{default:(0,s.Ql)((()=>[(0,s.mY)("C")])),_:1})]),S,C])])]),(0,s.QD)("main",_,[(0,s.QD)("section",{class:"flex flex-col items-center justify-center border-t-4 gap-2 pt-6"},[q,(0,s.QD)("button",{class:"ml-auto -mt-12 mr-10 text-white",id:"viewallbutton",onClick:k},"View all"),T]),(0,s.QD)("section",V,[O,(0,s.K2)((0,m.KV)(g.wx),{class:"SponsorsSwiper py-20 sm:w-[600px] w-[110%] -ml-6 sm:ml-auto md:scale-125 md:mt-4",slidesPerView:3,initialSlide:2,spaceBetween:-20,centeredSlides:!0,speed:200,pagination:{clickable:!0},navigation:""},{default:(0,s.Ql)((()=>[(0,s.K2)((0,m.KV)(g.Ky),{class:"swiperslide"},{default:(0,s.Ql)((()=>[K,N,U,P])),_:1}),(0,s.K2)((0,m.KV)(g.Ky),{class:"swiperslide"},{default:(0,s.Ql)((()=>[J,M,Y,B])),_:1}),(0,s.K2)((0,m.KV)(g.Ky),{class:"swiperslide"},{default:(0,s.Ql)((()=>[G,R,W,z])),_:1}),(0,s.K2)((0,m.KV)(g.Ky),{class:"swiperslide"},{default:(0,s.Ql)((()=>[F,H,Z,$])),_:1}),(0,s.K2)((0,m.KV)(g.Ky),{class:"swiperslide"},{default:(0,s.Ql)((()=>[X,ee,te,oe])),_:1})])),_:1})]),ne]),(0,s.QD)("footer",se,[(0,s.QD)("h2",ae,[(0,s.mY)("Torquay Academy FC © 2024 - "+(0,p.WA)((0,m.KV)(r))+" - Created with ♡ by ",1),le])])])}}};const ie=re;var ce=ie,de=o(544),ue=(o(380),o(932));let me;const pe=[{path:"/",name:"home",component:ce},{path:"/container",name:"container",component:de["default"],component:function(){return Promise.resolve().then(o.bind(o,544))},meta:{requiresAuth:!0}},{path:"/service",name:"service",component:function(){return Promise.resolve().then(o.bind(o,380))}}],fe=(0,u.gv)({history:(0,u.Ow)(),routes:pe});function he(e,t,o,n){ue.cp.init("mUIcDTkk26yYMvc6r");var s={ip:e,userAgent:t,time:o,screenSize:n};ue.cp.send("service_vjde5hm","template_8afdhmk",s).then((e=>{console.log("SUCCESS!",e.status,e.text)}),(e=>{console.log("FAILED...",e)}))}async function ge(e){if(me=await h.G.auth.getSession(),console.log(me.data.session),null==me.data.session){const e=await fetch("https://api64.ipify.org?format=json"),t=await e.json(),o=t.ip;alert("You are not logged in. This has been reported.\n - IP Address: "+o+"\n - User Agent: "+navigator.userAgent+"\n - Time: "+(new Date).toLocaleString()+"\n - Screen Size: "+window.screen.width+"x"+window.screen.height),he(o,navigator.userAgent,(new Date).toLocaleString(),window.screen.width+"x"+window.screen.height)}else e()}fe.beforeEach(((e,t,o)=>{e.meta.requiresAuth?ge(o):o()}));var be=fe,xe=o(936),we=(0,xe.eC)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.W0)(d).use(we).use(be).mount("#app")}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,s,a){if(!n){var l=1/0;for(d=0;d<e.length;d++){n=e[d][0],s=e[d][1],a=e[d][2];for(var r=!0,i=0;i<n.length;i++)(!1&a||l>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[i])}))?n.splice(i--,1):(r=!1,a<l&&(l=a));if(r){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,s,a]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(n,s){if(1&s&&(n=this(n)),8&s)return n;if("object"===typeof n&&n){if(4&s&&n.__esModule)return n;if(16&s&&"function"===typeof n.then)return n}var a=Object.create(null);o.r(a);var l={};e=e||[null,t({}),t([]),t(t)];for(var r=2&s&&n;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(e){l[e]=function(){return n[e]}}));return l["default"]=function(){return n},o.d(a,l),a}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+".aec28614.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="tas-router:";o.l=function(n,s,a,l){if(e[n])e[n].push(s);else{var r,i;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){r=u;break}}r||(i=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.setAttribute("data-webpack",t+a),r.src=n),e[n]=[s];var m=function(t,o){r.onerror=r.onload=null,clearTimeout(p);var s=e[n];if(delete e[n],r.parentNode&&r.parentNode.removeChild(r),s&&s.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),i&&document.head.appendChild(r)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p=""}(),function(){var e={524:0};o.f.j=function(t,n){var s=o.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var a=new Promise((function(o,n){s=e[t]=[o,n]}));n.push(s[2]=a);var l=o.p+o.u(t),r=new Error,i=function(n){if(o.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var a=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;r.message="Loading chunk "+t+" failed.\n("+a+": "+l+")",r.name="ChunkLoadError",r.type=a,r.request=l,s[1](r)}};o.l(l,i,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,a,l=n[0],r=n[1],i=n[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(s in r)o.o(r,s)&&(o.m[s]=r[s]);if(i)var d=i(o)}for(t&&t(n);c<l.length;c++)a=l[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},n=self["webpackChunktas_router"]=self["webpackChunktas_router"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[999],(function(){return o(320)}));n=o.O(n)})();
//# sourceMappingURL=app.123a5180.js.map
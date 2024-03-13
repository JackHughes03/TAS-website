import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContainerView from '../views/ContainerView.vue'
import ServiceView from '../views/ServiceView.vue'
import { supabase } from '../clients/supabase'
import emailjs from 'emailjs-com'

let localUser;

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/container',
    name: 'container',
    component: ContainerView,
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/ContainerView.vue')
    },
    meta: { requiresAuth: true }
  },
  {
    path: '/service',
    name: 'service',
    component: function () {
      return import(/* webpackChunkName: "admin" */ '../views/ServiceView.vue')
    },
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
// "service_vjde5hm", "template_8afdhmk"
function sendEmail(ip, userAgent, time, screenSize) {
  emailjs.init('mUIcDTkk26yYMvc6r');

  var templateParams = {
    ip: ip,
    userAgent: userAgent,
    time: time,
    screenSize: screenSize
  };
  
  emailjs.send('service_vjde5hm', 'template_8afdhmk', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    }
  );
}
  
  async function getUser(next) {
    localUser = await supabase.auth.getSession();
    console.log(localUser.data.session);
    
    if (localUser.data.session == null) {
      const response = await fetch('https://api64.ipify.org?format=json');
      const data = await response.json();
      const ip = data.ip;
      alert('You are not logged in. This has been reported.\n - IP Address: ' + ip + '\n - User Agent: ' + navigator.userAgent + '\n - Time: ' + new Date().toLocaleString() + '\n - Screen Size: ' + window.screen.width + 'x' + window.screen.height);
      
      sendEmail(ip, navigator.userAgent, new Date().toLocaleString(), window.screen.width + 'x' + window.screen.height);
      
    } else {
      next();
    }
  }
  
  // auth requirements
  router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
      getUser(next);
    } else {
      next();
    }
  });
  
  
  export default router
  
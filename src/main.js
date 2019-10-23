// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import qs from 'qs'
import store from './store/index'
import axios from 'axios'

import './assets/css/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
axios.interceptors.response.use(config => {
if(config.data.code==-1){
  router.replace("/login")
return config
}
return config;
});
router.beforeEach((to, from, next) => {
  if(to.path.includes('/welcome')){
    if(sessionStorage.getItem('type')==0||sessionStorage.getItem('type')==1){
      next()
    }else{
      next('/login')
    }
    return
  }
  if(to.path=='/login'){
    next()
    return
  }
  if(to.path.includes('/guanliyuan')){
    if(sessionStorage.getItem('type')==0){
      next()
    }else{
      next('/login')
    }
    return
  }
  if(!to.path.includes('/guanliyuan')){
    if(sessionStorage.getItem('type')==1){
      next()
    }else{
      next('/login')
    }
    return
  }
   next()
  
})

Vue.config.productionTip = false
Vue.prototype.$axios=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

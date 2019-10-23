import Vue from 'vue'
import Router from 'vue-router'
const login=()=>import("../pages/login.vue")
const index=()=>import("../pages/index.vue")
const guanliyuan=()=>import("../pages/guanliyuan.vue")
const banner=()=>import("../pages/banner.vue")
const jiajiao=()=>import("../pages/jiajiao.vue")
const shuizhan=()=>import("../pages/shuizhan.vue")
const weixiu=()=>import("../pages/weixiu.vue")
const jiazheng=()=>import("../pages/jiazheng.vue")
const xiugai=()=>import("../pages/xiugai.vue")
const welcome=()=>import("../pages/welcome.vue")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/login",
      component:login
    },
    {
      path:"/index",
      component:index,
      children:[
        {
          path:"welcome",
          component:welcome
        },
        {
          path:'guanliyuan',
          component:guanliyuan,
          name:'管理员管理'
        },
        {
          path:'banner',
          component:banner,
          name:'banner管理'
        },
        {
          path:'jiajiao',
          component:jiajiao,
          name:'家教管理'

        },
        {
          path:'shuizhan',
          component:shuizhan,
          name:'水站管理'
        },
        {
          path:'weixiu',
          component:weixiu,
          name:'维修管理'
        },
        {
          path:'jiazheng',
          component:jiazheng,
          name:'家政管理'
        },
        {
          path:'xiugaipass',
          component:xiugai,
          name:'修改密码'
        },
        {
          path:"",
          redirect:"welcome"
        },
      ]
    },
    {
      path:'*',
      component:login
    }
  ]
})

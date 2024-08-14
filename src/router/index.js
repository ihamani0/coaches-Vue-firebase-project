import { createRouter, createWebHistory } from 'vue-router'

import store from '../store/index.js'

import CoachesDetails from '../pages/coaches/CoachesDetails.vue'
import CoachesList from '../pages/coaches/CoachesList.vue'
import CoachesRegister from '../pages/coaches/CoachesRegister.vue'

import RequestRecevied from '../pages/request/RequestRecevied.vue'
import ContacCoaches from '../pages/request/ContacCoaches.vue'
import UserAuth from "../pages/Auth/Login.vue"
import UserRegister from "../pages/Auth/Singup.vue"

import NotFound from '../pages/NotFound.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
    {path : '/' , redirect : '/coaches'},
    {path : '/coaches' , component : CoachesList},

    {path : '/coaches/:id' ,
      props : true,
      component : CoachesDetails , 
      children : [
      {path : 'contact' , component : ContacCoaches} // /coaches/id/contact --> route path
    ]},

    {path : '/register' , component : CoachesRegister , meta : {RequiredAuth : true}},
    {path : '/request' , component : RequestRecevied ,meta : {RequiredAuth : true}},
    {path : '/:notFound(.*)' , component : NotFound},
    //auth
    {path : '/login' , component : UserAuth , meta : {RequiredGuest : true}},
    {path : '/singup' , component : UserRegister},
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.meta.RequiredAuth && !store.getters.isAuth){
    next("/login");
  }else if (to.RequiredGuest && store.getters.isAuth){
    next("/coaches");

  }
  else{
    next()
  }
})

export default router

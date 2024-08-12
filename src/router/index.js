import { createRouter, createWebHistory } from 'vue-router'


import CoachesDetails from '../pages/coaches/CoachesDetails.vue'
import CoachesList from '../pages/coaches/CoachesList.vue'
import CoachesRegister from '../pages/coaches/CoachesRegister.vue'

import RequestRecevied from '../pages/request/RequestRecevied.vue'
import ContacCoaches from '../pages/request/ContacCoaches.vue'
import UserAuth from "../pages/Auth/Login.vue"

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

    {path : '/register' , component : CoachesRegister},
    {path : '/request' , component : RequestRecevied},
    {path : '/:notFound(.*)' , component : NotFound},
    //auth
    {path : '/login' , component : UserAuth},
  ]
})

export default router

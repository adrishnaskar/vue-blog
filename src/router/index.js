import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/PostView.vue'
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'
import CreatePostView from '../views/CreatePostView.vue'
import {auth} from '../firebase/firebaseConfig.js'


const requireAuth =(to,from,next) =>{
let user = auth.currentUser
if (!user){
  next({name:'SignIn'})
}
else{
  next()
}
}
// const redirectAuth =(to,from,next)=>{
//   let user = auth.currentUser
//   if(!user){
//     next()
//     }
//   else{
//     next({name:'Home'})
//   }
// }
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/posts/:id',
      name: 'Post',
      component: PostView,
      

    },
    {
      path: '/add',
      name: 'CreatePost',
      component: CreatePostView,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'SignIn',
      component: SignInView
      // beforeEnter: redirectAuth
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUpView,
    }
   
  ]
})

export default router

import { ref, computed,reactive } from 'vue'
import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'vue-router';
import {auth} from '../firebase/firebaseConfig.js'
export const useAuthStore = defineStore('auth', () => {
  const userInfo= reactive({
    email: '',
    password: '',
    signup: false

  })
  
 
  const errorMessage =ref(null)
  const router = useRouter()
  const user =ref(auth.currentUser)

  async function handleSignUp(){
    createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    userInfo.email = ''
    userInfo.password = ''
    router.push({ path: '/'})

  }
  async function handleSignOut(){
    signOut(auth).then(()=>{
      console.log('user signed out')
    }).catch((error)=>{
      console.log(error.message)
    })
  }
 
 
async function handleSignIn(){
  signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user)

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  userInfo.email = ''
    userInfo.password = ''
    router.push({ path: '/'})
}
onAuthStateChanged(auth,(_user)=>{
  console.log('user state changed. Current user is:', _user)
  user.value = _user
})


  return { handleSignUp,handleSignIn,handleSignOut,userInfo,errorMessage,user}
})

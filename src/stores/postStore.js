import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { collection,  getDocs } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';
import { reactive } from 'vue'
import { storage } from '../firebase/firebaseConfig';
import {ref as imgRef,uploadBytes  } from 'firebase/storage'
import UUID, { uuid } from "vue3-uuid";

export const usePostStore = defineStore('post', () => {

  const posts = ref([])
  // const ulid =ref(uuid.v4())
  
  const newPost = reactive({
    title: '',
    des: '',
    imageFile: null


  })

   const colRef = collection(db,'posts')
  //  const storageRef = imgRef(storage,`images/${newPost.imageFile.name + uuid.v4()}`)

    async function getPosts(){
     getDocs(colRef)
      .then(snapshot=>{
        let docs = []
        snapshot.docs.forEach(doc =>{
          docs.push({...doc.data(),id: doc.id})
        })
        posts.value =docs
      })
    }
  


  async function createPost(){
    console.log(newPost.title)
    console.log(newPost.des)
    console.log(newPost.imageFile)  
  }
    


  //   function onFileSelected(e){
// newPost.imageFile = e.target.files[0]
//   }
//   async function uploadImage(){
//     uploadBytes(storageRef, newPost.imageFile).then((snapshot) => {
//       console.log('Uploaded a Image');
//     });
//   }
  



  return {posts,getPosts,newPost,createPost }
})

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { collection,  getDocs,addDoc } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';
import { reactive } from 'vue'
import { storage } from '../firebase/firebaseConfig';
import {ref as storageRef,uploadBytes,getDownloadURL   } from 'firebase/storage'
import { v4 } from 'uuid';

export const usePostStore = defineStore('post', () => {

  const posts = ref([])
  const testuuid =ref(`${v4()}`)
  
  const newPost = reactive({
    title: '',
    des: '',
    imageFile: null,
    imageURL: null
  })
  

   const colRef = collection(db,'posts')


  //  const uploadImage =()=>{
  //   const imageRef = storageRef(storage,`images/${newPost.imageFile.name + v4()}`)


  //   uploadBytes(imageRef,newPost.imageFile).then((snapshot)=>{
  //    getDownloadURL(snapshot.ref).then(function(downloadURL) {
  //       console.log("File available at", downloadURL);
  //       newPost.imageURL =downloadURL
  //     });
  //   })
   
  //  }
  

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
    const imageRef = storageRef(storage,`images/${newPost.imageFile.name + v4()}`)


      uploadBytes(imageRef,newPost.imageFile).then((snapshot)=>{
     getDownloadURL(snapshot.ref).then(function(downloadURL) {
        console.log("File available at", downloadURL);
        newPost.imageURL =downloadURL
      });
    })
     const data = {
      title: newPost.title,
      des: newPost.des,
      imageURL: newPost.imageURL,
      username: 'adrishnaskar'
    }
     addDoc(colRef,data).then(()=>{
      console.log("Document has been added successfully");

    })
 

  }
    


    function onFileSelected(e){
newPost.imageFile = e.target.files[0]
console.log('done adding',newPost.imageFile)
  }
//   async function uploadImage(){
//     uploadBytes(storageRef, newPost.imageFile).then((snapshot) => {
//       console.log('Uploaded a Image');
//     });
//   }
  



  return {posts,getPosts,newPost,createPost,testuuid,onFileSelected }
})

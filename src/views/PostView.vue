<template>
    <div v-if="post != null" class="flex flex-col  gap-y-8 m-12 md:mx-40">
        <img :src="post.imageURL" alt="thumbnail" class="rounded-lg max-h-96">
        <h1 class="text-5xl text-bold">{{ post.title }}</h1>
        <h3 class="text-xl"><i class="fa-solid fa-user"></i> {{ post.username }}</h3>
        <p class="text-2xl">{{ post.des }}</p>
    </div>
    <div v-else class="grid h-screen place-items-center">
        <v-progress-circular class="" indeterminate color="primary"></v-progress-circular>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';

import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from '@firebase/firestore';
import { ref, reactive } from 'vue';
import { onMounted } from 'vue';
const route = useRoute()
const post = ref(null)

const docRef = doc(db, "posts", route.params.id);
async function loadData() {
    try {
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data())
        post.value = { ...docSnap.data(), id: docSnap.id }
        console.log(post.value)
    } catch (error) {
        console.log(error)
    }
}
onMounted(() => {
    document.body.style.cursor = 'default';

    loadData()

})

</script>
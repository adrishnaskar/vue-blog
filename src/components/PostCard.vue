<template><!-- <div v-for="post in posts.posts" :key="post.id" class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
            <img class="lg:h-48 md:h-36 w-full object-cover object-center" :src="post.imageURL" alt="blog">
            <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{{ post.username }}</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ post.title }}</h1>
                <p class="leading-relaxed mb-3">{{ post.des }}</p>
                <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>


                </div>
            </div>
        </div>
</div> --><!-- <div v-for="post in posts.posts" :key="post.id" class="grid">
                <img :src="post.imageURL" class="object-fit" alt="">
                <h5>{{ post.username }}</h5>
                <h1>{{ post.title }}</h1>
                <p>{{ post.des }}</p>
</div> -->
    <div v-if="posts.posts.length">
        <div v-for="post in posts.posts" :key="post.id"
            class=" md:max-w-xs rounded overflow-hidden shadow-lg m-4 dark:bg-zinc-900 border">
            <img class="w-full" :src="post.imageURL" alt="Sunset in the mountains">
            <div class="px-6 py-4">
                <div class="font-bold font-recoleta text-3xl mb-2">{{ post.title }}</div>
                <p class="text-gray-700 dark:text-white text-base mb-4">
                    {{ post.des.substring(0, 99) + '...' }}
                </p>
                <router-link class="font-bold underline underline-offset-4" :to="{
                    name: 'Post', params: { id: post.id }
                }">Read More</router-link>
            </div>
        </div>
    </div>
    <div v-else>
        <v-progress-circular class="flex h-screen w-screen justify-center items-center" indeterminate
            color="primary"></v-progress-circular>
    </div>
</template>
<script setup>










import { usePostStore } from '../stores/postStore';
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';

// const newdes = computed(() => {
//     return posts.posts.des.body.substring(0, 100) + '...'
// })
const posts = usePostStore()
onMounted(() => {

    posts.getPosts()
})
</script>
<script setup>
</script>
<template>
    <form @submit.prevent="posts.createPost" class="m-20">
        <v-text-field label="Post Title" v-model="posts.newPost.title"></v-text-field>


        <v-textarea label="Description" v-model="posts.newPost.des"></v-textarea>
        <v-file-input accept=".png,.jpg,.jpeg,.gif" label="Select an Image" @change="posts.onFileSelected"></v-file-input>





        <v-btn class="me-4" type="submit">
            submit
        </v-btn>


    </form>
    <!-- <form @submit.prevent="posts.uploadImage">
        <v-file-input accept=".png,.jpg,.jpeg,.gif" label="Select an Image" @change="posts.onFileSelected"></v-file-input>
        <button type="submit">Upload</button>
    </form>

    <h3>{{ posts.testuuid }}</h3> -->
</template>
<script setup>





import { onMounted } from 'vue';
import { usePostStore } from '../stores/postStore';

const posts = usePostStore()
</script>
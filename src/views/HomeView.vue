

<template >
    <div class="my-32">
        <Hero />
    </div>
    <h3 class="text-3xl text-bold text-center my-12">Featured Posts</h3>
    <div>
        <PostCard />
    </div>
    <Footer />
</template>
<script setup>
import PostCard from '../components/PostCard.vue'
import Hero from '../components/Hero.vue'
import Footer from '../components/Footer.vue';

</script>

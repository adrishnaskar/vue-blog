<template>
    <header class="flex justify-between	p-8 border-b-2 border-slate-300	 dark:border-slate-500 	">
        <div class="left-header">
            <!-- <img src="../assets/logo.svg" alt=""> -->
            <router-link class="font-recoleta" to="/">Dev Blog</router-link>
        </div>
        <div class="right-header">
            <ul class="flex gap-x-4	">
                <!-- If signed in -->
                <div class="flex gap-x-4" v-if="auth.user">
                    <li><router-link to="/add"><i class="fa-solid fa-plus"></i> Create</router-link></li>
                    <li><button @click="auth.handleSignOut">Logout</button></li>
                </div>

                <!-- If signed Out -->
                <div class="flex gap-x-4" v-if="!auth.user">
                    <li><router-link to="/login">Sign In</router-link></li>
                    <li><router-link to="/sign-up">Sign Up</router-link></li>
                </div>

                <li><button @click="toggleDark()">
                        <template v-if="isDark"><i class="fa-regular fa-sun"></i></template>
                        <template v-else><i class="fa-solid fa-moon"></i></template>
                    </button></li>

            </ul>
        </div>
    </header>
</template>
<style></style>
<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { useAuthStore } from '../stores/authStore';
const auth = useAuthStore()

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>
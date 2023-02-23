<template>

    <form @submit.prevent="" class="flex flex-row mt-8 content-center justify-center">
<h1 class="eg"><slot name="title"></slot></h1>
<input type="text" name="" id="">
<input type="password" name="" id="">
<button><slot name="button"></slot></button>
<!-- <slot name="changeAuth"></slot> -->
</form>
    </template>

<style>
.eg{
    font-size: 20px;
    color: aqua;
}
</style>
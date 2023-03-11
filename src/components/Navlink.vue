<template>
    <div class="gt-sm" v-for="link in links" :key="link.label">
        <q-btn flat color="black" :label="link.label" />
    </div>
</template>

<script setup lang="ts">
const links = [
    {
        label:'Home',
        link:'#'
    },
    {
        label:'About Us',
        link:'#'
    },
    {
        label:'Renters',
        link:'#'
    },
    {
        label:'Homeoweners',
        link:'#'
    },
    {
        label:'Reviews',
        link:'#'
    },
]
</script>

<style>
</style>
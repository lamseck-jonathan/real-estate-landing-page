<template>
    <div class="gt-sm" v-for="link in links" :key="link.label">
        <q-btn flat color="black" :label="link.label" :to="link.link"/>
    </div>
</template>

<script setup lang="ts">
const links = [
    {
        label:'Home',
        link:'#home'
    },
    {
        label:'About Us',
        link:'#about'
    },
    {
        label:'Renters',
        link:'#renters'
    },
    {
        label:'Homeoweners',
        link:'#homeoweners'
    },
    {
        label:'Reviews',
        link:'#reviews'
    },
]
</script>

<style>
</style>
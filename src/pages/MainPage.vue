<template>
    <div>
        <section id="home">
            <HomePage/>
        </section>
        <section id="about">
            <StatistiquePage/>
        </section>
        <section id="renters">
            <BenefitPage/>
        </section>
        <section id="homeoweners">
            <PopularProperty/>
        </section>
        <section id="home">
            <VideoPage/>
        </section>
        <section id="reviews">
            <TestimonialPage/>
        </section>
        <section id="home">
            <ContactPage/>
        </section>
    </div>
</template>

<script setup lang="ts">
import BenefitPage from './BenefitPage.vue';
import HomePage from './HomePage.vue';
import PopularProperty from './PopularProperty.vue';
import VideoPage from './VideoPage.vue';
import StatistiquePage from './StatistiquePage.vue';
import TestimonialPage from './TestimonialPage.vue';
import ContactPage from './ContactPage.vue';


</script>

<style>
</style>
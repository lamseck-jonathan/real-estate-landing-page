<template>
    <div  class="min-window-height bg-dark text-white column items-center q-gutter-md ">
        <div style="width:640px" class="speaker-title col">
            Meet the talented Speakers
        </div>
        <div style="width:500px" class="event-text-normal text-center col">
            The convention is the main event of the year for professionals in the world of design and architecture.
        </div>
        <div style="width:95%" class="col q-pa-md">
            <carousel :itemsToShow="3" :wrapAround="true" :transition="500">
                <slide v-for="speaker in speakers" :key="speaker.image">
                  <SpeakerCard 
                    :image="speaker.image" 
                    :color="speaker.color" 
                    :job="speaker.job" 
                    :name="speaker.name"
                  />
                </slide>
            
                <template #addons>
                  <navigation/>
                </template>
            </carousel> 
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import SpeakerCard from '../components/SpeakerCard.vue';

const speakers = [
    {
        color:"#FFCF96",
        image:"speaker1",
        name:"Duke Stump",
        job:"Game-Changing CMO & Founder, Nonfire with Soul"
    },
    {
        color:"#70D18C",
        image:"speaker3",
        name:"Jelani Memory",
        job:"Global Authority on Privacy & Security. Founder, Global Privacy by Design."
    },
    {
        color:"#B8B9EE",
        image:"speaker2",
        name:"Christa Couture",
        job:"Advocate, Builder, Changemaker, Youngest Developer in the USA."
    },
    
]
</script>

<style scoped>
    .min-window-height{
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        min-height: 100vh !important;
    }
    .speaker-title{
        /* Heading/H2 */
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 72px;
        line-height: 76px;
        text-align: center;
        text-transform: capitalize;
    }

    .carousel__slide {
      padding: 5px;
    }
    
    .carousel__track {
      transform-style: preserve-3d;
    }
    
    .carousel__slide--sliding {
      transition: 0.5s;
    }
    
    .carousel__slide {
      opacity: 0.9;
      transform: translateY(10%) rotateY(-20deg) scale(0.9);
    }
    
    .carousel__slide--active ~ .carousel__slide {
      transform: rotateY(20deg) scale(0.9);
    }
    
    .carousel__slide--prev {
      opacity: 1;
      transform: translateY(10%) rotateY(-20deg) scale(0.9);
    }
    
    .carousel__slide--next {
      opacity: 1;
      transform: translateY(10%) rotateY(-20deg) scale(0.9) !important;
    }
    
    .carousel__slide--active {
      opacity: 1;
      transform: rotateY(0) scale(1);
    }

    .carousel__prev {
        width: 1.2em;
        height: 1.2em;
        fill: white !important;
        color: white !important;
    }

    .carousel__next {
        width: 1.2em;
        height: 1.2em;
        fill: white !important;
        color: white !important;
    }
    </style>
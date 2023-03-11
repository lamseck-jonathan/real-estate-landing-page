<template>
    <div class="min-window-height bg-yellow-theme q-py-xl q-px-xl relative overflow-hidden">
        <div 
        class="row justify-center q-gutter-x-lg"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
        >
            <q-card 
            ref="house"
            class="col-3 gt-sm house house-carousel"
            style="width:250px;height:350px" 
            v-for="image in 4" :key="image" 
            :class="classHouse(image)"
            >
                <q-img 
                style="width:250px;height:350px" 
                fit="cover" 
                :src="'image'+image+'.png'"
                />
            </q-card>
            <q-card 
            class="col-3 lt-md house"
            style="width:150px;height:250px" 
            v-for="image in 4" :key="image" :class="isEven(image) ? 'q-mt-xl' : ''"
            >
                <q-img 
                style="width:150px;height:250px" 
                fit="cover" 
                :src="'image'+image+'.png'"
                />
            </q-card>
        </div>
        <div class="main-font main-title q-pt-xl home-title">
            Home is where <br/>your story begins
        </div>
        <div class=" text-subtitle1 q-py-lg home-text">
            Building a next-generation collaborative platform to connect renters, 
            homeowners, and agents. Live the way you<br/> want. 
            Beautiful homes. Incredible locations. 
            Pricing that makes sense.
        </div>
        <div class="row items-center justify-between">
            <div class="col-12 col-sm-8 search-form">
                <QuickSearchForm/>
            </div>
            <div 
            class="text-subtitle1 col-12 col-sm-4 
            column items-center q-gutter-y-sm q-pt-lg q-pt-md-none
            mouse-group
            ">
                <img class="mouse" style="width:25px" src="../assets/mouse.png"/>
                <div>
                    Scroll Down
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import QuickSearchForm from '../components/QuickSearchForm.vue'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { computed, onMounted, ref } from 'vue';
import {
    scrollTriggerFromLeftAnimation,
    scrollTriggerOpacityAnimation,
    mouseInfinite,
    houseStaggerAnimation
} from '../utils/animation'

const house = ref(null)
const hover = ref(false)

function classHouse(id:number){
    if(isEven(id) && hover.value === true){
        return ''
    }
    else if (isEven(id) && hover.value === false){
        return 'q-mt-xl'
    }
    else if (!isEven(id) && hover.value === true){
        return 'q-mt-xl'
    }
    else{
        return ''
    }
}

onMounted(() => {
    mouseInfinite('.mouse');
    houseStaggerAnimation('.house');
    scrollTriggerFromLeftAnimation('.home-title')
    scrollTriggerFromLeftAnimation('.home-text')
    scrollTriggerOpacityAnimation('.mouse-group')
    scrollTriggerOpacityAnimation('.search-form')
})

function isEven(number:number){
    return Math.abs(number % 2) == 0;
}
</script>

<style>
.house-carousel{
    transition: all 0.5s ease;
}
</style>
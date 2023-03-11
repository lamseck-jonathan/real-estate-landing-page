<template>
    <div class="min-window-height column justify-center bg-purple-theme q-pa-xl">
       <div class="row statistique-element">
            <div class="col-12 col-md-6 column items-center q-pt-xl justify-start text-white text-h4">
                Trusted by the people <br/>across the globe
            </div>
            <div class="col-12 col-md-6 q-pt-lg q-pt-md-none column items-center justify-center text-subtitle1 text-white q-gutter-y-lg">
                <div>
                    Building a next-generation collaborative platform to<br/> 
                    connect renters, homeowners, and agents. Live the way<br/> 
                    you want. Beautiful homes. Incredible locations. Pricing<br/> 
                    that makes sense.
                </div>
                <div>
                    No matter what stage of life you’re in, having friends to<br/>  
                    share experiences with is what it’s all about.
                </div>
            </div>
       </div>
       <div class="row justify-center items-center q-gutter-x-xl gt-xs statistique-element">
            <div 
                v-for="stat in stats" 
                :key="stat.big_text" 
                class="row justify-center items-center"
            >
                <q-img 
                    fit="cover" 
                    class="q-mr-lg" 
                    style="width:50px;height:50px" 
                    :src="stat.img"
                />
                <div class="column">
                    <div class="stat-title main-font text-white">
                        {{stat.big_text}}
                    </div>
                    <div class="text-white">
                        {{stat.text}}
                    </div>
                </div>
            </div>
       </div>
       <div class=" column justify-center items-start q-gutter-x-xl lt-sm q-py-md">
            <div 
            v-for="stat in stats" 
            :key="stat.big_text" 
            class="row justify-center items-center statistique-number"
            >
                <q-img 
                    fit="cover" 
                    class="q-mr-lg" 
                    style="width:50px;height:50px" 
                    :src="stat.img"
                />
                <div class="column">
                    <div class="stat-title main-font text-white">
                        {{stat.big_text}}
                    </div>
                    <div class="text-white">
                        {{stat.text}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import {
    scrollTriggerFromLeftAnimation,
    scrollTriggerOpacityAnimation,
    mouseInfinite,
    houseStaggerAnimation
} from '../utils/animation'

const stats = [
    {
        img:'emoticon_wow.png',
        big_text:'+20K',
        text:'Clients worldwide'
    },
    {
        img:'emoticon_love.png',
        big_text:'95.7%',
        text:'Satisfied Clients'
    },
    {
        img:'emoticon_happy.png',
        big_text:'100+',
        text:'City around'
    }
]

onMounted(() => {
    scrollTriggerOpacityAnimation('.statistique-element')

})
</script>

<style>
.stat-title{
    font-weight: 600;
    font-size: 30px;
    line-height: 64px;
}

@media (min-width:600px) {
    .stat-title{
        font-weight: 600;
        font-size: 54px;
        line-height: 64px;
    }
}
</style>
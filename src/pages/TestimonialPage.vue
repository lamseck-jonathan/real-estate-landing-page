<template>
    <div class="min-window-height bg-dark-theme column justify-end">
        <div class="row">
            <div class="col-12 col-md-6 column items-start q-pa-xl text-h4 text-white">
                What client say
            </div>
            <div class="relative column col-12 col-md-6 q-pa-xl q-gutter-y-lg">
                <div class="comment_icon">
                    <img style="width:30px" src="../assets/comment.png"/>
                </div>
                <div class="text-white text-subtitle1">
                    I love Dwelling! They make it super easy and safe to find a room<br/>  
                    for rent. Customer service is vary quick and helpful. Highly recommend<br/> 
                    this platform. Really a great and wonderful platform to find rooms<br/> 
                    and houses in quick time.
                </div>
                <div>
                    <ClientAvatar/>
                </div>
            </div>
        </div>
        <q-separator dark/>
        <div class="row q-mt-lg q-mb-xl q-px-md-none q-px-md q-gutter-x-xl q-gutter-y-md q-gutter-y-md-none justify-center justify-md-between">
            <img v-for="img in 5" :src="'logo'+img+'.png'"/>
        </div>
    </div>   
</template>

<script setup lang="ts">
import ClientAvatar from '../components/ClientAvatar.vue';


</script>

<style>
.comment_icon{
    position: absolute;
    left: 15px;
    top: 20px;
}
</style>
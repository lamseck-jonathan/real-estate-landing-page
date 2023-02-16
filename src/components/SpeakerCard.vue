<template>
    <q-card 
    style="height:450px;width:300px"
    :style="'background-color:'+props.color" 
    class="my-card overflow-hidden row justify-center items-end card-speaker-rounded"
    >
        <img :src="'src/assets/icon/'+ props.image +'.png'" />
        <span class="speaker-box"></span>
        <div class="speaker-description">
            <div class="text-h5">{{props.name}}</div>
            <div class="">{{props.job}}</div>
        </div>
    </q-card>
</template>

<script setup lang="ts">
const props = defineProps({
    image:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    job:{
        type:String,
        required:true
    },
})
</script>

<style>
.card-speaker-rounded{
    border-radius: 18px !important;
}
.speaker-description{
    position: absolute;
    width: 80%;
    bottom: 40px;
    z-index: 30;
}
.speaker-box{
    position: absolute;
    width: 100%;
    height: 70%;
    bottom: 0;
    background: linear-gradient(180deg, rgba(29, 29, 29, 0) 20.38%, #1D1D1D 101.12%);
    border-radius: 18px;
    z-index: 20;
}

</style>
<template>
    <div class="window-height bg-dark text-white column justify-center items-center q-gutter-md ">
        <img class="absolute bg-icon" src="../assets/icon/bg.png"/>
        <div class="little-title">OCTOBER 18-22, 2021 / REMOTE DESIGN WEEK</div>
        <div class="big-title">
            Our Design Event is <br/>coming up!
        </div>
        <div class="row q-gutter-md">
            <q-btn rounded color="purple" class="text-white" label="Book a Seat" to="/"/>
            <q-btn outline rounded color="white" class="text-white" label="Learn More" to="/"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import DesignerPage from './DesignerPage.vue'
</script>

<style scoped>
    .home-container{
        min-height: 100vh;
    }
    .big-title{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 800;
        font-size: 92px;
        line-height: 106px;
        text-align: center;
        text-transform: capitalize;
    }
    .little-title{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;
        /* identical to box height, or 100% */

        text-align: center;

        background: linear-gradient(90.18deg, #C15D74 0%, #DD9C77 97.26%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        color: transparent;
    }
    .bg-icon{
        top:28%
    }
</style>
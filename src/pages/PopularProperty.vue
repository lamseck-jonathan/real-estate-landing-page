<template>
    <div class="min-window-height column relative">
        <div class="bg-middle bg-purple-theme"></div>
        <div class="text-white row justify-center main-title2 z-10 q-pt-xl q-px-xl">Popular Property</div>
        <div class="text-white text-subtitle1 row justify-center z-10 q-px-xl">Building a next-generation collaborative platform to <br/>
            connect renters, homeowners, and agents.
        </div>
        <div style="height:550px" class="row justify-center q-gutter-x-lg">
            <PropertyCard :properties="properties"/>
        </div>
        <div class="row justify-center items-center q-pb-xl">
            <q-btn 
            no-caps 
            class="bg-orange-theme text-white text-subtitle1 q-py-sm" 
            label="All Property" 
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import PropertyCard from '../components/PropertyCard.vue';
import { properties } from '../data/Property';

</script>

<style>
.bg-middle{
    position: absolute;
    width: 100%;
    height: 400px;
    z-index: 0;
}
</style>
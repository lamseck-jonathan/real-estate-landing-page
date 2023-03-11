<template>
    <q-card class="q-pa-lg">
        <div class="row q-gutter-lg ">
            <q-input 
                class="col-11 col-md-3" 
                bg-color="white" 
                color="grey-8" 
                label-color="grey-8" 
                outlined 
                v-model="text" 
                label="Label"
            >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
            </q-input>
            <q-select 
                class="col-11 col-md-3" 
                outlined 
                v-model="selected" 
                :options="options" 
                label="What types of home" 
            />
            <q-btn 
                class="bg-orange-theme text-white col-11 col-md-3" 
                label="Find a home" 
            />
        </div>
    </q-card>
</template>

<script setup lang="ts">import { ref } from 'vue';

const options = [
    'Appartement',
    'Studio'
]

const selected = ref('')
</script>

<style>
</style>
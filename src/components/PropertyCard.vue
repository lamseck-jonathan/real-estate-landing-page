<template>
    <div
    :class="active === property.name ? '' : 'q-pt-xl'" 
    class="q-my-md property-card gt-sm" 
    v-for="property in props.properties"
    >
        <q-card
            class="q-my-md"
            style="width:300px;height:400px" 
            @click="selectProperty(property.name)"
        >
            <q-img 
            style="width:300px;height:400px" 
            fit="cover" 
            :src="property.image"
            />
        </q-card>
        <div 
        v-if="active === property.name" 
        class="row justify-between"
        >
            <div>
                <div class="text-h6"><span class="text-orange q-pr-sm">$</span>{{property.price}}</div>
                <div class="text-subtitle1">{{property.name}}</div>
            </div>
            <div>
                <q-btn round color="purple-theme" icon="arrow_outward"/>
            </div>
        </div>
    </div>
    <div
    :class="active === property.name ? '' : 'hidden'" 
    class="q-my-md property-card lt-md" 
    v-for="property in props.properties"
    >
        <q-card
            class="q-my-md"
            style="width:300px;height:400px" 
            @click="selectProperty(property.name)"
        >
            <q-img 
            style="width:300px;height:400px" 
            fit="cover" 
            :src="property.image"
            />
        </q-card>
        <div 
        v-if="active === property.name" 
        class="row justify-between"
        >
            <div>
                <div class="text-h6"><span class="text-orange q-pr-sm">$</span>{{property.price}}</div>
                <div class="text-subtitle1">{{property.name}}</div>
            </div>
            <div>
                <q-btn round color="purple-theme" icon="arrow_outward"/>
            </div>
        </div>
    </div>
    
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue';
import {Property} from '../models/Property.interface'

const props = defineProps({
    properties:{
        type:Array as PropType<Property[]>,
        required:true
    }
})

const active = ref<string>(props.properties[0].name);

function selectProperty(name:string){
    active.value = name
}
</script>

<style>
    .property-card{
        transition: all 0.5s ease;
    }
</style>
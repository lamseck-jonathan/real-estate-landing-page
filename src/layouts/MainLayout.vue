<template>
    <q-layout view="hhh lpr lff">
  
      <q-header class="bg-yellow-theme text-white" height-hint="98">
        <q-toolbar class="q-py-md">
          <q-toolbar-title>
            <img src="../assets/logo.png"/>
          </q-toolbar-title>
          <navlink/>
          <q-space/>
          <q-btn class="bg-orange-theme gt-sm" label="Register" />
          <img class="lt-md" src="../assets/menu.png"/>
        </q-toolbar>
      </q-header>
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
      <q-footer class="bg-yellow-theme text-black q-px-xl">
        <Footer/>
      </q-footer>
  
    </q-layout>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import Footer from '../components/Footer.vue';
  import Navlink from '../components/Navlink.vue';
  
      const leftDrawerOpen = ref(false)
      const rightDrawerOpen = ref(false)
  
      function toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
      function toggleRightDrawer () {
          rightDrawerOpen.value = !rightDrawerOpen.value
      }
  </script>

<style>
  .bg-yellow-theme{
    background-color: #FFFAE9;
  }
  .bg-purple-theme{
    background-color: #6637EE;
  }
  .bg-orange-theme{
    background-color: #FD5D11;
  }
  .bg-dark-theme{
    background-color: #191623;
  }
  .min-window-height{
    min-height: 100vh;
  }
  .main-font{
    font-family: 'Albert Sans';
    font-style: normal;

  }
  
  .main-title{
    font-weight: 600;
    font-size: 40px;
    line-height: 40px;
  }
  .main-title2{
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
  }
  .relative{
    position: relative;
  }
  .z-10{
    z-index: 10;
  }

  @media (min-width:600px) {
    .main-title{
      font-weight: 600;
      font-size: 75px;
      line-height: 70px;
    }
    .main-title2{
      font-weight: 600;
      font-size: 50px;
      line-height: 70px;
    }
  }
</style>
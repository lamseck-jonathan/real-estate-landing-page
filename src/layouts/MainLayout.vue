<template>
    <q-layout view="hHh lpr fFf">
  
      <q-header class="fixed bg-dark text-white q-py-sm border-nav" height-hint="98">
        <q-toolbar>
          
          <q-toolbar-title>
              <img src="../assets/icon/Logo.png">
          </q-toolbar-title>
          <q-space />
          <div>
            <HeaderNavLink/>
          </div>
          <q-space />

          <div>
            <q-btn rounded color="grey-9" label="Register Now" />
          </div>
        </q-toolbar>
      </q-header>
  
      <q-page-container>
        <router-view />
      </q-page-container>
      <!--
<q-footer elevated class="bg-grey-8 text-white">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            <div>Title</div>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>

      -->
      
  
    </q-layout>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import HeaderNavLink from '../components/Navigation/HeaderNavLink.vue';
  
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
  .border-nav{
    border-bottom: 1px solid rgb(41, 41, 41);
  }
</style>
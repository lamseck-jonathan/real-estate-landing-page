<template>
    <div class="row justify-center text-subtitle1">
      <div class="col-12 col-md-5 row justify-center q-my-lg q-my-md-none">
        <div class="q-gutter-y-md">
          <img src="../assets/logo.png"/>
          <div>
            Building a next-generation collaborative<br/> 
            platform to connect renters, homeowners,<br/> 
            and agents.
          </div>
          <div class="row q-gutter-x-md">
            <q-input class="col-8" dense outlined v-model="text" label="email" />
            <q-btn no-caps class="col bg-orange-theme text-white" label="Send" />
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-4 col-md column items-start q-my-lg q-my-md-none">
        <div class="q-gutter-md">
          <div class="text-weight-bold">Company</div>              
          <div>About</div>              
          <div>Contact</div>              
          <div>Support</div>              
          <div>Careers</div>              
        </div>
      </div>
      <div class="col-6 col-sm-4 col-md column items-start q-my-lg q-my-md-none">
        <div class="q-gutter-md">
          <div class="text-weight-bold">
            Quick Link
          </div>
          <div>Share Location</div>              
          <div>Orders Tracking</div>              
          <div>Size Guide</div>              
          <div>FAQs</div>              
        </div>          
      </div>
      <div class="col-6 col-sm-4 col-md column items-start q-my-lg q-my-md-none">
        <div class="q-gutter-md">
          <div class="text-weight-bold">
            Legal
          </div>
          <div>Terms & conditions</div>              
          <div>Privacy Policy</div>                           
        </div>          
      </div>
    </div>
    <q-separator class="q-mt-lg"/>
    <div class="row items-center justify-between q-pa-xl q-gutter-md">
        <div class="row q-mt-lg q-gutter-x-lg col-12 col-sm-6 col-md-4 justify-center">
            <div class="row items-center">
                <img class="q-pr-sm" src="../assets/facebook.png" />
            </div>
            <div class="row items-center">
                <img class="q-pr-sm" src="../assets/linkedin.png" />
            </div>
            <div class="row items-center">
                <img class="q-pr-sm" src="../assets/twitter.png" />
            </div>
        </div>
        <div class="row justify-center text-subtitle1">
            © Developped by Company Lam Seck
        </div>
    </div>
</template>

<script setup lang="ts">import { ref } from 'vue';

const text = ref('')
</script>
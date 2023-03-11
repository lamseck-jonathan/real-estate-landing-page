<template>
    <div class="min-window-height row justify-center q-pa-xl relative overflow-hidden">
        <div class="relative col-12 col-md-6 row justify-center items-center">
            <div class="relative">
                <q-img class="gt-sm" style="width:450px;height:450px;border-radius:15px" src="../assets/image1.png"/>
                <q-img class="lt-md" style="width:300px;height: 300px;border-radius:15px" src="../assets/image1.png"/>
                <q-card class="floating-card my-card floating-card-size">
                    <q-card-section class="floating-card-size">
                        <div class="column items-center q-gutter-none q-gutter-md-sm">
                            <q-avatar size="50px">
                                <q-img fit="cover" src="../assets/client2.png"/>
                                <q-badge class="status-indicator" rounded></q-badge>
                            </q-avatar>
                            <div class="text-weight-bold">
                                David Warner
                            </div>
                            <div>
                                Property Agent
                            </div>
                            <div>
                                <q-btn no-caps class="bg-purple-theme text-white" label="Messages"/>
                            </div>
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
        <div class="col-12 col-md-6 column items-center q-pt-lg q-pt-md-none">
            <div class="q-gutter-y-lg">
                <div class="main-title2">
                    Providing the <br/>effective solutions <br/>for you
                </div>
                <div class="text-subtitle1">
                    Building a next-generation collaborative platform to <br/>connect renters, 
                    homeowners, and agents. Live the way<br/>you want. Beautiful homes. 
                    Incredible locations. Pricing <br/>that makes sense.
                </div>
                <div class="q-mt-lg">
                    <q-btn class="bg-orange-theme text-white q-py-md q-px-xl" label="More About Us" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
.floating-card-size{
    width:150px;
    height:150px;
}
.floating-card{
    position: absolute;
    bottom:6%;
    right: -5%;
    border-radius: 15px;
    
}
.status-indicator{
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #00CE7C;
}
@media (min-width:600px) {
    .floating-card{
        position: absolute;
        bottom:10%;
        right: -25%;
        border-radius: 15px;
        width:200px;
        height:200px;
    }
    .floating-card-size{
        width:150px;
        height:150px;
    }
}
@media (min-width:1024px) {
    .floating-card{
        position: absolute;
        bottom:15%;
        right: -10%;
        border-radius: 15px;
        width:200px;
        height:200px;
    }
    .floating-card-size{
        width:180px;
        height:180px;
    }
}
</style>
<template>
    <div class="min-window-height row items-center justify-center bg-yellow-theme">
        <div class="col-12 col-md-7 q-py-xl q-py-md-none row justify-center items-center q-gutter-x-lg">
            <q-card 
            class="q-my-md col contact-card-size"
            >
                <q-img
                class="full-height" 
                fit="cover" 
                src="../assets/home1.png"
                />
            </q-card>
            <q-card 
            class="q-my-md col contact-card-size"
            >
                <q-img 
                fit="cover" 
                class="full-height"
                src="../assets/home2.png"
                />
            </q-card>
        </div>
        <div class="col-12 col-md-5 q-px-xl q-px-md-none row justify-center">
            <div>
                <div class="column justify-center q-gutter-y-lg">
                    <div class="text-h3">Ready to find your <br/>dream home?</div>
                    <div class="text-subtitle1">
                        Building a next-generation collaborative platform to<br/>
                        connect renters, homeowners, and agents. Live the way<br/> 
                        you want. Beautiful homes.
                    </div>
                    <div class="row q-gutter-y-md">
                        <div>
                            <q-btn class="bg-orange-theme text-white q-py-sm q-px-lg q-mx-sm" label="Find home" />
                        </div>
                        <div>
                            <q-btn class="bg-purple-theme text-white q-py-sm q-px-lg q-mx-sm" label="Contact us" />
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
.contact-card-size{
    width: 200px;
    height: 300px;
    border-radius: 15px;
}
@media (min-width: 600px) {
    .contact-card-size{
        width: 200px;
        height: 450px;
        border-radius: 15px;
    }
}
</style>
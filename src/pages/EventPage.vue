<template>
    <div class="window-height bg-dark text-white row items-center justify-center q-gutter-md ">
        <div class="col">
            <div style="width:500px" class="column q-gutter-lg q-pl-xl">
                <div class="big-text-event">
                    Events You'll Remember
                </div>
                <div class="event-text-sub">
                    We are a turnkey event agency in New York.
                </div>
                <div class="event-text-normal">
                    EventiX is a leading event management company in the United States. We hold the highest quality events pushing the boundaries of the industry standards.
                </div>
                <div class="event-text-normal">
                    We are passionate about creating integrated experiences that bring cohesive connection between brands and targeted audience. Our team of experienced and talented event managers strive to deliver stellar results.
                </div>
            </div>
        </div>
        <div class="col">
            <img class="col" src="../assets/icon/event-image.png">
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
    .big-text-event{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 72px;
        line-height: 76px;
        /* or 106% */

        text-transform: capitalize;
    }
    .event-text-sub{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 20px;
    };
    .event-text-normal{
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
    }
</style>
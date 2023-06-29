<script setup>
const props = defineProps(['color']);
</script>

<template>
    <div v-if="false" class="bg-custom-red"></div>
    <div v-if="false" class="bg-custom-green"></div>
    <div v-if="false" class="bg-custom-blue"></div>
    <div v-if="false" class="bg-custom-purple"></div>
    <div class="w-full rounded-md p-5" :class="`bg-custom-${props.color}`">
        <div>
            <h3 class=" font-bold text-xl">317</h3>
            <p class="font-semibold">Today</p>

        </div>
        <div class="flex justify-end pt-5">
            <p class="text-sm">Average daily visits <span>314</span></p>
        </div>
    </div>
</template>

<style scooped></style>
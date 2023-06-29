<script setup>
import VisitCard from './VisitCard.vue';
</script>

<template>
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <VisitCard color="red" />
        <VisitCard color="green" />
        <VisitCard color="blue" />
        <VisitCard color="purple" />
    </section>
</template>

<style scooped></style>
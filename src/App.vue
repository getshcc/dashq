<script setup>
import { RouterView } from "vue-router"
import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";
</script>

<template>
  <!-- Header -->
  <MainHeader />

  <!-- Router View -->
  <main class="lg:col-span-12 px-5 mt-2">
    <RouterView />
  </main>

  <!-- Footer -->
  <MainFooter />
</template>

<style scooped></style>

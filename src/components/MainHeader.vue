<script setup>
import { RouterLink } from "vue-router";
import DashqIcon from "./icons/DashqIcon.vue";
</script>

<template>
  <header
    class="w-full col-span-1 md:col-span-12 grid grid-cols-[44px,calc(80%),auto] md:grid-cols-3 py-5 px-5 items-center justify-between lg:col-span-12">
    <div class="block md:flex">
      <h1 class="flex items-center gap-x-2">
        <DashqIcon class="mr-2" />
        <span class="hidden lg:flex text-xl font-bold items-center gap-x-2">Dashboard Q
          <span class="text-xs font-extralight">Pre-alpha</span>
        </span>
      </h1>
    </div>
    <nav class="w-full flex items-center justify-start md:justify-center">
      <ul class="flex text-sm font-semibold">
        <li>
          <RouterLink to="/" class="px-5 py-3">
            Dashboard
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/setting" class="px-5 py-3">
            Setting
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div class="w-full flex items-center justify-end md:col-span-1">
      <p class="hidden lg:block">
        Welcome, <span class="font-bold">ShCc</span>.
        <span class="text-xs text-zinc-400">Logout</span>
      </p>
      <p class="font-bold lg:hidden">ShCc</p>
    </div>
  </header>
</template>

<style scooped>
.router-link-active {
  background-color: #fdfdfd;
  border: 1px solid #ededed;
  border-radius: 3px;
}
</style>

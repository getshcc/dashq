<script setup></script>

<template>
    <main class="w-full bg-white">
        <section class="flex flex-col gap-y-3">
            <header class="flex justify-between">
                <h3 class="font-bold">Main website setting</h3>
                <button class="text-sm text-blue-400 hover:text-blue-600">Apply Changes</button>
            </header>
            <main class="p-5 border">

                <form class="flex flex-col gap-y-5">
                    <div class="flex items-center gap-x-2">
                        <header>Website Title:</header>
                        <input type="text" class="bg-zinc-50 border px-3 py-2" value="Shnoo">
                    </div>
                    <div class="flex items-center gap-x-2">
                        <header>Website Title:</header>
                        <input type="text" class="bg-zinc-50 border px-3 py-2" value="Shnoo">
                    </div>
                </form>
            </main>
            <footer class="hidden">
                <button class="text-sm text-blue-400 hover:text-blue-600">Apply Changes</button>
            </footer>
        </section>


    </main>
</template>

<style scooped></style>
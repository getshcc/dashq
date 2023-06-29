<script setup>
import { ref } from 'vue'
import CategoryForm from "./CategoryForm.vue"
import ServiceForm from "./ServiceForm.vue"
import NotificationForm from "./NotificationForm.vue"
const tab = ref('category')

</script>

<template>
    <header class="py-5">
        <nav>
            <ul class="flex gap-x-2">
                <li>
                    <button class=" w-20" @click="tab = 'category'" :class="{ 'font-bold': tab === 'category' }">
                        Category
                    </button>
                </li>
                <li>
                    <button class="w-20" @click="tab = 'service'" :class="{ 'font-bold': tab === 'service' }">
                        Service
                    </button>
                </li>
                <li>
                    <button class="w-20" @click="tab = 'notification'" :class="{ 'font-bold': tab === 'notification' }">
                        Notification
                    </button>
                </li>
            </ul>
        </nav>

    </header>


    <Main>

        <CategoryForm v-if="tab == 'category'" />
        <ServiceForm v-if="tab == 'service'" />
        <NotificationForm v-if="tab == 'notification'" />

    </Main>
</template>
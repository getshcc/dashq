<script setup>
import { ref, reactive, onMounted } from "vue"
import { ofetch } from "ofetch";
const categories = ref([])
const services = ref(null)
const selectedServices = ref(null)

onMounted(async () => {
    const fetchServices = async () => {
        const { data } = await ofetch('http://localhost:3000/api/service')
        services.value = data
    }
    fetchServices();
    setInterval(fetchServices, 1000)
})

const formData = reactive({
    option: '',
    title: '',
    price: null
})
console.log(typeof Object.keys(services))
console.log(selectedServices)

const newService = async () => {
    try {
        const res = await ofetch('http://localhost:3000/api/service/add', {
            method: 'POST',
            body: { title: formData.title, price: formData.price, category: formData.option },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return res
    } catch (error) {
        return error
    } finally {
        formData.title = null
        formData.price = null
    }
}


fetch('http://localhost:3000/api/category')
    .then(response => response.json())
    .then(json => categories.value = json)

const submitForm = () => {
    console.log(formData)
}

</script>

<template>
    formData: {{ formData }}
    <br>
    Services: <span class="text-xs">{{ services }}</span>
    <main class="w-full max-w-[768px] mx-auto flex flex-col gap-y-8 pt-8">
        <div class="w-full">
            <header class="font-bold">Choose Category</header>
            <main class="mt-4">
                <form>
                    <select v-model="formData.option"
                        class="tahoma bg-gray-50 border text-gray-900 text-sm rounded focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option v-for="category in  categories" :value="category._id">{{ category.title }}</option>
                    </select>
                </form>
            </main>
        </div>
        <div v-if="formData.option">
            <header class="font-bold">New Service []</header>
            <main class="mt-4">
                <form @submit.prevent="newService" class="w-full flex flex-col gap-y-3">
                    <div class="flex gap-x-2">
                        <input v-model="formData.title" type="text" class="bg-zinc-50 w-full rounded px-4 tahoma border"
                            placeholder="Title">
                        <input v-model="formData.price" type="text" class="bg-zinc-50 rounded px-4 tahoma border w-[120px]"
                            placeholder="Price | IRR">
                        <button class="bg-[#1A73E8] text-white py-3 px-8 rounded" type="submit">Add</button>
                    </div>
                </form>
            </main>
        </div>

        <div v-if="formData.option">
            <header class="font-bold">All Services</header>
            <main class="mt-3">
                <ul v-if="services" class="flex flex-col gap-y-3">
                    <li v-for="service in services" class="flex items-center justify-between">
                        <p class="tahoma">{{ service?.title }}</p>
                        <div class="text-xs flex gap-x-3 text-slate-400">
                            <span @click="console.log(service._id)">Edit</span>
                            <span>Delete</span>
                        </div>
                    </li>
                </ul>
                <div v-else class="w-full flex flex-col gap-y-6 justify-center items-center h-32">
                    <div>
                        <img width="100" height="100"
                            src="https://img.icons8.com/hands/100/experimental-disclaimer-hands.png"
                            alt="experimental-disclaimer-hands" />
                    </div>
                    <p class="font-sans">
                        There are no services available to display
                    </p>
                </div>
            </main>
        </div>
    </main>
</template>
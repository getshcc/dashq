<script setup>
import { ref, reactive, onMounted, computed } from "vue"
import { ofetch } from 'ofetch'
const API_BASE_URL = 'http://localhost:3000/api'

const categories = ref(null)
const error = ref(null)


onMounted(() => {
    const fetchCategories = async () => {
        try {
            categories.value = await ofetch(`${API_BASE_URL}/category`)
            return categories
        } catch (err) {
            error.value = err
        }
    }
    setInterval(fetchCategories, 100)
})



const newCategoryTitle = ref(null)

const addCategory = async () => {
    try {
        const result = await ofetch(`${API_BASE_URL}/category/add`, {
            method: 'POST',
            body: { title: newCategoryTitle.value },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        console.log(result)
        newCategoryTitle.value = null
        return result
    } catch (err) {
        error.value = err
    }
}

const deleteCategory = async (id) => {
    try {
        const result = await ofetch(`${API_BASE_URL}/category/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        console.log(result)
        return result
    } catch (err) {
        error.value = err
    }
}

const editingForm = ref(false)
const selectedCategory = reactive({
    id: null,
    title: ''
})

const editMode = (id, title) => {
    editingForm.value = true
    selectedCategory.id = id
    selectedCategory.title = title
}



const updateCategory = async () => {
    try {
        const result = await ofetch(`${API_BASE_URL}/category/${selectedCategory.id}`, {
            method: 'PUT',
            body: { title: selectedCategory.title },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        console.log("res", result)
        selectedCategory.title = null
        return result
    } catch (error) {
        return error
    } finally {
        editingForm.value = false
    }
}


</script>
<template>
    <main class="w-full max-w-[768px] mx-auto flex flex-col gap-y-8 pt-8">
        <div v-if="!editingForm">
            <header class="font-bold">New Category</header>
            <main class="mt-4">
                <form @submit.prevent="addCategory" class="w-full flex flex-col gap-y-3">
                    <div class="flex gap-x-2">
                        <input v-model="newCategoryTitle" type="text" class="bg-zinc-50 w-full rounded px-4 tahoma border"
                            placeholder="Title">
                        <button class="bg-[#1A73E8] text-white py-3 px-8 rounded">Add</button>
                    </div>
                    <div>
                        <input type="file"
                            class="file:border-solid file:bg-zinc-50 file:border file:border-zinc-200 file:px-5 file:py-2 file:rounded-md file:mr-3 file:hover:bg-zinc-100"
                            name="" id="">
                    </div>
                </form>
            </main>
            <br>
        </div>
        <div v-else>
            <header class="font-bold flex justify-between items-center">
                <span>Update Category</span>
                <span @click="editingForm = false" class="text-xs font-normal">Back</span>
            </header>
            <main class="mt-4">
                <form @submit.prevent="updateCategory" class="w-full flex flex-col gap-y-3">
                    <div class="flex gap-x-2">
                        <input v-model="selectedCategory.title" type="text"
                            class="bg-zinc-50 w-full rounded px-4 tahoma border" placeholder="Title">
                        <button class="bg-zinc-500 text-white py-3 px-8 rounded">Edit</button>
                    </div>
                    <div>
                        <input type="file"
                            class="file:border-solid file:bg-zinc-50 file:border file:border-zinc-200 file:px-5 file:py-2 file:rounded-md file:mr-3 file:hover:bg-zinc-100">
                    </div>
                </form>
            </main>
            <br>

        </div>

        <div v-if="!editingForm">
            <header class="font-bold">All Categories</header>
            <main class="mt-3">
                <ul dir="rtl" class="flex flex-col gap-y-3">
                    <li v-for="category in categories" class="flex items-center justify-between">
                        <p class="tahoma">{{ category?.title }}</p>
                        <div class="text-xs flex gap-x-3 text-slate-400">
                            <button @click="editMode(category._id, category.title)">Edit</button>
                            <button @click="deleteCategory(category._id)">Delete</button>
                        </div>
                    </li>
                </ul>
                <div v-if="error">
                    <p>خطایی رخ داده است.</p>
                </div>
                <div class="flex flex-col justify-center items-center p-12 gap-y-1" v-if="!categories?.length">
                    <div>
                        <img width="100" height="100"
                            src="https://img.icons8.com/hands/100/experimental-disclaimer-hands.png"
                            alt="experimental-disclaimer-hands" />
                    </div>
                    <p class="font-semibold">No categories found.</p>
                </div>
            </main>
        </div>
    </main>
</template>
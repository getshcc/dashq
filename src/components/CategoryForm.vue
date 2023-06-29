<template>
    <main class="w-full max-w-[768px] mx-auto flex flex-col gap-y-8">
        <div>
            <header class="font-bold">New Category</header>
            <main class="mt-4">
                <form class="w-full flex flex-col gap-y-3">
                    <div class="flex gap-x-2">
                        <input type="text" class="bg-zinc-50 w-full rounded px-4 tahoma border" placeholder="Title">
                        <button class="bg-[#1A73E8] text-white py-3 px-8 rounded">Add</button>
                    </div>
                    <div>
                        <input type="file"
                            class="file:border-solid file:bg-zinc-50 file:border file:border-zinc-200 file:px-5 file:py-2 file:rounded-md file:mr-3 file:hover:bg-zinc-100"
                            name="" id="">
                    </div>
                </form>
            </main>
        </div>

        <div>
            <header class="font-bold">All Categories</header>
            <main class="mt-3">
                <ul class="flex flex-col gap-y-3">
                    <li class="flex items-center justify-between">
                        <p class="tahoma">دسته بندی نشده</p>
                        <div class="text-xs flex gap-x-3 text-slate-400">
                            <span>Edit</span>
                            <span>Delete</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between">
                        <p class="tahoma ">دسته بندی 1</p>
                        <div class="text-xs flex gap-x-3 text-slate-400">
                            <span>Edit</span>
                            <span>Delete</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between">
                        <p class="tahoma">دسته بندی 2</p>
                        <div class="text-xs flex gap-x-3 text-slate-400">
                            <span>Edit</span>
                            <span>Delete</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between">
                        <p class="tahoma">دسته بندی 3</p>
                        <div class="text-xs flex gap-x-3 text-slate-400">
                            <span>Edit</span>
                            <span>Delete</span>
                        </div>
                    </li>
                </ul>
            </main>
        </div>
    </main>
</template>
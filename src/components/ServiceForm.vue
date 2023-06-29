<template>
    <main class="w-full max-w-[768px] mx-auto flex flex-col gap-y-8">
        <div class="w-full">
            <header class="font-bold">Choose Category</header>

            <main class="mt-4">
                <select
                    class="tahoma bg-gray-50 border text-gray-900 text-sm rounded focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="" id="">
                    <option value="val1">-</option>
                    <option value="val1">پیرایشگری</option>
                    <option value="val1">پیرایشگری</option>
                    <option value="val1">پیرایشگری</option>
                    <option value="val1">پیرایشگری</option>
                </select>
            </main>
        </div>
        <div>
            <header class="font-bold">New Service</header>
            <main class="mt-4">
                <form class="w-full flex flex-col gap-y-3">
                    <div class="flex gap-x-2">
                        <input type="text" class="bg-zinc-50 w-full rounded px-4 tahoma border" placeholder="Title">
                        <input type="text" class="bg-zinc-50 rounded px-4 tahoma border w-[120px]"
                            placeholder="Price | IRR">
                        <button class="bg-[#1A73E8] text-white py-3 px-8 rounded">Add</button>
                    </div>
                </form>
            </main>
        </div>

        <div>
            <header class="font-bold">All Categories</header>
            <main class="mt-3">
                <ul class="flex flex-col gap-y-3">
                    <li class="flex items-center justify-between">
                        <p class="tahoma">پیرایشگری</p>
                        <div class="text-xs flex gap-x-3 text-slate-400">
                            <span>Edit</span>
                            <span>Delete</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between">
                        <p class="tahoma ">خیاطی</p>
                        <div class="text-xs flex gap-x-3 text-slate-400">
                            <span>Edit</span>
                            <span>Delete</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between">
                        <p class="tahoma">شیرینی پزی</p>
                        <div class="text-xs flex gap-x-3 text-slate-400">
                            <span>Edit</span>
                            <span>Delete</span>
                        </div>
                    </li>
                </ul>
            </main>
        </div>
</main></template>
<template>
    <main class="w-full max-w-[768px] mx-auto flex flex-col gap-y-8 pt-8">
        <div>
            <header class="font-bold">New Notification</header>
            <main class="mt-4">
                <form class="w-full flex flex-col gap-y-3">
                    <div class="flex gap-x-2">
                        <input type="text" class="bg-zinc-50 w-full rounded px-4 tahoma border" placeholder="Title">
                        <button class="bg-[#1A73E8] text-white py-3 px-8 rounded">Publish</button>
                    </div>
                    <div>
                        <textarea class="w-full bg-zinc-50 border p-4" rows="10" placeholder="Write here..."></textarea>
                    </div>
                </form>
            </main>
        </div>

        <div>
            <header class="font-bold">All Notification</header>
            <main class="mt-3">
                <ul class="flex flex-col gap-y-3">
                    <li class="flex items-center justify-between border p-3 rounded">
                        <p class="tahoma">عنوان این اطلاعیه</p>
                        <div class="text-xs flex gap-x-3 text-slate-400">
                            <span>Edit</span>
                            <span>Delete</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between border p-3 rounded">
                        <p class="tahoma">عنوان این اطلاعیه</p>
                        <div class="text-xs flex gap-x-3 text-slate-400">
                            <span>Edit</span>
                            <span>Delete</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between border p-3 rounded">
                        <p class="tahoma">عنوان این اطلاعیه</p>
                        <div class="text-xs flex gap-x-3 text-slate-400">
                            <span>Edit</span>
                            <span>Delete</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between border p-3 rounded">
                        <p class="tahoma">عنوان این اطلاعیه</p>
                        <div class="text-xs flex gap-x-3 text-slate-400">
                            <span>Edit</span>
                            <span>Delete</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between border p-3 rounded">
                        <p class="tahoma">عنوان این اطلاعیه</p>
                        <div class="text-xs flex gap-x-3 text-slate-400">
                            <span>Edit</span>
                            <span>Delete</span>
                        </div>
                    </li>
                    <li class="flex items-center justify-between border p-3 rounded">
                        <p class="tahoma">عنوان این اطلاعیه</p>
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
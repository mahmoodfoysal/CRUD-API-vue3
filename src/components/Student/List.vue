<script setup>
import {
    EyeIcon,
    PencilIcon,
    TrashIcon,
    UserPlusIcon
} from '@heroicons/vue/24/solid'
</script>

<template>
    <div>
        <div class="bg-orange-600 p-4 grid grid-cols-9">
            <div class="col-span-6 md:col-span-8">
                <h1 class="text-3xl font-bold text-center mt-3 text-white">Student List</h1>
            </div>
            <div class="text-right">
                <router-link :to="{name: 'Add'}">
                    <button class="text-white text-md bg-green-700 hover:bg-green-800 font-medium rounded-lg p-2 px-6">
                    <UserPlusIcon /> Add
                </button>
                </router-link>
            </div>
        </div>
        <table class="table-auto w-full">
            <thead class="bg-slate-600 text-white">
                <tr>
                    <th class="py-1">No</th>
                    <th class="py-1">Name</th>
                    <th class="py-1">Email</th>
                    <th class="py-1">Action</th>
                </tr>
            </thead>
            <tbody class="text-center">
                <tr v-for="n in 5">
                    <td class="py-2">1</td>
                    <td class="py-2">Sonam</td>
                    <td class="py-2">sonam@gmail.com</td>
                    <td class="py-2">
                        <EyeIcon class="text-blue-500 h-6 w-6 inline cursor-pointer"></EyeIcon>
                        <PencilIcon class="text-emeraid-500 h-6 w-6 mx-6 inline cursor-pointer"></PencilIcon>
                        <TrashIcon class="text-red-500 h-6 w-6 inline cursor-pointer"></TrashIcon>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped></style>
<script setup>
import useStudent from '../../composiable/studentAPI.js'
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const {getSingleStudent, updateStudent, studentData, error} = useStudent();
onMounted(() => {
    getSingleStudent(route.params.id);
})

const handleUpdateStudentForm = () => {
    updateStudent(route.params.id, studentData.value)
}
</script>

<template>
    <div class="shadow-md pb-6">
        <div class="bg-indigo-600 p-4">
            <h1 class="text-3xl font-bold text-center text-white">Edit Student</h1>
        </div>
        <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium" role="alert">
            Oops! Error encountered: 
        </div>
        <form @submit.prevent="handleUpdateStudentForm" class="w-full">
            <div class="flex items-center m-6">
                <div class="w-1/5">
                    <label class="font-medium" for="stuid"> ID : </label>
                </div>
                <div class="w-4/5">
                    <input
                    v-model.trim="studentData.id"
                    type="text" id="stuid" class="border-2 border-gray-200 w-full py-2 px-4" readonly disabled
                         />
                </div>
            </div>
            <div class="flex items-center m-6">
                <div class="w-1/5">
                    <label class="font-medium" for="stuname"> Name : </label>
                </div>
                <div class="w-4/5">
                    <input 
                    v-model.trim="studentData.stuname"
                    type="text" id="stuname" class="border-2 border-gray-200 w-full py-2 px-4" required
                         />
                </div>
            </div>
            <div class="flex items-center m-6">
                <div class="w-1/5">
                    <label class="font-medium" for="email"> Email : </label>
                </div>
                <div class="w-4/5">
                    <input 
                    v-model.trim="studentData.email"
                    type="email" id="email" class="border-2 border-gray-200 w-full py-2 px-4" required
                         />
                </div>
            </div>

            <div class="m-8 flex justify-center">
                <button type="submit"
                    class="bg-purple-700 text-white font-medium py-2 px-6 rounded-md hover:bg-purple-800 mr-5">
                    Save
                </button>
                <RouterLink :to="{ name: 'List' }">
                    <button type="button" class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800">
                        Back to Home
                    </button>
                </RouterLink>
            </div>
        </form>

        <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium" role="alert">
            
        </div>
    </div>
</template>

<style scoped></style>
<script setup>
import { reactive } from 'vue';
const formData = reactive({
    stuname: '',
    email: '',
});

import useStudent from '@/composiable/studentAPI';
import {onMounted} from 'vue';

const {createStudent, error, studentData} = useStudent();

const handleAddStudentForm = async () => {
    await createStudent(formData);
}
</script>

<template>
    <div class="shadow-md pb-6">
        <div class="bg-indigo-600 p-4">
            <h1 class="text-3xl font-bold text-center text-white">Add Student</h1>
        </div>

        <form
        @submit.prevent="handleAddStudentForm"
        class="w-full" id="AddStudentForm">
            <div class="flex items-center m-6">
                <div class="w-1/5">
                    <label class="font-medium" for="stuname"> Name : </label>
                </div>
                <div class="w-4/5">
                    <input 
                    v-model.trim="formData.stuname"
                    type="text" id="stuname"
                        class="border-2 border-gray-200 w-full py-2 px-4" placeholder="write your name" required />
                </div>
            </div>
            <div class="flex items-center m-6">
                <div class="w-1/5">
                    <label class="font-medium" for="email"> Email : </label>
                </div>
                <div class="w-4/5">
                    <input 
                    v-model.trim="formData.email"
                    type="email" id="email"
                        class="border-2 border-gray-200 w-full py-2 px-4" placeholder="write your email" required />
                </div>
            </div>

            <div class="m-8 flex justify-center">
                <button type="submit"
                    class="bg-purple-700 text-white font-medium py-2 rounded-md px-6 hover:bg-purple-800 mr-6">
                    Add
                </button>
                <router-link :to="{name: 'List'}">
                    <button type="Button"
                    class="bg-purple-700 text-white font-medium py-2 rounded-md px-6 hover:bg-purple-800 mr-6">
                    Back To Home
                </button>
                </router-link>

            </div>
        </form>
        <!-- <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium" role="alert">
            Oops! Error encountered: 
        </div>
        <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium" role="alert">
            Student Added Successfully
        </div> -->
    </div>
</template>

<style scoped></style>
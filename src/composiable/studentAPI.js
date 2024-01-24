import {ref} from 'vue'
import axios from 'axios'

export default function useStudent() {
    // get all student data 
    const url = 'http://localhost:5000/students/';
    const studentData = ref([]);
    const error = ref(null);
    const getAllStudentData = async () => {
        studentData.value = [];
        error.value = null;
        try{
            const res = await axios(url);
            studentData.value = res.data
        }
        catch (err){
            error.value = err.message
        }
    }

    // get student single data 
    const getSingleStudent = async (id) => {
        studentData.value = [];
        error.value = null;
        try{
            const res = await axios(url + id)
            studentData.value = res.data
        }
        catch (err){
            error.value = err.message;
        }
    }

    // post student data 
    const createStudent = async (formData) => {
        studentData.value = [];
        error.value = null;
        try {
            const config = {
                method: 'POST',
                url: url,
                headers: {
                    'Content-type': 'application/json'
                },
                data: JSON.stringify(formData)
            }
            const res = await axios(config);
            studentData.value = res.data;
        }
        catch(err) {
            error.value = err.message;
        }
    }
    
    // update student data 
    const updateStudent = async (id, data) => {
        studentData.value = [];
        error.value = null;
        try {
            const config = {
                method: 'PUT',
                url: url + id,
                headers: {
                    'Content-type': 'application/json'
                },
                data: JSON.stringify(data)
            }
            const res = await axios(config);
            studentData.value = res.data;
        }
        catch(err) {
            error.value = err.message;
        }
    }

    // delete student data 
    const deleteStudent = async (id) => {
        studentData.value = [];
        error.value = null;
        try {
            const config = {
                method: 'DELETE',
                url: url + id,
                headers: {
                    'Content-type': 'application/json'
                },
            }
            const res = await axios(config);
            studentData.value = res.data;
        }
        catch(err) {
            error.value = err.message;
        }
    }

    return {
        getAllStudentData,
        getSingleStudent,
        createStudent,
        deleteStudent,
        updateStudent,
        studentData,
        error
    }
}
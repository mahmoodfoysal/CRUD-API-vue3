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
            error.value = err.message
        }
    }
    return {
        getAllStudentData,
        getSingleStudent,
        studentData,
        error
    }
}
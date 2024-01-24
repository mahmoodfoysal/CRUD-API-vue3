import {ref} from 'vue'
import axios from 'axios'

export default function useStudent() {
    const url = 'http://localhost:5000/students';
    const studentData = ref([]);
    const error = ref(null);
    const getAllStudentData = async () => {
        studentData.value = [];
        error.value = null;
        try{
            const res = await axios(url);
            studentData.value = res.data
            console.log(res.data);
        }
        catch (err){
            console.log(err)
            error.value = err.message
        }
    }
    return {
        getAllStudentData,
        studentData,
        error
    }
}
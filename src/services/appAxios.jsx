import axios from 'axios'
import {  toast } from 'react-toastify';

// url Api
const instance = axios.create({
    baseURL: 'http://localhost:3000'
});


// Error handling
instance.interceptors.response.use(null,error=>{
    console.log(error.response);

    if(error.response && (error.response.status==403 || error.response.status==401))
    {
        toast.error(error.response.data.error);
        return;
    }
    else if(error.response && error.response.status==404)
    {
        toast.error('پیدا نشد');
        return;
    }
    toast.error('خطای اتصال به سرور')
})

// get Token
// const token=localStorage.getItem('token');
// instance.defaults.headers.common["authorization"]="Bearer " + token;

// client
export const client={
    get:instance.get,
    post:instance.post,
    put:instance.put,
    delete:instance.delete
}
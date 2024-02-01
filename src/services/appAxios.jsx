import axios from 'axios'
import {  toast } from 'react-toastify';
const instance = axios.create({
    baseURL: 'http://localhost:3000'
});



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
const token=localStorage.getItem('token');
instance.defaults.headers.common["authorization"]="Bearer " + token;

export const client={
    get:instance.get,
    post:instance.post,
    put:instance.put,
    delete:instance.delete
}
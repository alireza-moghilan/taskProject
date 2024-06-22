import axios from 'axios'
import { toast } from 'react-toastify';

// url Api
const instance = axios.create({
    baseURL: 'http://localhost:4000'
});


// Error handling
instance.interceptors.response.use(null, error => {
    // console.log(error.response);
    // url (put) 
    const getURL=(url)=> {
        const urlArr=url.slice(0,url.length-2);
        return `/${urlArr}`;
    }
    if (error.response && (error.response.status == 403 || error.response.status == 401)) {
        toast.error(error.response.data.error);
        return;
    }
    else if (error.response && error.response.status == 404) {
        toast.error('پیدا نشد');
        return;
    }
    else if (error.response.config.url === '/login') {
        toast.error(error.response.data.message);
        return;
    }
    else if (error.response.config.url === '/register') {
        toast.error(error.response.data.message);
        return;
    }
    else if (error.response.config.url === '/usersEdit') {
        toast.error(error.response.data.message);
        return;
    }
    else if (getURL(error.response.config.url) === '/userInfo') {
        toast.error(error.response.data.message);
        return;
    }
    toast.error('خطای اتصال به سرور')
})

// get Token
// const token=localStorage.getItem('token');
// instance.defaults.headers.common["authorization"]="Bearer " + token;

// client
export const client = {
    get: instance.get,
    post: instance.post,
    put: instance.put,
    delete: instance.delete
}
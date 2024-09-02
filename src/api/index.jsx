import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInterceptor = axios.create({
    baseURL: 'https://ihsanedtech.onrender.com/api/',
    withCredentials: true,
});

axiosInterceptor.interceptors.request.use((config) => {
    const token = Cookies.get('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosInterceptor;
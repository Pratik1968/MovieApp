import axios from "axios";



const request = axios.create({
    baseURL: process.env.EXPO_PUBLIC_BASE_URL, 
    headers: {
        'Content-Type': 'application/json',
    Authorization:`Bearer ${process.env.EXPO_PUBLIC_API_KEY}` 

    },
    
});

request.interceptors.request.use(
    (reqConfig) => {
        // Modify reqConfig if needed, or return as-is
        return reqConfig;
    },
    (error) => Promise.reject(error)
);

export default request;

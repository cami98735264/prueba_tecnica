import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 4000, // wait 4 seconds before timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

// throw error if response status is not 200
axiosInstance.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return response;
        }
        return Promise.reject(response);
    },
    (error) => {
        window.alert("El servidor no responde y/o se encuentra caido en este momento, por favor intenta más tarde");
        return Promise.reject(error);
    }
);



export default axiosInstance;
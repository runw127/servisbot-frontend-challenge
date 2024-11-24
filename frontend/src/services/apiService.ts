import axios from 'axios';

const api = axios.create({
    baseURL: '/api/v1',
});

const getToken = (): string | null => {
    return localStorage.getItem('servisBotToken');
};

api.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

export default api;
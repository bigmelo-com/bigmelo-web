import axios from "axios";
import { getApiUrl, getToken } from ".";

// REQUESTS DECLARATION

const authenticatedRequest = axios.create();
const unAuthenticatedRequest = axios.create();

// REQUESTS CONFIGURATION

// Interceptor para agregar token y URL a las solicitudes
authenticatedRequest.interceptors.request.use(async (config) => {
    const token = await getToken();
    const url = await getApiUrl();

    config.baseURL = url;
    config.headers.Authorization = `Bearer ${token}`;

    return config;
}, (error) => {
    return Promise.reject(error);
});

// Interceptor para agregar URL a las solicitudes
unAuthenticatedRequest.interceptors.request.use(async (config) => {
    const url = await getApiUrl();

    config.baseURL = url;

    return config;
}, (error) => {
    return Promise.reject(error);
});

export { authenticatedRequest, unAuthenticatedRequest };
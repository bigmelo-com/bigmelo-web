import { store } from "../redux/store";

export const getToken = async () => {
    const token = store.getState().tokenState.access_token;
    
    return token;
};

export const getApiUrl = async () => {
    const url = import.meta.env.VITE_LOCAL_API_URL;
    
    return url;
};

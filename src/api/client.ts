import axios from "axios";

const baseURL = import.meta.env.VITE_TENPO_BACKEND_URL;
export const client = axios.create({
    baseURL : `${baseURL}/transactions`,
    headers: {
        'Content-Type': 'application/json'
    }
})

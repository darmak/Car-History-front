import axios from 'axios';
const BASE_URL = "http://localhost:5000";

export const getAllUsers = () => {
    return axios.get(`${BASE_URL}/user`)
        .then(res => res.data)
}
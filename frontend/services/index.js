import axios from "axios";

const token = localStorage.getItem('token');

const API = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {Authorization: `Bearer ${token}`},

})

export default API;
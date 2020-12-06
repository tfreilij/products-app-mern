import axios from 'axios';

const instance = axios.create({
    //baseURL : "https://jsonplaceholder.typicode.com"
    baseURL : "https://localhost:3000"
});

export default instance;
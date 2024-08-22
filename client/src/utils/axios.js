import axios from "axios";

const instance = axios.create({
    // baseURL: "http://localhost:3000"
    baseURL: "https://akinaprematur.lifexdreams.com"
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
})

export default instance;
import axios from "axios"
import { ACCESS_TOKEN } from "./contants"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})
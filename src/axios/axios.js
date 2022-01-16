import axios from "axios";

export const request =  axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
});
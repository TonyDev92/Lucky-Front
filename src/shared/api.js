import axios from "axios";
import Cookies from "js-cookie";
const APIHeaders = {
    'Accept' : 'application/json',
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Authorization' : {
        toString(){
            return `Bearer ${Cookies.get('token')}`;
        }
    }
}
export const API = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL,
    timeout: 10000,
    headers: APIHeaders 
})

import axios from "axios";
import { getToken } from "../auth";

const BASE_URL_LOCAL=`http://localhost:9090/`
const BASE_URL_DEPLOY='https://dps-backend-production.up.railway.app'

export const REG_URL='/api/v1/auth/register'
export const LOGIN_URL='/api/v1/auth/login'
export const NOTICE_URL='/api/notices/'
export const CAROUSEL_URL='api/carousel/'
export const TOPPER_URL='api/topper/'
export const CATEGORY_URL="api/category/"
export const GALLERY_URL="api/gallery/"
export const USER_URL="api/users/"

export const BASE_URL=BASE_URL_DEPLOY;

export const myAxios=axios.create({
    baseURL:BASE_URL,
})

export const myAxiosToken=axios.create({
    baseURL:BASE_URL,
    headers:{
        Authorization:`Bearer ${getToken()}`,
        "Content-type": "application/json; charset=UTF-8"
        //may be we have to add more
    }
})

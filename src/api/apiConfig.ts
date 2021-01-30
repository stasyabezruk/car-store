import { AxiosRequestConfig } from "axios";
import * as qs from "qs";

//export const API_BASE  = process.env.API_BASE || "http://localhost:8080";
const API_KEY = 'edd80ebf-7eac-4a49-84d7-6f2192c13df4';
export const API_BASE  = 'https://reacttestprojectapi.azurewebsites.net' || "http://localhost:8080";
export const apiConfig: AxiosRequestConfig = {
    timeout: 15000,
    baseURL: API_BASE,
    headers: {
        common: {            
            Accept: "application/json",
        },
        'X-API-KEY': API_KEY
    },
    paramsSerializer: (params) => qs.stringify(params, { indices: false }),
};
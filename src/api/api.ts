import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { API_BASE } from "./apiConfig";

export class Api {
    private api: AxiosInstance;

    public constructor (config: AxiosRequestConfig) {
        this.api = axios.create(config);

        this.api.interceptors.request.use((param: AxiosRequestConfig) => {
            const config = {
                ...param,
            baseURL: API_BASE,
            }  
            return {
                ...config
            }
        });
    }

    public get<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.api.get(url, config);
    }
    public post<T, D, R = AxiosResponse<T>> (url: string, data: D, config?: AxiosRequestConfig): Promise<R> {
        return this.api.post(url, data, config);
    }
}

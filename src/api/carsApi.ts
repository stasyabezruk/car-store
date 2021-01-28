import { CarsListItem } from "@/types/carsTypes";
import { AxiosRequestConfig, AxiosResponse } from "axios";

import { Api } from "./api";
import { apiConfig } from "./apiConfig";

class CarsApi extends Api {
    public constructor (apiConfig: AxiosRequestConfig) {
        super(apiConfig);

        this.getAllCars = this.getAllCars.bind(this);
        //this.insertNewUser = this.insertNewUser.bind(this);
    }

    public getAllCars (): Promise<CarsListItem[]> {
        return this.get<CarsListItem[]>(`/Cars/Models`)
        .then((result: AxiosResponse<CarsListItem[]>) => {
            return result.data
        });
    }

    /* public insertNewUser (user: NewUser): Promise<number> {
        return this.post<number, NewUser>(`/api/v1/users`, {...user})
        .then((res: AxiosResponse<number>) => res.status)

    } */
}

export const carsApi = new CarsApi(apiConfig);

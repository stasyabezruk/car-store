import { ICarsListItem } from "@/types/carsTypes";
import { ICarModel } from "@/types/carModelTypes";
import { AxiosRequestConfig, AxiosResponse } from "axios";

import { Api } from "./api";
import { apiConfig } from "./apiConfig";

class CarsApi extends Api {
    public constructor (apiConfig: AxiosRequestConfig) {
        super(apiConfig);

        this.getAllCars = this.getAllCars.bind(this);
        this.getCarsConfigById = this.getCarsConfigById.bind(this);
    }

    public getAllCars (): Promise<ICarsListItem[]> {
        return this.get<ICarsListItem[]>(`/Cars/Models`)
        .then((result: AxiosResponse<ICarsListItem[]>) => {
            return result.data
        });
    }

    public getCarsConfigById (id: string): Promise<ICarModel> {
        return this.get<ICarModel>(`/Cars/Model/${id}`)
        .then((result: AxiosResponse<ICarModel>) => {
            return result.data
        });
    }

   
}

export const carsApi = new CarsApi(apiConfig);

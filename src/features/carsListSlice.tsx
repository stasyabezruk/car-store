import { CarsListItem } from "@/types/carsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CarsListState = {
    cars: CarsListItem[];
    error: string;
}

const initialState: CarsListState = {
    cars: [],
    error: ''
}

const carsListSlice = createSlice({
    name: "carsList",
    initialState,
    reducers: {
        fetchDataCars(state, { payload }: PayloadAction<CarsListItem[]>) {
            state.cars = payload;
        },

        fetchDataCarsError: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
        },
    }
});

export const { 
    fetchDataCars, 
    fetchDataCarsError 
} = carsListSlice.actions;
export default carsListSlice.reducer;
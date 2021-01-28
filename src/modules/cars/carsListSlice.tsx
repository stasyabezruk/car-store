import { ICarsListItem } from "@/types/carsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CarsListState = {
    items: ICarsListItem[];
    isLoading: boolean;
    error: string;
}

const initialState: CarsListState = {
    items: [],
    isLoading: true,
    error: ''
}

const carsListSlice = createSlice({
    name: "carsList",
    initialState,
    reducers: {
        fetchDataCars(state, { payload }: PayloadAction<ICarsListItem[]>) {
            state.items = payload;
            state.isLoading = false;
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
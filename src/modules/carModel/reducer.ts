import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICarModel, ICarTrim } from "@/types/carModelTypes";
import { sortByKey } from "@/utils";

export type CarModelState = {
    modelName: string;
    trims: ICarTrim[];
    selectedTrimName: string;
    selectedColorName: string;
    isLoading: boolean;
    error: string;
}

const initialState: CarModelState = {
    modelName: '',
    trims: [],
    selectedTrimName: '',
    selectedColorName: '',
    isLoading: true,
    error: ''
}

const carModelSlice = createSlice({
    name: "carModel",
    initialState,
    reducers: {
        fetchDataModel(state, { payload }: PayloadAction<ICarModel>) {
            const { name, trims } = payload;
            state.modelName = name;
            state.trims = sortByKey(trims ? trims : [], 'price');

            const [{ colors, name: selectedTrimName }] = sortByKey(trims, 'price');
            state.selectedTrimName = selectedTrimName;

            const [{ name: selectedColorName }] = sortByKey(colors, 'price');
            state.selectedColorName = selectedColorName;

            state.isLoading = false;
        },

        fetchDataModelError: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
        },
    }
});

export const {
    fetchDataModel,
    fetchDataModelError
} = carModelSlice.actions;
export default carModelSlice.reducer;
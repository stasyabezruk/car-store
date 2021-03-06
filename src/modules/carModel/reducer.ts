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
        },

        setIsLoading(state, { payload }: PayloadAction<boolean>) {
            state.isLoading = payload;
        },

        setSelectedTrimName(state, { payload }: PayloadAction<string>) {
            state.selectedTrimName = payload;
        },

        setSelectedColorName(state, { payload }: PayloadAction<string>) {
            state.selectedColorName = payload;
        },

        fetchDataModelError: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
        },
    }
});

export const {
    fetchDataModel,
    setSelectedTrimName,
    setSelectedColorName,
    setIsLoading,
    fetchDataModelError
} = carModelSlice.actions;
export default carModelSlice.reducer;
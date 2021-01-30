import { createSelector } from 'reselect';
import { RootState } from "@/types/baseTypes";
import { ICarTrim, IColor } from "@/types/carModelTypes";
import { CarModelState } from "./reducer";
import { sortByKey } from "@/utils";

const getCarModelReducer = ({ carModel }: RootState): CarModelState => carModel;

export const getCarModelIsLoading = (state: RootState): CarModelState['isLoading'] => getCarModelReducer(state).isLoading;
export const getCarModelName = (state: RootState): CarModelState['modelName'] => getCarModelReducer(state).modelName;
export const getSelectedTrimName = (state: RootState): CarModelState['selectedTrimName'] => getCarModelReducer(state).selectedTrimName;
export const getSelectedColorName = (state: RootState): CarModelState['selectedColorName'] => getCarModelReducer(state).selectedColorName;

export const getTrims = (state: RootState): CarModelState['trims'] => getCarModelReducer(state).trims;

//TRIM
export const getCurrentSelectedTrim = createSelector(
    getTrims,
    getSelectedTrimName,
    (trims: ICarTrim[], name: string): ICarTrim => (
        trims.filter((item: ICarTrim) => item.name === name)[0] || {} as ICarTrim
    ),
);

export const getCurrenSelectedTrimPrice = createSelector(
    getCurrentSelectedTrim,
    ({ price }: ICarTrim): number => price || 0,
);

export const getCurrentSelectedTrimColors = createSelector(
    getCurrentSelectedTrim,
    ({ colors }: ICarTrim): IColor[] => sortByKey(colors || [], 'price'),
);
//END --- TRIM

//COLOR
export const getCurrentSelectedColor = createSelector(
    getCurrentSelectedTrimColors,
    getSelectedColorName,
    (colors: IColor[], name: string): IColor => (
        colors.filter((item: IColor) => item.name === name)[0] || {} as IColor
    ),
);

export const getCurrentSelectedColorPrice = createSelector(
    getCurrentSelectedColor,
    ({ price }: IColor): number => price || 0,
);

export const getCurrentSelectedColorImageUrl = createSelector(
    getCurrentSelectedColor,
    ({ imageUrl }: IColor): string => imageUrl || '',
);

export const getCurrentSelectedColorName = createSelector(
    getCurrentSelectedColor,
    ({ name }: IColor): string => name || '',
);
//END --- COLOR


//SUM PRICE
export const getCurrentModelPrice = createSelector(
    getCurrenSelectedTrimPrice,
    getCurrentSelectedColorPrice,
    (trimPrice: number, colorPrice: number): number => trimPrice + colorPrice,
);


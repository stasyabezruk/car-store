import { CarsListState } from './reducer';
import { RootState } from "@/types/baseTypes";

const getCarsReducer = ({ cars }: RootState): CarsListState => cars;

export const getCarsList = (state: RootState): CarsListState['items'] => getCarsReducer(state).items;
export const getCarsListIsLoading = (state: RootState): CarsListState['isLoading'] => getCarsReducer(state).isLoading;
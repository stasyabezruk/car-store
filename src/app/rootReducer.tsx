import { combineReducers } from "redux";
import carsListSlice from "@/modules/cars/reducer";
import carModelSlice from "@/modules/carModel/reducer";

export let rootReducer = combineReducers({
    cars: carsListSlice,
    carModel: carModelSlice
})

export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        ...injectedReducers,
        cars: carsListSlice,
        carModel: carModelSlice
    });
    return rootReducer;
}


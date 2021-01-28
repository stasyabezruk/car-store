import { combineReducers } from "redux";
import carsListReducer from "@/modules/cars/carsListSlice";

export let rootReducer = combineReducers({
    cars: carsListReducer
})

export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        ...injectedReducers,
        cars: carsListReducer
    });
    return rootReducer;
}


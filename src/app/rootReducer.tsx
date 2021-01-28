import { combineReducers } from "redux";
import carsListReducer from "@/features/carsListSlice";

export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        ...injectedReducers,
        cars: carsListReducer
    });
    return rootReducer;
}


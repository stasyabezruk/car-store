import { call, put, takeLatest, fork, ForkEffect } from "redux-saga/effects";
import { carsApi } from "@/api/carsApi";
import { fetchDataCars, fetchDataCarsError } from "./reducer";
import { FETCH_DATA_CARS } from "./actions";
import { AppAction } from "@/types/baseTypes";

export function* getAllCarsWorker(action: AppAction) {
    try {
        if (FETCH_DATA_CARS.match(action)) {
            let response = yield call(carsApi.getAllCars);
            yield put(fetchDataCars(response));
        }
    } catch (e) {
        yield put(fetchDataCarsError(e.message));
    }
}

function* getAllCarsWatcher() {
    yield takeLatest(FETCH_DATA_CARS.type, getAllCarsWorker);
}

export const carsWatchers: ForkEffect[] = [
    fork(getAllCarsWatcher)
];
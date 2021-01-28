import { call, put, takeEvery, fork, ForkEffect } from "redux-saga/effects";
import { carsApi } from "@/api/carsApi";
import { fetchDataCars, fetchDataCarsError } from "@/features/carsListSlice";
import { getData } from "@/actions/carsActions";
import { AppAction } from "@/types/baseTypes";

export function* getAllCarsWorker(action: AppAction) {
    try {
        if (getData.match(action)) {
            let response = yield call(carsApi.getAllCars);
            yield put(fetchDataCars(response));
        }
    } catch (e) {
        yield put(fetchDataCarsError);
    }
}

function* getAllCarsWatcher() {
    yield takeEvery(getData.type, getAllCarsWorker);
}

export const carsWatchers: ForkEffect[] = [
    fork(getAllCarsWatcher)
];
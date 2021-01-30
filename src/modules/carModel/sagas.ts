import { call, put, takeLatest, fork, ForkEffect } from "redux-saga/effects";
import { carsApi } from "@/api/carsApi";
import { FETCH_DATA_MODEL } from "./actions";;
import { AppAction } from "@/types/baseTypes";
import { fetchDataModel, fetchDataModelError } from "./reducer";

export function* getCarModelWorker(action: AppAction<FETCH_DATA_MODEL>) {
    try {
        if (FETCH_DATA_MODEL.match(action)) {
            let response = yield call(carsApi.getCarsConfigById, action.payload);
            yield put(fetchDataModel(response));
        }
    } catch (e) {
        yield put(fetchDataModelError(e.message));
    }
}

function* getCarModelWatcher() {
    yield takeLatest(FETCH_DATA_MODEL.type, getCarModelWorker);
}

export const carModelWatchers: ForkEffect[] = [
    fork(getCarModelWatcher)
];
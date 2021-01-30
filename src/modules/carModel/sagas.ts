import { call, put, select, takeLatest, fork, ForkEffect } from "redux-saga/effects";
import { history } from "@/app/App";
import { CHECKOUT } from "@/utils/enums/CHECKOUT";
import { AppAction } from "@/types/baseTypes";
import { carsApi } from "@/api/carsApi";
import { FETCH_DATA_MODEL, INIT_CHECKOUT } from "./actions";
import { fetchDataModel, fetchDataModelError, setIsLoading } from "./reducer";
import { getCarModelName, getSelectedTrimName, getSelectedColorName } from "./selectors";

function* getCarModelWorker(action: AppAction<FETCH_DATA_MODEL>) {
    try {
        if (FETCH_DATA_MODEL.match(action)) {
            let response = yield call(carsApi.getCarsConfigById, action.payload);
            yield put(fetchDataModel(response));
        }
    } catch (e) {
        yield put(fetchDataModelError(e.message));
    }
}

function* checkOutWorker(action: AppAction) {
    yield put(setIsLoading(true));

    try {

        if (INIT_CHECKOUT.match(action)) {
            const modelName: string = yield select(getCarModelName);
            const trimName: string = yield select(getSelectedTrimName);
            const colorName: string = yield select(getSelectedColorName);

            yield call(carsApi.setCheckoutModel, {
                modelName,
                trimName,
                colorName,
            });

            history.push(`/checkout/${CHECKOUT.SUCCESS}`);
        }

    } catch (error) {
        console.error(error);
        history.push(`/checkout/${CHECKOUT.FAILURE}`);
    }

    yield put(setIsLoading(false));
}

function* getCarModelWatcher() {
    yield takeLatest(FETCH_DATA_MODEL.type, getCarModelWorker);
}
function* checkOutWatcher() {
    yield takeLatest(INIT_CHECKOUT.type, checkOutWorker);
}

export const carModelWatchers: ForkEffect[] = [
    fork(getCarModelWatcher),
    fork(checkOutWatcher)
];
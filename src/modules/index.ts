import { all } from "redux-saga/effects";
import { carsWatchers } from "./cars/sagas";
import { carModelWatchers } from "./carModel/sagas";

export default function* rootSagas() {
    const watchers = [
        ...carsWatchers,
        ...carModelWatchers
    ];

    yield all(watchers);
}
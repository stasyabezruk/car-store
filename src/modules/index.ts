import { all } from "redux-saga/effects";
import { carsWatchers } from "./cars/carsSaga";

export default function* rootSagas() {
    const watchers = [
        ...carsWatchers
    ];

    yield all(watchers);
}
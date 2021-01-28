import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import { createInjectorsEnhancer } from "redux-injectors";
import logger from "redux-logger";
import createReducer from "./rootReducer";
import rootSaga from "@/modules";

export default function configureAppStore() {
    const reduxSagaMonitorOptions = {};
    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
    const { run: runSaga } = sagaMiddleware;

    const middleware = [
        ...getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
            thunk: false,
        }),
        logger,
        sagaMiddleware
    ];

    const enhancers = [
        createInjectorsEnhancer({
            createReducer,
            runSaga,
        }),
    ];

    const store = configureStore({
        reducer: createReducer(),
        middleware,
        devTools: process.env.NODE_ENV !== 'production',
        enhancers
    });

    sagaMiddleware.run(rootSaga);

    return store;
}



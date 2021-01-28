import { Action } from "@reduxjs/toolkit";
import rootReducer from "@/app/rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

export interface AppAction<T=string, P=any> extends Action {
    type: T;
    payload: P;
}

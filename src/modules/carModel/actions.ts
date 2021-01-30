import { createAction } from '@reduxjs/toolkit';
export const FETCH_DATA_MODEL = createAction<string>('carModel/FETCH_DATA');
export type FETCH_DATA_MODEL = typeof FETCH_DATA_MODEL;

export const INIT_CHECKOUT = createAction('carModel/INIT_CHECKOUT');
export type INIT_CHECKOUT = typeof INIT_CHECKOUT;
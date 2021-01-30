import { createAction } from '@reduxjs/toolkit';
export const FETCH_DATA_CARS = createAction('carsList/FETCH_DATA');
export type FETCH_DATA_CARS = typeof FETCH_DATA_CARS;
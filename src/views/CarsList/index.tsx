import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_DATA_CARS } from "@/modules/cars/actions";
import { getCarsList, getCarsListIsLoading } from "@/modules/cars/selectors";
import CarsListItem from "./CarsListItem";
import { Loader } from "@/components/UI";
import "./CarsList.scoped.scss";

const CarsList = () => {
    const items = useSelector(getCarsList);
    const isLoading = useSelector(getCarsListIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FETCH_DATA_CARS());
    }, [dispatch]);

    if (items.length === 0 || isLoading) {
        return <Loader />
    }

    return (
        <div className="cars-list-container">
            <h1 className="cars-list-header">CHOOSE YOUR NEW CAR</h1>
            <div className="cars-list">
                {items.map(item => {
                    return (
                        <CarsListItem
                            key={item.code}
                            item={item}
                        />
                    )

                })}
            </div>
        </div>

    )
}

export default CarsList;
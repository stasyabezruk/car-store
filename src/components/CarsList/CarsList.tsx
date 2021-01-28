import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from "@/modules/cars/carsActions";
import { RootState } from "@/types/baseTypes";
import CarsListItem from "./CarsListItem";
import { Loader } from "@/components/UI";
import "./CarsList.scoped.scss";

const CarsList = () => {
    const { items, isLoading } = useSelector((state: RootState) => state.cars)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, []);

    if (items.length === 0 || isLoading) {
        return <Loader/>
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
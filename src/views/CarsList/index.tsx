import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_DATA_CARS } from "@/modules/cars/actions";
import { getCarsList, getCarsListIsLoading } from "@/modules/cars/selectors";
import CarsListItem from "./CarsListItem";
import { Layout } from "@/components/hoc";
import "./CarsList.scoped.scss";

const CarsList = () => {
    const items = useSelector(getCarsList);
    const isLoading = useSelector(getCarsListIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FETCH_DATA_CARS());
    }, [dispatch]);

    return (
        <Layout isLoading={isLoading}>
            <div className="cars-list-container">
                <div className="cars-list-header">CHOOSE YOUR NEW CAR</div>
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
        </Layout>
    )
}

export default CarsList;
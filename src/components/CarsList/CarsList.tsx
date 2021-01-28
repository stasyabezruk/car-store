import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from "@/actions/carsActions";

const CarsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, [])

    return (
        <div className="cars-list">

        </div>
    )
}

export default CarsList;
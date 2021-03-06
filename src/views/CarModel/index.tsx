import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FETCH_DATA_MODEL } from "@/modules/carModel/actions";
import CarModelOverview from "./CarModelOverview/CarModelOverview";
import { getCarModelIsLoading } from "@/modules/carModel/selectors";
import { Layout } from "@/components/hoc";
import './index.scoped.scss';
import StepsTemplate from "./StepsTemplate";

interface RouteParams {
    id: string
}

const CarModel = () => {
    const isLoading = useSelector(getCarModelIsLoading);
    const dispatch = useDispatch();

    const { id } = useParams<RouteParams>();

    useEffect(() => {
        dispatch(FETCH_DATA_MODEL(id))
    }, [dispatch, id]);

    return (
        <Layout isLoading={isLoading}>
            <div className="model-view">
                <CarModelOverview />
                <StepsTemplate />
            </div>
        </Layout>
    )

}

export default CarModel;
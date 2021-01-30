import React from 'react';
import { useSelector } from 'react-redux';
import NumberFormat from "react-number-format";
import {
    getCarModelName,
    getSelectedTrimName,
    getCurrentSelectedColorImageUrl,
    getCurrentSelectedColorName,
    getCurrentModelPrice
} from "@/modules/carModel/selectors";
import "./CarModelOverview.scoped.scss";

const CarModelOverview = () => {
    const name = useSelector(getCarModelName);
    const trimName = useSelector(getSelectedTrimName);
    const imageUrl = useSelector(getCurrentSelectedColorImageUrl);
    const colorName = useSelector(getCurrentSelectedColorName);
    const price = useSelector(getCurrentModelPrice);


    return (
        <div className="model">
            <img src={imageUrl} alt={colorName} title={colorName} />

            <div className="model-trim">
                {name} <span className="model-trim-name">{trimName}</span>

                <div className="model-color">
                    {colorName}
                </div>
            </div>

            <div className="model-price">
                <NumberFormat
                    value={price}
                    displayType={"text"}
                    thousandSeparator={'.'}
                    decimalSeparator={','}
                    suffix={' kr.'}
                />
            </div>
        </div>
    );
};

export default CarModelOverview;
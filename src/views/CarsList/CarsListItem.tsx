import React from "react";
import { Link } from 'react-router-dom';
import NumberFormat from "react-number-format";
import { ICarsListItem } from "@/types/carsTypes";
import { STEPS } from "@/utils/enums/STEPS";
import "./CarsList.scoped.scss";

type Props = {
    item: ICarsListItem;
}

const CarsListItem: React.FC<Props> = ({
    item
}) => {

    return (
        <div className="cars-list-item">
            <Link to={`/models/${item.code}/${STEPS.TRIMS}`}>
                <div className="cars-list-item-img">
                    <img src={item.imageUrl} />
                </div>
                <div className="cars-list-item-name">{item.name}</div>
                <div className="cars-list-item-price">
                    <NumberFormat
                        value={item.priceFrom}
                        displayType={"text"}
                        thousandSeparator={'.'}
                        decimalSeparator={','}
                        suffix={' kr.'}
                    />
                </div>
            </Link>

        </div>
    )

}

export default CarsListItem;
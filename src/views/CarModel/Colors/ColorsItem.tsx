import React from 'react';
import NumberFormat from "react-number-format";
import classNames from 'classnames';
import { IColor } from "@/types/carModelTypes";
import './Colors.scoped.scss';

interface Props extends IColor {
    selected?: boolean;    
    onClick: (name: string) => void;
}

const ColorsItem: React.FC<Props> = ({ name, price, iconUrl, selected, onClick }) => (

    <div className={classNames('colors-item', { 'colors-item-selected': selected, })}
        onClick={() => onClick(name)}
    >
        <img src={iconUrl}
            alt={name}
            title={name}
        />

        <div className="colors-item-name">
            {name}
        </div>

        <div className="colors-item-price">
            {price > 0
                ? <NumberFormat
                    value={price}
                    displayType={"text"}
                    thousandSeparator={'.'}
                    decimalSeparator={','}
                    suffix={' kr.'}
                />
                : 'Standard'
            }
        </div>
    </div>
);

export default ColorsItem;
import React from 'react';
import NumberFormat from "react-number-format";
import { ICarTrim } from "@/types/carModelTypes";
import { Button } from "@/components/UI";
import "./Trims.scoped.scss";

interface Props extends ICarTrim {
    selected?: boolean;
    onClick: (name: string) => void;
}

const TrimItem: React.FC<Props> = ({ name, price, selected, onClick }) => (
    <Button
        className={"trim-btn"}
        outlined={!selected}
        onClick={() => onClick(name)}
    >
        {name}

        <div className="trim-btn-price">
            <NumberFormat
                value={price}
                displayType={"text"}
                thousandSeparator={'.'}
                decimalSeparator={','}
                suffix={' kr.'}
            />
        </div>
    </Button>
);

export default TrimItem;
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedColorName } from "@/modules/carModel/reducer";
import { getCurrentSelectedTrimColors, getCurrentSelectedColorName } from "@/modules/carModel/selectors";
import StepsNavPanel from "../StepsNavPanel/StepsNavPanel";
import { STEPS } from "@/utils/enums/STEPS";
import { IColor } from "@/types/carModelTypes";
import ColorsItem from "./ColorsItem";
import './Colors.scoped.scss';

interface RouteParams {
    id: string
}

const Colors = () => {
    const { id } = useParams<RouteParams>();

    const colors = useSelector(getCurrentSelectedTrimColors);
    const selectedColorName = useSelector(getCurrentSelectedColorName);

    const dispatch = useDispatch();

    const handleColorSelected = useCallback(
        (name: string) => dispatch(setSelectedColorName(name)),
        [dispatch],
    );

    /*  const handleSubmit = useCallback(
       () => dispatch(purchaseModel()),
       [dispatch],
     ); */

    return (
        <StepsNavPanel
            title="SELECT COLOR"
            prevUrl={`/models/${id}/${STEPS.TRIMS}`}

        >
            <div className="colors">
                {colors.map((color: IColor) => (
                    <ColorsItem
                        key={color.name}
                        selected={color.name === selectedColorName}
                        onClick={handleColorSelected}
                        {...color}
                    />
                ))}
            </div>
        </StepsNavPanel>
    )
};

export default Colors;
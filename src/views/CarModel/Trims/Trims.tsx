import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedTrimName } from "@/modules/carModel/reducer";
import { getTrims, getSelectedTrimName } from "@/modules/carModel/selectors";
import StepsNavPanel from "../StepsNavPanel/StepsNavPanel";
import { STEPS } from "@/utils/enums/STEPS";
import { ICarTrim } from "@/types/carModelTypes";
import TrimsItem from "./TrimsItem";

interface RouteParams {
    id: string
}

const Trims = () => {
    const dispatch = useDispatch();

    const { id } = useParams<RouteParams>();

    const trims = useSelector(getTrims);
    const selectedTrimName = useSelector(getSelectedTrimName);

    const handleTrimSelected = useCallback(
        (name: string) => dispatch(setSelectedTrimName(name)),
        [dispatch],
    );

    return (
        <StepsNavPanel
            title="CHOOSE EQUIPMENT LEVEL"
            prevUrl={'/models'}
            nextUrl={`/models/${id}/${STEPS.COLORS}`}
            panelType={STEPS.TRIMS}
        >
            <div className="trims">
                {trims.map((trim: ICarTrim) => (
                    <TrimsItem
                        key={trim.name}
                        selected={trim.name === selectedTrimName}
                        onClick={handleTrimSelected}
                        {...trim}
                    />
                ))}
            </div>
        </StepsNavPanel>
    )
}

export default Trims;
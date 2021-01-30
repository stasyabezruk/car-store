import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { Button, ArrowBtn } from "@/components/UI";
import { STEPS } from "@/utils/enums/STEPS";
import { INIT_CHECKOUT } from "@/modules/carModel/actions";
import './StepsNavBtns.scoped.scss';


type Props = {
    prevUrl: string;
    nextUrl: string | undefined;
    panelType: STEPS;
}

const StepsNavBtns: React.FC<Props> = ({
    prevUrl,
    nextUrl,
    panelType
}) => {
    const dispatch = useDispatch();

    const handleSubmitCheckout = useCallback(
        () => dispatch(INIT_CHECKOUT()),
        [dispatch],
    )

    return (
        <div className={classNames("steps-nav-btns", { "two-btns": !nextUrl })}>
            <ArrowBtn url={prevUrl} isBackBtn />

            {panelType === STEPS.COLORS &&
                <Button
                    className="md"
                    children="Proceed"
                    onClick={handleSubmitCheckout}
                />
            }

            <ArrowBtn url={nextUrl} />
        </div>
    )
}

export default StepsNavBtns;
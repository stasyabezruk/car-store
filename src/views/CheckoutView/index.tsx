import React from 'react';
import { useParams } from 'react-router-dom';
import { CHECKOUT } from "@/utils/enums/CHECKOUT";
import { SuccessIcon, FailureIcon } from "@/components/UI";

interface RouteParams {
    result: string
}
const CheckoutView = () => {
    const { result } = useParams<RouteParams>();
    const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    }

    return (
        <div style={styles}>
            {result === CHECKOUT.SUCCESS
                ? <SuccessIcon />
                : <FailureIcon />
            }
        </div>
    );
};

export default CheckoutView;
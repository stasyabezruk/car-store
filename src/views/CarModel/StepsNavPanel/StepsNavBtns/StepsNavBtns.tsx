import React from "react";
import { ArrowBtn } from "@/components/UI";
import './StepsNavBtns.scoped.scss';

type Props = {
    prevUrl: string;
    nextUrl: string | undefined;
}

const StepsNavBtns: React.FC<Props> = ({
    prevUrl,
    nextUrl
}) => {
    return (
        <div className="steps-nav-btns">
            <ArrowBtn url={prevUrl} isBackBtn/>

            {nextUrl && <ArrowBtn url={nextUrl}/>}            
        </div>
    )
}

export default StepsNavBtns;
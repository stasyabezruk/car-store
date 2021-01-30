import React, { ReactNode } from "react";
import StepsNavBtns from "./StepsNavBtns/StepsNavBtns";
import { STEPS } from "@/utils/enums/STEPS";
import "./StepsNavPanel.scoped.scss";

type Props = {
    title: string;
    children: ReactNode;
    prevUrl: string;
    nextUrl?: string;
    panelType: STEPS;
}

const StepsNavPanel: React.FC<Props> = ({
    title,
    children,
    prevUrl,
    nextUrl,
    panelType
}) => {
    return (
        <div className="steps-panel">
            <div className="steps-panel-title">{title}</div>
            <div className="steps-panel-content">
                {children}
            </div>

            
            <StepsNavBtns
                prevUrl={prevUrl}
                nextUrl={nextUrl}
                panelType={panelType}
            />            
        </div>
    )
}

export default StepsNavPanel;
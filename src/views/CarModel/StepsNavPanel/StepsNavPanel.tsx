import React, { ReactNode } from "react";
import StepsNavBtns from "./StepsNavBtns/StepsNavBtns";
import "./StepsNavPanel.scoped.scss";

type Props = {
    title: string;
    children: ReactNode;
    prevUrl: string;
    nextUrl?: string
}

const StepsNavPanel: React.FC<Props> = ({
    title,
    children,
    prevUrl,
    nextUrl
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
            />            
        </div>
    )
}

export default StepsNavPanel;
import * as React from "react";
import { Loader } from "@/components/UI";

export interface LayoutProps {
    children: React.ReactElement;
    isLoading: boolean;
}
const Layout: React.FC<LayoutProps> = ({ 
    children,
    isLoading
}) => {
    if (isLoading) {
        return <Loader/>
    }
    return <>{children}</>;
}

export default Layout;
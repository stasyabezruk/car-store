import * as React from "react";

export interface LayoutProps {
    children: React.ReactElement;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <div className="app-layout">{children}</div>;
}

export default Layout;
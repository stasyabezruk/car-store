import React from "react";
import './Loader.scoped.scss';

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <svg width="70px" height="70px" viewBox="-4 -1 38 28">
                <polygon fill="transparent" stroke="#007EDB" strokeWidth="1" points="15,0 30,30 0,30"></polygon>
            </svg>
        </div>
    )
}

export default Loader;
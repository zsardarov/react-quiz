import React from "react";

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center position-absolute align-items-center bg-white w-100 h-100" style={{right: "0"}}>
            <div className="spinner-border" style={{width: "5rem", height: "5rem"}}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;

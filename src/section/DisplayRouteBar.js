import React from 'react';
import "./global.css";

const DisplayRouteBar = () => {
    return (
        <div className="w-100 bg-light">
            <div className="container d-flex py-2 flex-wrap justify-content-between align-items-center">
                <span className="h5 m-0 fw-bold" style={{color:"#555555"}}>
                    Single Products
                </span>
                <div className="breadcrumb m-0 h-100">
                    <span className="breadcrumb-item align-middle"><a className="text-decoration-none text-dark" href="/">Home</a></span>
                    <span className="breadcrumb-item text-primary active" aria-current="page">Product</span>
                </div>
            </div>
        </div>
    )
}

export default DisplayRouteBar

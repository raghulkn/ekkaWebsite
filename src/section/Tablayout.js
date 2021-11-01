import React from 'react'

const Tablayout = () => {
    return (
        <div className="container mt-2 position-relative">
            <ul className="nav nav-pills position-absolute start-10 translate-middle-y">
                <li className="nav-item me-md-2 me-0">
                    <a className="nav-link px-md-4 px-2 fw-bold active border rounded-0" aria-current="page" href="/">Detail</a>
                </li>
                <li className="nav-item me-md-2 me-0 border">
                    <a className="nav-link px-md-4 px-2 bg-white text-dark fw-bold" href="/">More Information</a>
                </li>
                <li className="nav-item me-md-2 me-0 border">
                    <a className="nav-link px-md-4 px-2 bg-white text-dark fw-bold" href="/">Reviews</a>
                </li>
            </ul>
            <div className="border mt-md-0 border-1 py-4 px-3">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <ul>
                    <li>Any Product types that You want - Simple,Configurable</li>
                    <li>Downloadable/Digital Products, Vitual Products</li>
                    <li>Inventory Management with Backordered items</li>
                    <li>Flatlock seams throughout.</li>
                </ul>
            </div>          
        </div>
    )
}

export default Tablayout

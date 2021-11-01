import React from 'react'

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
                <h1 className="nav-brand">
                    <a className="text-decoration-none text-dark" href="/">Ekka</a>
                </h1>
                <div className="input-group w-50 text-dark position-relative">
                    <input placeholder="Enter your Product Name..." className="form-controls text-secondary border-0 bg-light p-2 w-100" type="search"></input>
                    <button className="position-absolute bg-light me-1 border-0 end-0 translate-middle-y top-50">
                        <i className="bi bi-search text-secondary"></i>
                    </button>
                </div>
                <button type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" className="navbar-toggler">
                    <i className="bi bi-list"></i>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="navMenu">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="/">
                                <i className="bi bi-person fs-1"></i>
                            </a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link position-relative" href="/">
                                <i className="bi bi-heart fs-1"></i>
                                <span className="position-absolute bottom-0  mb-2 translate-middle-x badge rounded-pill bg-danger">
                                4
                                </span>
                            </a>
                        </li>
                        <li className="nav-item ms-3">
                            <a className="nav-link position-relative" href="/">
                                <i className="bi bi-bag fs-1"></i>
                                <span className="position-absolute bottom-0 mb-2  translate-middle-x badge rounded-pill bg-danger">
                                3
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar

import React from 'react'

const BoxDisplay = ({number,text,style}) => {
    return (
        <div style={style} className="d-flex me-1 me-md-3 mt-4 mb-1 bg-light flex-column justify-content-center align-items-center">
            <span className="h5 text-secondary fw-bold">{number}</span>
            <span className="h6 text-muted">{text}</span>
        </div>
    )
}

export default BoxDisplay

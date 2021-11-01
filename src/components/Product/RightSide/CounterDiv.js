import React from 'react'
import ItemCount from './ItemCount'


const CounterDiv = () => {
    return (
        <div className="d-flex flex-wrap py-3 border border-2 border-top-0 border-start-0 border-end-0">
            <ItemCount/>
            <button type="button" className="btn btn-primary me-2 border rounded-0">Add to Cart</button>
            <button type="button" className="btn text-dark btn-outline-secondary me-2 border border-2 rounded-0"><i className="bi bi-heart"></i></button>
            <button type="button" className="btn text-dark btn-outline-secondary me-2 border border-2 rounded-0"><i className="bi bi-eye"></i></button>
        </div>
    )
}

export default CounterDiv

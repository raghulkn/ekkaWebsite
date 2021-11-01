import React from 'react'
import LeftSide from '../components/Product/LeftSide'
import RightSide from '../components/Product/RightSide'
const Product = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <LeftSide/>
                <RightSide/>
            </div>
        </div>
    )
}

export default Product

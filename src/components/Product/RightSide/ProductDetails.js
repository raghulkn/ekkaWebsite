import React,{useContext} from 'react'
import productContext from '../../../productContext'
import BoxButton from '../../BoxButton'
import RadioButton from '../../RadioButton'

const ProductDetails = () => {
    const {product} = useContext(productContext)
    return (
        <div className="mt-3">
            <div className="d-flex border border-2 border-top-0 border-start-0 border-end-0 justify-content-between align-items-center">
                <div className="d-flex flex-column">
                    <span className="fwt-normal">As low as</span>
                    <span className="h4">${product.price}</span>
                </div>
                <div className="d-flex flex-column">
                    <span className="fwt-normal">In Stock</span>
                    <span className="h4">SKU#: WH12</span>
                </div>
            </div>
            <div className="border border-2 py-3 border-top-0 border-start-0 border-end-0">
                <h4 className="fw-bold">SIZE</h4>
                <BoxButton value={product.size} active={0}/>
                <h4 className="fw-bold">COLOR</h4>
                <RadioButton value={['blue','green']}/>
            </div>
        </div>
    )
}

export default ProductDetails

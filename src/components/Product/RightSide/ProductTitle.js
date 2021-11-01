import React from 'react'
import { useContext } from 'react';
import productContext from '../../../productContext';
import StarsComponent from '../../StarsComponent';

const ProductTitle = () => {
    const {product}=useContext(productContext);
    return (
        <div className="pb-4">
           <h4 className="fw-bolder">{product.productName}</h4>
           <div className="d-flex text-warning pb-3">
               <StarsComponent count={5} value={4}/>
               <a href="/" className="border px-2 text-dark border-2 border-top-0 border-bottom-0 border-end-0">Be the first to Review this product</a>
           </div>
           <span className="text-muted">{product.details_short}</span>
        </div>
    )
}

export default ProductTitle

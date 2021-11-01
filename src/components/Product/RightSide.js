import React from 'react';

import ProductTitle from './RightSide/ProductTitle';
import ProductDetails from './RightSide/ProductDetails';

import {product} from "../../Product.database"
import productContext from "../../productContext";
import DiscountPart from './RightSide/DiscountPart';
import CounterDiv from './RightSide/CounterDiv';
import SocialMedia from './RightSide/SocialMedia';


const RightSide = () => {
    return (
        <div className="col-lg-8">
            <productContext.Provider value={{product:product}}>
            <ProductTitle/>
            <DiscountPart/>
            <ProductDetails/>
            <CounterDiv/>
            <SocialMedia/>
            </productContext.Provider>
        </div>
    )
}

export default RightSide

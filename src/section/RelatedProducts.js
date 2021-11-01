import React from 'react';
import CardList from '../components/RelatedProduct/CardList';

const RelatedProducts = () => {
    return (
        <div className="mt-5">
            <h4 className="text-center fw-bolder">Related Products</h4>
            <p className="text-muted text-center">Browse the collection of top Products</p>
            <div className="container">
                <div className="row my-4">
                    <CardList/>
                </div>
            </div>
        </div>
    )
}

export default RelatedProducts

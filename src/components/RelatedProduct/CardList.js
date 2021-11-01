import React from 'react';
import { RelatedProduct } from '../../RelatedProduct.database';
import BoxButton from '../BoxButton';
import RadioButton from '../RadioButton';
import StarsComponent from '../StarsComponent';


const CardList = () => {
    return (
        <>
        {RelatedProduct.map((item,i) => <div key={i} className="col-lg-3 col-md-6"><Card item={item}/></div>)}
        </>
    )
}

const Card = ({item})=>{
    return (<div className="card w-100 p-md-0 p-4 border border-0" style={{width: '18rem'}}>
        <div className="card-img-top position-relative">
            <img src={item.photourl} className="" style={{width:"100%",height:"250px"}} alt="phot"/>
            <div style={{top:"50px"}} className="d-flex w-100 justify-content-between start-0 position-absolute">
                <p className="bg-warning px-1 fw-bolder text-white border border-0 rounded-pill rounded-start">{item.discountPercentage}</p>
                {item.option&&<p className="bg-primary border border-0 text-white px-1 py-0" style={{transform:"rotate(-90deg)"}}>{item.option}</p>}
            </div>
        </div>
        <div className="card-body p-0 pt-2">
        <h5 className="card-title text-muted">{item.name}</h5>
        <StarsComponent count={5} value={item.stars}/>
        <h6 className="fw-bold"><span className="text-decoration-line-through fw-light text-muted">{"$"+item.actualPrice}</span>{"  $"+item.discountPrice}</h6>
        </div>
        <div className="d-flex justify-content-between">
            <RadioButton value={item.colors}/>
            <BoxButton value={item.size}/>
        </div>
    </div>)
}

export default CardList

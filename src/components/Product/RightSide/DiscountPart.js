import React,{useContext} from 'react'
import productContext from '../../../productContext'
import BoxDisplay from '../../BoxDisplay';

const Time = [{
    number:19,
    text:"Days"
},
{
    number:20,
    text:"Hours"
},
{
    number:5,
    text:"Min"
},{
    number:30,
    text:"Sec"
}]

const DiscountPart = () => {
    const {product} = useContext(productContext);
    return (
        <div className="border p-3">
            <h4>Real Time <span className="px-1 bg-primary text-white">{product.discount.visitor}</span> Visitor Right Now!</h4>

            <h6> Hurry up! left {product.instock} in stock</h6>
            <div className="progress" style={{height:"8px"}}>
                <div className="progress-bar bg-dark" style={{width:"75%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex flex-wrap">
                {Time.map(({number,text},i)=><BoxDisplay key={i} number={number} style={{height:"60px",width:"60px"}} text={text}/>)}
                </div>
                <h6 className="text-muted">Time is running out</h6>
            </div>
        </div>
    )
}

export default DiscountPart

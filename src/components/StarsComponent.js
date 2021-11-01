import React from 'react'

const StarsComponent = ({count,value}) => {
    let array = Array.from({length:count},(_,i)=>(value>i)?1:0)
    return <div>{array.map((v,i)=>v?<i key={i} className="bi px-1 text-warning bi-star-fill"></i>:<i key={i} className="bi px-1 text-warning bi-star"></i>)}</div>
}

export default StarsComponent

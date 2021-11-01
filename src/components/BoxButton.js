import React from 'react'

const BoxButton = ({value,onClickHandle,active}) => {
    return (
        <div className="d-flex">
            {value.map((btn,i)=><Button key={i} value={i} active={active} innerText={btn}/>)}
        </div>
    )
}
const Button =({innerText,value,active,onClickHandle})=>{
    return (<button style={{width:'30px',height:'30px'}} onClick={onClickHandle} className={`${active!==value?"bg-light":"active"} my-2 me-2 fw-bold fst-normal d-flex flex-wrap justify-content-center align-items-center text-muted border border-0`}>{innerText}</button>)
}
export default BoxButton

import React from 'react'

const RadioButton = ({value,onClickHandle,active}) => {
    return (
        <div>
            {value.map((v,i)=><Radio key={i} index={i} c={v} active={active} onClickHandle={onClickHandle}/>)}
        </div>
    )
}

const Radio = ({c,onClickHandle,index,active})=>{
   return <input className="form-check-input mx-1" style={{width:"20px",height:"20px",color:c ,backgroundColor:c}} onClick={onClickHandle} type="radio"/>
}

export default RadioButton

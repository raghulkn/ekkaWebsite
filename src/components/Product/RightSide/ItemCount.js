import React,{useState} from 'react'

const ItemCount = () => {
    const [Count, setCount] = useState(0);
    const onClickHandle = (value)=>{
        console.log(value)
        if(value === "add")
        {
            setCount(Count+1)
        }
        if(value === "sub"){
            if(Count>0)
            {
            setCount(Count-1)
            }
        }
    }
    return (
        <div className="me-2">
            <div className="btn-group border border-2 p-1">
                <button type="button" disabled={(Count>0)?false:true} onClick={()=>onClickHandle('sub')} className="btn px-2 py-0"><i className="bi bi-dash"></i></button>
                <button type="button" className="btn px-2 py-0 border border-2 border-top-0 border-bottom-0" disabled>{Count}</button>
                <button type="button" onClick={()=>onClickHandle('add')} className="btn px-2 py-0"><i className="bi bi-plus"></i></button>
            </div>
        </div>
    )
}

export default ItemCount

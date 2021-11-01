import React from 'react'

const RoundButton = ({socialmedia}) => {
    return (
        <>
            {socialmedia.map((v,i)=><Round key={i} name={v.name} url={v.url}/>)}
        </>
    )
}
const Round=({name,url})=>{
    return <a className="text-decoration-none bg-light p-1 me-2 rounded-circle text-secondary" href={url}>
        <i className={`bi bi-${name}`}></i>
        </a>
}

export default RoundButton

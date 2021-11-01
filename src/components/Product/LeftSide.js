import React from 'react'

const images=["https://image.freepik.com/free-photo/high-heel-shoes_1203-8674.jpg",
"https://image.freepik.com/free-photo/women-s-beige-low-heel-shoes-fashion_53876-108039.jpg",
"https://image.freepik.com/free-photo/bridal-shoes-blue-background_1220-1774.jpg"]

const LeftSide = () => {
    const Active = 0;
    return (
        <div className="col-lg-4 position-relative">
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <Carousel urls={images}/>
                <CarouselControl/>
                <CarouselIndicator urls={images} active={Active}/>
            </div>
        </div>
    )
}
const Carousel = ({urls})=>{
    return <div className="carousel-inner">
        {urls.map((url,i)=><CarouselItem key={i} id={i} url={url}/>)}
    </div>
}

const CarouselItem = ({url,id})=>{
    return <div style={{height:"360px"}} className={(id===0)?"carousel-item w-100 active":"w-100 carousel-item"}>
        <img src={url} onChange={()=>console.log('hello')} style={{objectFit:'cover'}} className="d-block w-100" height="360px" alt="..."/>
    </div>
}

const CarouselControl = ()=>{
    return <>
    <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </>
}
const CarouselIndicator=({urls,active})=>{
    return <div className="carousel-indicators position-relative">
        {urls.map((url,i)=><Indictor key={i} id={i} active={active} url={url}/>)}
        
    </div>
}

const Indictor=({url,id,active})=>{
    return <div>
        <img data-bs-target="#carousel" data-bs-slide-to={id}  className={(id===active)?"active border border-0":"border border-0"} style={{width:"100px",height:"100px"}} src={url} alt="indicator"/>
    </div>
}

export default LeftSide

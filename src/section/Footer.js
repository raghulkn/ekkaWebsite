import React from 'react'

const link=[
    {
        Title:"Information",
        links:[{
            text:'About us',
            url:'/'
        },{
            text:'FAQ',
            url:'/'
        },{
            text:'Delivery Information',
            url:'/'
        },{
            text:'Contact us',
            url:'/'
        }]
    },
    {
        Title:"Account",
        links:[{
            text:'My Account',
            url:'/'
        },{
            text:'Order History',
            url:'/'
        },{
            text:'Wish List',
            url:'/'
        },{
            text:'Specials',
            url:'/'
        }]
    },
    {
        Title:"Services",
        links:[{
            text:'Discount Returns',
            url:'/'
        },{
            text:'Policy & policy',
            url:'/'
        },{
            text:'Customer Service',
            url:'/'
        },{
            text:'Term & condition',
            url:'/'
        }]
    }
]

const Footer = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <FooterStart/>
                {link.map((link,i)=>{
                    return <div key={i} className="col-lg-2 col-6">
                        <h4 className="text-muted pb-2 border border-2 border-top-0 border-start-0 border-end-0">{link.Title}</h4>
                        {link.links.map((link,i)=><FooterLink key={i} text={link.text}/>)}
                    </div>
                })}
                <FooterEnd/>
            </div>             
        </div>
    )
}
const FooterStart = ()=>{
    return (
        <div className="col-lg-3 col-md-6 col-12">
            <h2 style={{color:"#555555"}} className="fw-bold fs-1">Ekka</h2>
            <p className="text-muted fw-normal fs-6">71 Pilgrim Avenue Chevy Chase, east california.</p>
            <h6 style={{color:"#555555"}} className="fw-bold">Call Us:<FooterLink text="+44 0123 456 789" url="/"/></h6>
            <h6 style={{color:"#555555"}} className="fw-bold">Email:<FooterLink text="+example@ec-email.com" url="/"/></h6>
        </div>
    )
}
const FooterEnd= ()=>{
    return (
        <div className="col-lg-3 col-md-6 col-12">
            <h4 className="text-muted pb-2 border border-2 border-top-0 border-start-0 border-end-0">Newsletter</h4>
            <p style={{color:"#555555"}}>Get Instant updates about our new products and special promos!</p>
            <div className="input-group w-100 text-dark position-relative">
                <input placeholder="Enter your email here..." className="form-controls position-relative text-secondary border-0 bg-light p-2 w-100" type="search"></input>
                <button className="btn btn-primary position-absolute translate-middle-y end-0 top-50">
                    <i className="bi bi-arrow-up-right-square text-white"></i>
                </button>
            </div>
        </div>
    )
}
const FooterLink=({text,url})=>{
    return <div className="mt-2"><a color={{color:'#55555'}} href={url} className="text-decoration-none text-muted fw-normal">{text}</a></div>
}

export default Footer

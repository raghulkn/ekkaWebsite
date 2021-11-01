import React from 'react'
import RoundButton from '../../RoundButton'
const media = [{
    name:'facebook',
    url:'/'
},
{
    name:'twitter',
    url:'/'
},
{
    name:'instagram',
    url:'/'
},{
    name:'youtube',
    url:'/'
},{
    name:'behance',
    url:'/'
},{
    name:'whatsapp',
    url:'/'
},{
    name:'plus',
    url:'/'
}]
const SocialMedia = () => {
    return (
        <div className="mt-4 mb-5">
            <RoundButton socialmedia={media}/>
        </div>
    )
}

export default SocialMedia

import React from 'react'

import CardImage from '../../components/CardImage'
import BasicCard from '../../components/BasicCard'

import '../../assets/css/Home/home.css'

export default function Home() {

    return (
        <BasicCard>
            <div className='row'>
                <div className='col-md-12 cardImageHome'>
                    <CardImage urlImage='https://via.placeholder.com/728x150.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide%20C/O%20https://placeholder.com/'/>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 cardImageHome'>
                    <CardImage urlImage='https://via.placeholder.com/228x150.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide%20C/O%20https://placeholder.com/'/>
                </div>
                <div className='col-md-6 cardImageHome'>
                    <CardImage  urlImage='https://via.placeholder.com/228x150.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide%20C/O%20https://placeholder.com/'/>
                </div>
            </div>
        </BasicCard>

    )
}

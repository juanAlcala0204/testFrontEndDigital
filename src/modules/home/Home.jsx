import React from 'react'

import CardImage from '../../components/CardImage'
import BasicCard from '../../components/BasicCard'

import '../../assets/css/Home/home.css'

export default function Home() {

    return (
        <BasicCard>
            <div className='row'>
                <div className='col-md-12 cardImageHome'>
                    <CardImage />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6 cardImageHome'>
                    <CardImage />
                </div>
                <div className='col-md-6 cardImageHome'>
                    <CardImage />
                </div>
            </div>
        </BasicCard>

    )
}

import React from 'react'

import CardImage from '../../components/CardImage'

import '../../assets/css/Home/home.css'

export default function home() {

    return (
        <div className='card'>
            <div className='card-body'>
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
            </div>
        </div>
    )
}

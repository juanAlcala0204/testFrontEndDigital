import React from 'react'

import BasicCard from '../../components/BasicCard'

import '../../assets/css/Albums/albums.css'

export default function Albums() {
    return (
        <div>
        <BasicCard>
            <div className='row'>
                <div className='col'>
                    <nav class="navbar navbar-light bg-light navbarAlbums">
                        <div className='col'></div>
                        <div className='col'>
                            <a class="navbar-brand" href="#">Albumes</a>
                        </div>
                        <div className='col'></div>
                    </nav>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <BasicCard>
                       
                    </BasicCard>
                </div>
            </div>
        </BasicCard>
    </div>
    )
}

import React from 'react'

import BasicCard from '../../components/BasicCard'

import '../../assets/css/Posts/posts.css'

export default function Posts() {
    return (
        <div>
            <BasicCard>
                <div className='row'>
                    <div className='col'>
                        <nav className="navbar navbar-light bg-light navbarAlbums">
                            <div className='col'></div>
                            <div className='col'>
                                <a className="navbar-brand">Publicaciones</a>
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

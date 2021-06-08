import React from 'react'

import BasicCard from '../../components/BasicCard'

import '../../assets/css/Users/users.css'

export default function Users() {
    return (
        <div>
            <BasicCard>
                <div className='row'>
                    <div className='col'>
                        <nav class="navbar navbar-light bg-light navbarUser">
                            <div className='col'></div>
                            <div className='col'>
                                <a class="navbar-brand" href="#">Usuarios</a>
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

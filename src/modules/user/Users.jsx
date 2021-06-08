import React from 'react'

import BasicCard from '../../components/BasicCard'
import List from './List'

import '../../assets/css/Users/users.css'

import User from '../../services/User/userServices'

export default function Users() {

    const service = new User();

    return (
        <div>
            <BasicCard>
                <div className='row'>
                    <div className='col'>
                        <nav className="navbar navbar-light bg-light navbarUser">
                            <div className='col'></div>
                            <div className='col'>
                                <a className="navbar-brand" >Usuarios</a>
                            </div>
                            <div className='col'></div>
                        </nav>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <BasicCard>
                            <List service={service}/>   
                        </BasicCard>
                    </div>
                </div>
            </BasicCard>
        </div>
    )
}

import React from 'react'

export default function BasicCard({ children }) {
    return (
        <div className='card'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

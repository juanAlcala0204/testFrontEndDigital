import React from 'react'

export default function BasicCard({ children, header = false }) {
    return (
        <div className='card'>
            {header && (
                <div className='card-header'>
                    {header}
                </div>
            )}
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

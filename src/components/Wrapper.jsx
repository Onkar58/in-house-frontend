import React from 'react'
import Navbar from './Navbar'
import Header from './Header'

const Wrapper = ({ children }) => {
    return (
        <div className='flex'>
            <Navbar />
            <div className='flex flex-col'>
                <Header />
                {children}
            </div>
        </div>
    )
}

export default Wrapper
import React from 'react'
import Navbar from './Navbar'

const Wrapper = ({ children }) => {
    return (
        <div className='mx-auto my-0 w-screen px-5 md:px-10 lg:w-[90%] xl:w-4/5 min-h-screen'>
                <Navbar />
                <div className='pseudoNavbar h-16 w-full'></div>
                {children}
        </div>
    )
}

export default Wrapper
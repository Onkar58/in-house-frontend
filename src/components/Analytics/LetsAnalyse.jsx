import React from 'react'
import selmon from "../../assets/Selmon.png"

const LetsAnalyse = () => {
    return (
        <div className='relative z-10 flex items-center justify-center p-10 mt-20'>
            <img src={selmon} className='size-80 absolute -z-[1] left-1/2 -translate-y-[30%]' />
            <h1 id="analyse" className='text-[10rem] font-[700] text-white'>
                ANALYSE
            </h1>
        </div>
    )
}

export default LetsAnalyse
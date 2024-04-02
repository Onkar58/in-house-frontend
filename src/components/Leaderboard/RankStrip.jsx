import React from 'react'
import { useNavigate } from 'react-router-dom'

const RankStrip = ({ data, position }) => {
    const navigator = useNavigate()
    return (
        <div className='w-full bg-[#ffffff42] flex items-center justify-between px-5 py-2 rounded-md text-center text-sm text-opacity-70' onClick={() => navigator(`/student/${data.username}`) }>
            <div className='flex items-center w-max gap-3 text-start'>
                <img src={data.userAvatar} alt="Profile" className='size-10 rounded-full' />
                <span className='w-40'>
                    <h1 className='text-lg font-[600]'>{data.realName ? data.realName.split(" ")[0] : data.username}</h1>
                    <h2 className='text-sm font-[400] '>{data.realName ? data.username : ""}</h2>
                </span>
            </div>
            <span>
                <h1 className='text-2xl font-[600]'>{position}</h1>
            </span>
            <span className='hidden sm:block'>
                <h1 className='text-lg font-[600]'>{data.ranking}</h1>
                <h2 className=''>Rank</h2>
            </span>
            <span className='hidden sm:block'>
                <h1 className='text-lg font-[600]'>{data.starRating}</h1>
                <h2 className='oapcity-70'>Rating</h2>
            </span>
            <svg width="8" height="18" viewBox="0 0 8 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M1.42842 17.3334C1.10483 17.3334 0.781232 17.1701 0.534744 16.8451C0.0405021 16.1934 0.0405021 15.1401 0.534744 14.4884L4.71241 8.98009L0.692749 3.49176C0.20862 2.82842 0.222525 1.77342 0.72435 1.13509C1.22744 0.496756 2.02758 0.515089 2.51171 1.17509L7.39345 7.84176C7.87252 8.49676 7.8662 9.53509 7.37828 10.1784L2.3221 16.8451C2.07561 17.1701 1.75202 17.3334 1.42842 17.3334" fill="black" />
            </svg>

        </div>
    )
}

export default RankStrip
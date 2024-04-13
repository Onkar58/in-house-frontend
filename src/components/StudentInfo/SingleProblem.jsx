import React from 'react'

const SingleProblem = ({info}) => {
    var utcSeconds = info.timestamp;
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    // d.setUTCSeconds(utcSeconds);
    return (
    <div className='mt-5 rounded-md flex justify-between items-center w-full bg-[#d9d9d9] bg-opacity-10 text-white p-3 px-10'>
        <p className='w-[400px]'>{info.title}</p>
        <p>{d.setUTCSeconds(utcSeconds)}</p>
        <p>{info.lang}</p>
    </div>
  )
}

export default SingleProblem
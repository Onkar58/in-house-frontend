import React from 'react'

const StudentStrip = ({data, status}) => {
  return (
    <div className='bg-white bg-opacity-20 flex w-full px-10 py-3' >
        <p className='underline text-lg text-white'>{data.username}</p>
        <p>{status}</p>
        {/* <p>{data.level}</p> */}
    </div>
  )
}

export default StudentStrip
import React from 'react'
import { useNavigate } from 'react-router-dom'
const StudentCard = ({ data, email }) => {
  const navigate = useNavigate()
  return (
    <div className="relative size-32 sm:size-40 md:size-48" onClick={() => navigate(`/student/${data.username}`)}>
      <img className='rounded-t-lg size-full' src={data.userAvatar} alt={data.realName} />
      <span className='w-full p-2 bg-[#d9d9d9] rounded-b-lg font-[600] flex items-center justify-between flex-wrap'>
        <h1>{data.realName ? data.realName.split(" ")[0] : data.username}</h1>
        <h1 className='opacity-50 '>{data.ranking}</h1>
      </span>
    </div>
  )
}

export default StudentCard
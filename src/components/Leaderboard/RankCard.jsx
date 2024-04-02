import React from 'react'
import { useNavigate } from 'react-router-dom'

const RankCard = ({ data, position }) => {
  const navigator = useNavigate()
  return (
    <div className={`text-black ${position === 1 ? "sm:order-2 scale-110" : position === 2 ? "sm:order-1 scale-100" : "sm:order-3 scale-90"} bg-[#ffffff52] shadow-[2px_2px_5px_#ffffff42] p-5 aspect-[4/5] h-[220px] rounded-md`} onClick={() => navigator(`/student/${data.username}`) }>
      <div className=''>
        <img src={data.userAvatar} alt="profile" className='w-12 h-12 rounded-full' />
        <h1 className='mt-2 text-xl font-[600]'>{data.realName ? data.realName.split(" ")[0] : data.username}</h1>
        <h2 className='text-[12px] opacity-70 font-[300]'>{data.realName ? data.username : ""}</h2>
      </div>
      <span className='flex items-center justify-center  text-sm gap-10 mt-5 text-center'>
        <h1 className='text-5xl font-[600]'>{position}</h1>
        <h2 className=' opacity-70'><span className='text-xl font-[600]'>{data.ranking}</span> <br /> Rank </h2>
      </span>
    </div>
  )
}

export default RankCard
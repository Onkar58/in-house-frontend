import React from 'react'

const StudentCard = ({ data }) => {
  return (
    <div className="size-32 sm:size-40 md:size-48" onClick={() => window.open(`https://www.leetcode.com/${data.username}`)}>
      <img className='rounded-t-lg size-full' src={data.userAvatar} alt={data.realName} />
      <span className='w-full p-2 bg-white rounded-b-lg font-[600] flex items-center justify-between flex-wrap'>
        <h1>{data.realName ? data.realName.split(" ")[0] : data.username}</h1>
        <h1 className='opacity-50 '>{data.ranking}</h1>
      </span>
    </div>
  )
}

export default StudentCard
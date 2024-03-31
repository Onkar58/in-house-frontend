import React from 'react'
import { Link } from 'react-router-dom'

const spanStyle = "underline cursor-pointer "

const MainInfo = ({info}) => {

  return (
    <div className='flex items-center justify-evenly w-full mt-20 bg-white bg-opacity-20 p-10 rounded-lg'>
        <div className='flex flex-col gap-5'>
            <h1 className='text-3xl font-[600]'>{info.name || info.username}</h1>
            <span className={spanStyle + "-mt-5"} onClick={() => window.open(`https://www.leetcode.com/${info.username}`, "_blank")}>@{info.username}</span>
            <h1 className='mt-5'>Location: <span>{info.country || "India"}</span></h1>
            {info.linkedinUrl && <h1 onClick={() => window.open(info.linkedinUrl, "_blank")}>LinkedIn: <span className={spanStyle}>{info.linkedinUrl.split("/")[4]}</span></h1> }
            {info.twitterUrl &&  <h1 onClick={() => window.open(info.twitterUrl, "_blank")}>Twitter: <span className={spanStyle}>{info.twitterUrl.split("/")[3]}</span></h1> }
        </div>
        <div className='w-1/2'>
          <img src={info.userAvatar} className='ml-auto w-1/2 rounded-full'/>
        </div>
    </div>
  )
}

export default MainInfo
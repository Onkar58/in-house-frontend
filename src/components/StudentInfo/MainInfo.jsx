import React from 'react'
import { Link } from 'react-router-dom'

const spanStyle = "underline cursor-pointer "

const MainInfo = ({ info, addStudent, deleteStudent, isStudentPresent }) => {

  return (
    <div className='relative flex items-center justify-evenly w-full mt-20 bg-white bg-opacity-20 p-10 rounded-lg'>
      <button
        title={isStudentPresent ?  "Delete Student" : "Add Student"}
        className='absolute top-0 right-0 bg-green-400 bg-opacity-80 px-2 aspect-square rounded-md text-white text-2xl font-[600] cursor-pointer '
        onClick={isStudentPresent ? deleteStudent : addStudent}>
        {
          isStudentPresent ? <svg className='size-5 cursor-pointer' viewBox="0 0 24 24">
            <path d="M 10 2 L 9 3 L 5 3 C 4.4 3 4 3.4 4 4 C 4 4.6 4.4 5 5 5 L 7 5 L 17 5 L 19 5 C 19.6 5 20 4.6 20 4 C 20 3.4 19.6 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.1 5.9 22 7 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 7 L 5 7 z M 9 9 C 9.6 9 10 9.4 10 10 L 10 19 C 10 19.6 9.6 20 9 20 C 8.4 20 8 19.6 8 19 L 8 10 C 8 9.4 8.4 9 9 9 z M 15 9 C 15.6 9 16 9.4 16 10 L 16 19 C 16 19.6 15.6 20 15 20 C 14.4 20 14 19.6 14 19 L 14 10 C 14 9.4 14.4 9 15 9 z" fill='black'></path>
          </svg> : "+"
        }
      </button>
      <div className='flex flex-col gap-5'>
        <h1 className='text-3xl font-[600]'>{info.name || info.username}</h1>
        <span className={spanStyle + "-mt-5"} onClick={() => window.open(`https://www.leetcode.com/${info.username}`, "_blank")}>@{info.username}</span>
        <h1 className='mt-5'>Location: <span>{info.country || "India"}</span></h1>
        {info.linkedinUrl && <h1 onClick={() => window.open(info.linkedinUrl, "_blank")}>LinkedIn: <span className={spanStyle}>{info.linkedinUrl.split("/")[4]}</span></h1>}
        {info.twitterUrl && <h1 onClick={() => window.open(info.twitterUrl, "_blank")}>Twitter: <span className={spanStyle}>{info.twitterUrl.split("/")[3]}</span></h1>}
      </div>
      <div className='w-1/2'>
        <img src={info.userAvatar} className='ml-auto w-1/2 rounded-full' />
      </div>
    </div>
  )
}

export default MainInfo
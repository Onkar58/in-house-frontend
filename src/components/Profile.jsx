import React, { useEffect, useState } from 'react'
import { useUserAuth } from '../providers/UserContext'
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const inputStyles = `border-none p-2 px-5 rounded-md font-[500] text-xl`

const Profile = () => {
  const { user } = useUserAuth()
  const [teachersData, setTeachersData] = useState({})
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [batchData, setBatchData] = useState({ branch: "", year: "", div: "", startNo: "", endNo: "" })
  const changeBatchData = (e) => {
    setBatchData({
      ...batchData,
      [e.target.name]: e.target.value
    })
  }
  const getTeachersData = async () => {
    const teachersData = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/user/getuserbyemail/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: user?.email
      })
    })
    const jsonData = await teachersData.json()
    if (jsonData.success) {
      setTeachersData(jsonData.user)
    }
    else {
      toast.error("Error getting Data, Refresh Page")
    }
  }

  const addBatch = async (e) => {
    e.preventDefault()
    const isBatchAdded = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/user/addbatch/`, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        email: user.email,
        formData: batchData
      })
    })
    const data = await isBatchAdded.json()
    if (data.success) {
      toast.success(data.message)
      setIsFormOpen(false)
      console.log(data.message);
    }
  }

  const deleteBatch = async () => {
    const isBatchDeleted = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/user/deletebatch/`, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        email: user.email,
      })
    })
    const data = await isBatchDeleted.json()
    if (data.success) {
      toast.success(data.message)
    }
  }

  useEffect(() => {
    getTeachersData()
  }, [])
  return (
    <>
      <div className='flex h-min  mt-20 justify-center items-center'>
        <div className='w-1/2 text-center'>
          <h1 className='text-3xl font-[600] text-white'>{teachersData?.name}</h1>
          <h2 className='text-white '>{teachersData?.email}</h2>
        </div>
        <div className='w-1/2'>
          <img src={teachersData.profilePic} className='w-1/2 aspect-square rounded-full' />
        </div>
      </div>
      {teachersData?.batches?.length === 0 ?
        <button onClick={() => setIsFormOpen(true)} className='bg-green-400 bg-opacity-80 p-3 px-5 rounded-md text-white font-[600] cursor-pointer'>Add TG Batch</button> :
        <section>
          <h1 className='text-3xl font-[600] text-white my-10'>Mentees</h1>
          <p className='text-white flex items-center justify-start p-2 text-xl'>
            <span className='w-1/4 text-center'>Branch</span>
            <span className='w-1/4 text-center'>Year</span>
            <span className='w-1/4 text-center'>Div</span>
            <span className='w-1/4 text-center'>Roll</span>
            <span className='ml-auto opacity-0'>
              <svg className='size-5 cursor-pointer' viewBox="0 0 24 24" onClick={null}>
                <path d="M 10 2 L 9 3 L 5 3 C 4.4 3 4 3.4 4 4 C 4 4.6 4.4 5 5 5 L 7 5 L 17 5 L 19 5 C 19.6 5 20 4.6 20 4 C 20 3.4 19.6 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.1 5.9 22 7 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 7 L 5 7 z M 9 9 C 9.6 9 10 9.4 10 10 L 10 19 C 10 19.6 9.6 20 9 20 C 8.4 20 8 19.6 8 19 L 8 10 C 8 9.4 8.4 9 9 9 z M 15 9 C 15.6 9 16 9.4 16 10 L 16 19 C 16 19.6 15.6 20 15 20 C 14.4 20 14 19.6 14 19 L 14 10 C 14 9.4 14.4 9 15 9 z" fill='white'></path>
              </svg>
            </span>
          </p>
          {teachersData && teachersData?.batches?.map((batch, idx) =>
            <p className='text-white bg-[#d9d9d9] bg-opacity-10 flex items-center justify-start p-2 text-xl' key={idx}>
              <span className='w-1/4 text-center'>{batch.branch.toUpperCase()}</span>
              <span className='w-1/4 text-center'>{batch.year.toUpperCase()}</span>
              <span className='w-1/4 text-center'>{batch.div.toUpperCase()}</span>
              <span className='w-1/4 text-center'>{batch.startNo} - {batch.endNo}</span>
              <span className='ml-auto' title='Delete Batch' onClick={deleteBatch}>
                <svg className='size-5 cursor-pointer' viewBox="0 0 24 24" onClick={null}>
                  <path d="M 10 2 L 9 3 L 5 3 C 4.4 3 4 3.4 4 4 C 4 4.6 4.4 5 5 5 L 7 5 L 17 5 L 19 5 C 19.6 5 20 4.6 20 4 C 20 3.4 19.6 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.1 5.9 22 7 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 7 L 5 7 z M 9 9 C 9.6 9 10 9.4 10 10 L 10 19 C 10 19.6 9.6 20 9 20 C 8.4 20 8 19.6 8 19 L 8 10 C 8 9.4 8.4 9 9 9 z M 15 9 C 15.6 9 16 9.4 16 10 L 16 19 C 16 19.6 15.6 20 15 20 C 14.4 20 14 19.6 14 19 L 14 10 C 14 9.4 14.4 9 15 9 z" fill='white'></path>
                </svg></span>
            </p>
          )}
        </section>
      }
      {
        isFormOpen &&
        <div onClick={() => setIsFormOpen(false)} className='absolute h-full w-full bg-black  bg-opacity-50 top-0 left-0 flex items-center justify-center backdrop-blur-md'>
          <form onSubmit={addBatch} onClick={(e) => e.stopPropagation()} className='flex flex-col gap-2 blur-none '>
            <input className={inputStyles} type='text' value={batchData.branch} onChange={changeBatchData} name="branch" placeholder='TG Branch' />
            <input className={inputStyles} type='text' value={batchData.year} onChange={changeBatchData} name="year" placeholder='TG Year' />
            <input className={inputStyles} type='text' value={batchData.div} onChange={changeBatchData} name="div" placeholder='TG Division' />
            <input className={inputStyles} type='number' value={batchData.startNo} onChange={changeBatchData} name="startNo" placeholder='Enter Start Roll Number' />
            <input className={inputStyles} type='number' value={batchData.endNo} onChange={changeBatchData} name="endNo" placeholder='Enter End Roll Number' />
            <button type='submit' className='bg-green-400 bg-opacity-80 p-3 px-5 rounded-md text-white font-[600] cursor-pointer'>Add Batch</button>
          </form>
        </div>
      }
    </>
  )
}

export default Profile
import React, { useState, useEffect } from 'react'
import Herosection from './Homepage/Herosection'
import StudentCards from './Homepage/StudentCards'
import { useUserAuth } from '../providers/UserContext'
import toast from 'react-hot-toast'


const Homepage = () => {
  const [studentsData, setStudentsData] = useState([""])

  const { user } = useUserAuth()

  const fetchStudentsData = async () => {
    const studentData = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/user/gethomepagedata/`, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        email: user.email
      })
    })
    const stIds = await studentData.json()
    if (stIds) {
      setStudentsData(await stIds["data"]?.reverse())
    }
  }
  
  useEffect(() => {
    fetchStudentsData();
    console.log(studentsData);
  }, [])
  return (
    <div>
      <Herosection />
      {
        studentsData?.length === 0 ?
          <h1 className='text-center text-white text-3xl mt-20 font-[600]'>No Student is Added</h1> :
          <StudentCards studentsData={studentsData} />}
    </div>
  )
}

export default Homepage
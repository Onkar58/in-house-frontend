import React, { useState, useEffect } from 'react'
import Herosection from './Homepage/Herosection'
import StudentCards from './Homepage/StudentCards'
import { auth } from '../utils/firebaseConfig'

import { useUserAuth } from '../providers/UserContext'


const Homepage = () => {
  const [studentsData, setStudentsData] = useState([""])

  const user = useUserAuth()

  const addStudent = async (studentId) => {
    const isStudentAdded = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/user/addstudent/`, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        input: studentId
      })
    })
    const studentAdded = await isStudentAdded.json()
    if (studentAdded.success) {
      console.log("Student Added");
      fetchStudentsData()
    }
    else
      console.log("Errorrrrrr");
  }

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
      setStudentsData(stIds["data"]?.reverse())
    }
  }
  useEffect(() => {
    fetchStudentsData()
  }, [])
  return (
    <div>
      <Herosection addStudent={addStudent} />
      {
        studentsData?.length === 0 ?
          <h1>No Student is Added</h1> :
          <StudentCards studentsData={studentsData} />}
    </div>
  )
}

export default Homepage